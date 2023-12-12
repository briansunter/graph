import './code.css'
import avatar from '../../static/images/avatar.jpg';
import socialIcons from './social.toml';
import { Post } from '../../lib/types';
import { BlogSection } from '../../components/BlogPostPreview';
import { Navbar } from '../../components/Navbar';
import { PageProps } from './+onBeforeRender';
import { useEffect } from 'react';
import SubstackEmbed, { SubstackSection } from '../../components/SubstackEmbed';

export { Page }

interface ProfileProps {
  title: string;
  aboutHeader: string;
  aboutDescription: string;
}

const Profile = ({ title, aboutHeader, aboutDescription }: ProfileProps) => {
  return (
    <div className="bg-gray-200 mb-8 w-full lg:w-10/12">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-gray-900 leading-none mt-4 mb-14">{title}</h1>

      {/* Layout container */}
      <div className="flex flex-col md:flex-row">

        {/* Avatar */}
        <div className="md:flex-shrink-0">
          <img src={avatar} alt="Profile Image" className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full" />
        </div>

        {/* About Header and Description */}
        <div className="flex flex-col flex-grow ml-4 justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-500 mb-2 justify-center">{aboutHeader}</h2>
          <div className="home-intro mt-4 lg:mt-0 hidden lg:block " style={{ minHeight: '100px' }}>
            <div dangerouslySetInnerHTML={{ __html: aboutDescription }} />
          </div>
        </div>
      </div>
      <div className="home-intro mt-10 lg:mt-0 lg:hidden" style={{ minHeight: '100px' }}>
        <div dangerouslySetInnerHTML={{ __html: aboutDescription }} />
      </div>
    </div>
  );
};


const iconModules = import.meta.glob('/static/images/icons/*.svg', { eager: true });

const getIcon = (icon: string) => {
  const socialIcon = socialIcons.social.find(socialIcon => socialIcon.icon === icon);
  if (!socialIcon) return { image: null, name: null };

  const iconImage = iconModules[`/static/images/icons/${socialIcon.icon}`] as { default: string }

  if (!iconImage) return { image: null, name: null };
  return {
    image: <img width="20" height="20" src={iconImage.default} className="w-20 h-20 transform hover:scale-110" />,
    name: <span className="hover:underline text-lg mt-auto">{socialIcon.name}</span>
  };
};

function encryptEmail(email: string) {
  return email.split("").map((char) => {
    return String.fromCharCode(char.charCodeAt(0) + 1);
  }).join("");
}

function decryptEmail(encrypedEmail: string) {
  return encrypedEmail.split("").map((char) => {
    return String.fromCharCode(char.charCodeAt(0) - 1);
  }).join("");
}

const SocialMediaIcon = ({ icon, url, name }: { icon: string, url: string, name: string }) => {
  const iconElement = getIcon(icon);

  if (name === 'email') {
    useEffect(() => {
      const emailUrl = `mailto:${decryptEmail(url)}`;
      setTimeout(() => {
        document.getElementById(`social-${name}`).setAttribute('href', emailUrl);
      }, 2000);
    }, []);
  }

  return (
    <div className="w-25 h-40">
      <a id={`social-${name}`} href={url} className="social-icon" aria-label={icon}>
        <div className="flex flex-col justify-between items-center w-25 h-32">
          {iconElement.image}
          {iconElement.name}
        </div>
      </a>
    </div>
  );
};

type SocialIcons = typeof socialIcons.social;

const SocialLinks = ({ socialIcons = [], socialAbout }: { socialIcons: SocialIcons, socialAbout: string }) => {
  return (
    <div className='lg:w-10/12'>
      <h2 className="text-6xl font-bold">Social</h2>
      <p className="text-3xl lg:text-xl mb-6">
        {socialAbout}
      </p>
      <div className="grid grid-flow-col gap-4 bg-gray-200">
        {socialIcons.map((icon) =>
          <SocialMediaIcon key={icon.icon} {...icon} />
        )}
      </div>
    </div>
  );
}

const Page = ({ socialIcons, blogPosts, blogAbout, homePages, title, socialAbout, aboutHeader, aboutDescription }: PageProps) => {
  return (
    <div className="bg-gray-200 min-w-screen">
      <div className="lg:container lg:mx-auto lg:px-8 ">
        {/* <Navbar title=""/> */}
        <Profile title={title} aboutHeader={aboutHeader} aboutDescription={aboutDescription} />
        <SocialLinks socialIcons={socialIcons} socialAbout={socialAbout} />
        <SubstackSection title='Newsletter' substackAbout={'Sign up for my newsletter to recieve updates on my projects and ideas. I write about programming, AI, web development, and my personal interests. You can see previous issues in the next section. '} />
        <BlogSection title="Blog" blogPosts={blogPosts} blogAbout={blogAbout} />
        <BlogSection title="Pages" blogPosts={homePages} blogAbout={blogAbout} />
      </div>
    </div>
  );
};

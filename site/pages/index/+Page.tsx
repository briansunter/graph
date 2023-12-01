import './code.css'
import avatar from '../../static/images/avatar.jpg';
import socialIcons from './social.toml';
import { Post } from '../../lib/types';
import { BlogSection } from '../../components/BlogPostPreview';
import { Navbar } from '../../components/Navbar';
import { PageProps } from './+onBeforeRender';
import { useEffect } from 'react';

export { Page }

interface ProfileProps {
  title: string;
  aboutHeader: string;
  aboutDescription: string;
}

const Profile = ({title, aboutHeader, aboutDescription }:ProfileProps) => {
  return (
    <div className="bg-gray-200 mb-8 w-11/12">
      <h1 className="text-9xl font-extrabold text-gray-900 leading-none mb-4">{title}</h1>
      <div className="md:flex md:items-center">
        <img src={avatar} alt="Brian Sunter" className="w-64 h-64 rounded-full mx-auto md:mx-0" />
        <div className="mt-4 md:mt-0 md:ml-6">
          <h2 className="text-2xl font-semibold text-gray-500 mb-2">{aboutHeader}</h2>
          <div className="md-content mr-20" style={{ minHeight: '100px' }}>
            <div dangerouslySetInnerHTML={{__html: aboutDescription }} />
          </div>
        </div>
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

function encryptEmail(email:string){
  return email.split("").map((char) => {
    return String.fromCharCode(char.charCodeAt(0) + 1);
  }).join("");
}

function decryptEmail(encrypedEmail:string){
  return encrypedEmail.split("").map((char) => {
    return String.fromCharCode(char.charCodeAt(0) - 1);
  }).join("");
}

const SocialMediaIcon = ({ icon, url, name }: { icon: string, url: string, name: string }) => {
  const iconElement = getIcon(icon);

  if (name === 'email'){
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

const SocialLinks = ({ socialIcons=[], socialAbout }: { socialIcons: SocialIcons, socialAbout: string }) => {
  return (
    <div>
      <h2 className="text-6xl font-bold">Social</h2>
      <p className="text-lg mb-4 w-11/12"> 
      {socialAbout}
      </p>
      <div className="grid grid-flow-col gap-4 bg-gray-200 w-10/12"> 
        {socialIcons.map((icon) =>
          <SocialMediaIcon key={icon.icon} {...icon} />
        )}
      </div>
    </div>
  );
}

const Page = ({socialIcons, blogPosts, blogAbout, homePages, title, socialAbout, aboutHeader, aboutDescription }: PageProps) => {
  return (
    <div className="bg-gray-200 min-w-screen">
      <div className="container mx-auto px-4 md:px-8 "> 
        {/* <Navbar title=""/> */}
        <Profile title={title} aboutHeader={aboutHeader} aboutDescription={aboutDescription}/>
        <SocialLinks socialIcons={socialIcons} socialAbout={socialAbout} />
        <BlogSection title="Blog" blogPosts={blogPosts} blogAbout={blogAbout}/>
        <BlogSection title="Pages" blogPosts={homePages} blogAbout={blogAbout}/>
      </div>
    </div>
  );
};

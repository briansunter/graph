import avatar from '../../static/images/avatar.jpg';
import { Post } from '../../lib/types';
import { BlogSection } from '../../components/BlogPostPreview';
import { Navbar } from '../../components/Navbar';
import { PageProps } from './+onBeforeRender';
export { Page }

interface ProfileProps {
  title: string;
  aboutHeader: string;
  aboutDescription: string;
}


const Page = ({pages, title, redirectTo}: PageProps) => {
  return (
    <div className="bg-gray-200">
      {redirectTo && <meta httpEquiv="refresh" content={`0; URL=${redirectTo}`} />}
      <div className="lg:container mx-auto"> 
        <Navbar title="Brian Sunter"/>
        <BlogSection title={title} blogPosts={pages} blogAbout={""}/>
      </div>
    </div>
  );
};

import { Page as PageType } from './+onBeforeRender';
import { Navbar } from '../../components/Navbar';
import { Tag } from '../../components/Tag';
import { ImageData } from '../../lib/ImageProcessor';
import '../../renderer/css/katex.min.css'
export { Page };

interface Props {
  page: PageType;
}

const Content = ({ content }: { content: string }) => (
  <div
    className="md-content bg-gray-200 leading-relaxed text-gray-800 text-lg"
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const Details = ({ title, date, responsiveCoverImage=[], description, tags, placeholder }: { title: string; date: string; responsiveCoverImage: ImageData[], placeholder: string, description: string; tags: string[] }) => (
  <div className="bg-gray-200">
    <h1 className="text-6xl font-extrabold font-header tracking-tight text-gray-800">{title}</h1>
    <p className="text-4xl lg:text-2xl mb-4 lg:w-10/12 text-gray-600">{description}</p>
    <div className="flex flex-row items-center mb-4">
      <span className="text-xl lg:text-lg font-medium mr-4 font-ui text-gray-500 text-center">{date}</span>
      {tags && <div className="flex flex-wrap"> {tags.map(tag => <Tag key={tag} shouldMargin={false} text={tag}  />)} </div> }
    </div>
    { responsiveCoverImage.length > 0  ? 
  <img 
    srcSet={responsiveCoverImage.map(i => i.srcset).join(", ")}
    loading='lazy'
    style = {{
      backgroundImage: `url(${placeholder})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      objectPosition: 'center center',
      backgroundPosition: 'center center',
      width: '100%',
      height: '30vw'
    }}
    alt="Cover"
    height="800"
    className="w-full object-cover rounded-lg mb-6"
  />
  :
  <hr className="border-t border-gray-300 my-6 mx-auto" />
}
  </div>
);

const Page = (props: Props) => {
  if (!props.page) {
    // console.log("NOPAGE",props); 
    return null;
  }
  const { content, props: pageProps, title } = props.page;
  return (
    <div className="min-h-screen p-4 bg-gray-200">
    <Navbar title="Brian Sunter's Blog" />
      <div className="mx-auto rounded-lg overflow-hidden">
        <Details 
          title={title} 
          date={pageProps.date} 
          responsiveCoverImage={pageProps.responsiveCoverImage || []} 
          placeholder={pageProps.coverPlaceholder || ""}
          description={pageProps.description}
          tags={pageProps.tags}
        />
        <Content content={content} />
      </div>
    </div>
  );
};

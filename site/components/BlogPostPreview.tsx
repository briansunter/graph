import { ImageData } from 'lib/ImageProcessor';
import { Tag } from './Tag';
import { DateTime } from 'luxon';
interface BlogPostCardProps {
  title: string;
  description: string;
  coverimage: string;
  tags: string[];
  date: string;
  permalink: string;
  responsiveCoverImage: ImageData[];
  coverPlaceholder: string;
}
function getRandomGradient() {
  const color1 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  const color2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  const angle = Math.floor(Math.random() * 360);
  return `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 100%)`;
}
export const BlogPostCard = ({
  title,
  description,
  tags,
  permalink,
  props,
}: BlogPostCardProps) => {
  const formattedDate = DateTime.fromISO(props.date).toLocaleString(DateTime.DATE_MED);
  // const srcSet = responsiveCoverImage.map(imageData => imageData.srcset).join(', ');
  // const sortedImages = responsiveCoverImage.sort((a, b) => a.width - b.width);
  // const sizes = '100vw';

  // const srcSet = sortedImages.map(imageData => imageData.srcset).join(', ');
  // const sizes = '(min-width: 480px) 480px, 100vw';
  const srcSet = props.responsiveCoverImage  && props.responsiveCoverImage[0].srcset || "";
  const imageStyle = 
  {
    background: props.coverPlaceholder ? `url(${props.coverPlaceholder})` : getRandomGradient(),
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    objectPosition: 'center center',
    backgroundPosition: 'center center',
    width: '100%'
  }

const handleImageError = (e) => {
  e.target.style.visibility = 'hidden';
};

let image = <img className="w-full h-64 object-cover object-center" loading='lazy' srcSet={srcSet} alt={`Image for ${title}`} style={imageStyle} onError={handleImageError}/>;
if (srcSet === "" || srcSet === undefined){
  image = <div className="w-full h-64 object-cover object-center" style={imageStyle}></div>
}
  return (
    <div className="no-underline">
      <div className="h-full rounded shadow-lg flex flex-col hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer bg-gray-200 border border-gray-300">
        <a href={permalink}>
          {image}
        </a>
        <div className="px-6 py-2 flex-grow flex flex-col">
          <a className="no-underline" href={permalink}>
            <h3 className="no-underline font-bold text-xl my-3 line-clamp-3 font-ui text-gray-800" style={{ minHeight: '4.5rem', lineHeight: '1.1' }}>{title}</h3>
          </a>
          <p className="text-gray-800 text-base flex-grow line-clamp-3" style={{ minHeight: '8.0rem' }}>
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags?.map((tag, index) => (
            <Tag key={index} text={tag} shouldMargin={true}/>
          ))}
        </div>
        <p className="text-gray-600 text-base font-ui px-6 py-3">{formattedDate}</p>
      </div>
    </div>
  );
}

interface BlogSectionProps {
  title: string;
  blogAbout: string;
  blogPosts?: Page[]
}

export const BlogSection = ({ title, blogAbout, blogPosts=[] }: BlogSectionProps) => {
  return (
    <main className="lg:w-10/12">
      <h2 className="text-6xl font-bold text-left">{title}</h2>
      <p className="lg:text-lg text-3xl mb-8">
        {blogAbout}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-stretch w-full">

        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
      {/* <div className="flex justify-center mt-6">
        <a href="/blog" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          Read More Blog Posts
        </a>
      </div> */}
    </main>
  );
};

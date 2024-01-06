interface SubstackEmbedProps {
  width?: number;
  height?: number;
}

export const SubstackEmbed: React.FC<SubstackEmbedProps> = ({ width = 480, height = 220 }) => (
  <iframe 
  className="w-full lg:w-3/4 mx-auto"
    src="https://newsletter.briansunter.com/embed" 
    width={width} 
    height={height} 
    style={{border: '1px solid #EEE', background: 'white'}} 
    frameBorder="0" 
    scrolling="no"
  />
);
export default SubstackEmbed;


interface SubstackSectionProps {
    title: string;
    substackAbout: string;
    substackEmbeds?: SubstackEmbedProps[];
  }
  export const SubstackSection: React.FC<SubstackSectionProps> = ({ title, substackAbout }) => {
    return (
      <main className="flex flex-col items-start lg:w-10/12 mx-auto">
        <h2 className="text-6xl font-bold text-left">{title}</h2>
        <p className="lg:text-xl text-3xl mb-8">
          {substackAbout}
        </p>
        <div className="flex flex-col lg:flex-row gap-8 mb-8 items-stretch w-full">
          <SubstackEmbed />
        </div>
      </main>
    );
  };
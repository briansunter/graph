import React from "preact/compat"
import Test3 from "./test3"
import SocialIcons from "./_includes/components/SocialIcons";
import { Post } from "./types";
import BlogPreview from "./_includes/components/BlogPreview";
export const frontmatter = {
    title: 'A tragic tale',
    eleventyImport: {
        collections: ['post']
    },
}
const HomePage: React.FC<any> = ({collections}) => {

  return (
    <div>
      <header>
        <h1>Welcome to My Personal Site</h1>
        <img src="path_to_image.jpg" alt="Profile" />
        <p>I'm a passionate software engineer...</p>
      </header>

      <section>
        <h2>Social Profiles</h2>
        <SocialIcons />
      </section>

      <section>
        <h2>Blog</h2>
        {collections["post"].map((post: Post) => (<BlogPreview key={post.url} title={post.data.title} description={post.data.description} date={post.date}/>))}
      </section>
    </div>
  );
}

export default HomePage;

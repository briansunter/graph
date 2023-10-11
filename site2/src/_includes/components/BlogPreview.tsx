import React from "preact/compat"
interface BlogProps {
  title: string;
  date: Date;
  description: string;
}

const BlogPreview: React.FC<BlogProps> = ({ title, date, description}) => (
  <article>
    <h3>{title}</h3>
    <p>{date.toISOString()}</p>
    <p>{description}</p>
  </article>
);

export default BlogPreview;

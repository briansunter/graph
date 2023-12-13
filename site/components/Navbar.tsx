interface NavbarProps {
  title: string;
}

export const Navbar = ({title}: NavbarProps) => {
    return (
      <nav className="flex items-center my-4">
        <div className="flex items-center mr-auto">
          <a href="/" className="inline-flex items-center space-x-2">
            <span className="text-gray-900 text-2xl font-bold h-8 font-ui flex items-center justify-center">{title}</span>
          </a>
        </div>
        <ul className="flex space-x-4">
          {/* <li><a href="/blog" className="hover:underline text-2xl">Blog</a></li>
          <li><a href="/projects" className="hover:underline text-2xl">Projects</a></li>
          <li><a href="/about" className="hover:underline text-2xl">About</a></li> */}
        </ul>
      </nav>
    );
  };
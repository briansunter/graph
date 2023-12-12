export const Tag = ({ text, shouldMargin = false }: { text: string, shouldMargin?: boolean }) => {
  const href = text === 'newsletter' ? '/newsletter' : `/tags/${text}`;
  return (
    <a href={href} className={`inline-block text-xl lg:text-sm font-semibold text-blue-700 bg-blue-200 rounded-full px-8 py-3 lg:px-4 lg:py-2 cursor-pointer mb-2 lg:mb-0 hover:bg-blue-300 hover:shadow-md transition duration-300 ease-in-out no-underline mr-2 ${shouldMargin ? 'mb-2' : ''}`}>
      {text}
    </a>
  );
};
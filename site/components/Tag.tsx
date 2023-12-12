export const Tag = ({ text, shouldMargin = false }: { text: string, shouldMargin?: boolean }) => {
  const href = text === 'newsletter' ? '/newsletter' : `/tags/${text}`;
  return (
    <a href={href} className={`inline-block text-sm font-semibold text-blue-700 bg-blue-200 rounded-full px-4 py-2 cursor-pointer hover:bg-blue-300 hover:shadow-md transition duration-300 ease-in-out no-underline mr-2 ${shouldMargin ? 'mb-2' : ''}`}>
      {text}
    </a>
  );
};
// components/icons/LibraryIcon.tsx

const LibraryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1.423 4.42a.923.923 0 0 0 0 1.847H6.96a.923.923 0 0 0 0-1.847H1.423Z" fill="currentColor"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.73 11.344a6 6 0 1 1 10.846 3.54l3.654 3.653a.923.923 0 0 1-1.306 1.306l-3.654-3.654a6 6 0 0 1-9.54-4.845Zm6-4.154a4.154 4.154 0 1 0 0 8.307 4.154 4.154 0 0 0 0-8.307Z" fill="currentColor"></path>
      <path d="M.5 12.728c0-.51.413-.923.923-.923h3.692a.923.923 0 0 1 0 1.846H1.423a.923.923 0 0 1-.923-.923ZM1.423 19.19a.923.923 0 1 0 0 1.846h7.385a.923.923 0 1 0 0-1.846H1.423Z" fill="currentColor"></path>
    </svg>
  );
}

export default LibraryIcon;

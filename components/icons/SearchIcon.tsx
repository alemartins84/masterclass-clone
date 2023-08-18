// components/icons/SearchIcon.tsx

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.518 4.722a6.296 6.296 0 1 0 0 12.593 6.296 6.296 0 0 0 0-12.593ZM2 11.018a8.519 8.519 0 1 1 17.037 0 8.519 8.519 0 0 1-17.037 0Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.66 16.157a1.111 1.111 0 0 1 1.57 0l4.445 4.445a1.111 1.111 0 0 1-1.571 1.571l-4.445-4.444a1.111 1.111 0 0 1 0-1.572Z" fill="currentColor"></path>
    </svg>
  );
}

export default SearchIcon;

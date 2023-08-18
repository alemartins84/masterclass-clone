// components/icons/ArrowDownIcon.tsx

const ArrowDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="25" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* A simple triangular arrow design. Adjust the path to match the specific design in the image. */}
      <path fillRule="evenodd" clipRule="evenodd" d="M2.325 7.322a1.12 1.12 0 0 1 1.572 0L12 15.344l8.103-8.022a1.12 1.12 0 0 1 1.572 0c.433.43.433 1.126 0 1.556l-8.89 8.8a1.12 1.12 0 0 1-1.57 0l-8.89-8.8a1.092 1.092 0 0 1 0-1.556Z" fill="currentColor"></path>
    </svg>
    
  );
}

export default ArrowDownIcon;

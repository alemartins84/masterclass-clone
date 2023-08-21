// components/CategoryCard.tsx
import Link from 'next/link';

interface CategoryCardProps {
  iconURL: string; // This allows us to pass a React element (like an SVG component) as an icon
  label: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ iconURL, label }) => (
  <Link href="#">
  <div className="flex-shrink-0 flex flex-col items-center justify-center w-28 h-24 bg-indigo-950 hover:bg-indigo-900 shadow-md rounded-md mt-2 text-white text-sm transition-colors">
  {iconURL && <img src={iconURL} alt={label} />}
    <span className="mt-2 text-center">{label}</span>
  </div>
  </Link> 
);

export default CategoryCard;

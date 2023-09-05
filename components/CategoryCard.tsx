// components/CategoryCard.tsx
import Link from 'next/link';
import { urlFor} from '../sanity/lib/image';
import { Category } from '../types/sharedTypes';

type CategoryCardProps = {
  category: Category;
};

const defaultIconUrl = "https://cdn.sanity.io/files/lkc88fqo/production/96984ac10e8c290b7d64488a63c489fb7b928356.svg";

const CategoryCard = ({ category }: CategoryCardProps) => {
  const iconUrl = category.icon?.asset?.url || defaultIconUrl;
  return (
    <Link href="#">
      <div className="flex-shrink-0 flex flex-col items-center justify-center w-28 h-24 bg-indigo-950 hover:bg-indigo-900 text-center shadow-md rounded-md mt-2 text-white text-sm transition-colors">      
        <object
          type="image/svg+xml"
          data={iconUrl}
          className="object-contain w-6 h-6"
          onLoad={(e) => {
            const objectElement = e.target as HTMLObjectElement;
            const svgDocument = objectElement.contentDocument;
            const svgElement = svgDocument?.querySelector("svg");
            if (svgElement) {
              svgElement.style.stroke = "#ffffff"; // Change the color
            }
          }}
        />
        <span>{category.title}</span>
      </div>
    </Link>
  );
};

export default CategoryCard;

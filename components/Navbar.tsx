// components/Navbar.tsx
import LearnAnythingIcon from '../components/icons/LearnAnythingIcon';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-indigo-900 text-white">
      <div className="flex-shrink-0">
        <img src="/mc-logo.svg" alt="Your Brand Name" className="h-8 w-auto" />
      </div>
      <div className="flex-grow flex justify-center hidden md:flex space-x-4">
        <a href="#" className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-500 hover:rounded hover:underline">
          <LearnAnythingIcon className="w-6 h-6" />
          <span>Learn Anything</span>
        </a>
        <a href="#" className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-500 hover:rounded hover:underline">
          <span>Discover</span>
        </a>
        <a href="#" className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-500 hover:rounded hover:underline">
          
          <span>My Progress</span>
        </a>
        <a href="#" className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-500 hover:rounded hover:underline">
          <span>Library</span>
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded">Action</button>
      </div>
    </nav>
  );
}

export default Navbar;

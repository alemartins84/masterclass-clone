import React, { ReactNode } from 'react';

// components/Layout.tsx
import Navbar from './Navbar';  // Adjust the import based on your directory structure

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
      <div>
          <Navbar />
          <main id="root" className='bg-gradient-to-br from-blue-950 to-violet-950'>
              {children}
          </main>
          {/* Optionally add a footer or any other global components here */}
      </div>
  );
}

export default Layout;

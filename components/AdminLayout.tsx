// components/AdminLayout.tsx

import React from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className={`w-64 bg-white p-4 shadow-lg`}>
        {/* Sidebar content, like navigation links */}
        <h2 className="text-xl mb-4 font-bold">Admin Panel</h2>
        <ul>
          <li className="mb-2">
              <a href="/admin/categories" className="block px-4 py-2 hover:bg-gray-200 rounded">Categories</a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </aside>
      <main className="flex-1 p-4 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;

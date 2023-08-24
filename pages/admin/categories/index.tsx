// pages/admin/categories/index.tsx
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminLayout from '../../../components/AdminLayout';
import { Category } from '../../../types/category';

const CategoriesAdmin = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [notificationMessage, setNotificationMessage] = useState<string | null>(null);
  const router = useRouter();

  type NotificationMessages = {
    [key: string]: string;
  };

  const notifications: NotificationMessages = {
    'CategoryAdded': 'Category added successfully!',
    'CategoryUpdated': 'Category updated successfully!',
    // Add more notifications here if needed
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (confirmDelete) {
      try {
        const response = await fetch(`/api/categories/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Refresh the categories list or remove the deleted category from state
          setCategories(prevCategories => prevCategories.filter(cat => cat._id !== id));
        } else {
            console.error("Error deleting category.");
        }
      } catch (error) {
          console.error("There was an error sending the delete request:", error);
      }
    }
  };

  useEffect(() => {
    const message = notifications[router.query.notification as keyof typeof notifications];
    if (message) {
      setNotificationMessage(message);

      // Hide the notification after a few seconds
      const timer = setTimeout(() => {
        setNotificationMessage(null);
        // Optionally, remove the query parameter
        router.replace('/admin/categories');  
      }, 3000);
      return () => clearTimeout(timer);
  }
  }, [router.query]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <AdminLayout>
      <div>
        {notificationMessage && (
          <div className="bg-green-500 text-white p-4 rounded-md mb-4">
            {notificationMessage}
          </div>
        )}
        <div className='lg:flex lg:items-center lg:justify-between'>
          <h1 className="text-2xl mb-4">Manage Categories</h1>
          <div className="mb-4">
            <Link href="/admin/categories/add-category">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add New Category
              </button>
            </Link>
          </div>
        </div>
        
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className='min-w-full bg-white'>
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/3 py-2">Category Name</th>
                <th className="w-1/3 py-2">Icon</th>
                <th className="w-1/3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
            {categories.map((category, index) => (
                <tr key={category._id.toString()} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="border px-4 py-2">{category.label}</td>
                  <td className="border px-4 py-2">{category.iconURL}</td>
                  <td className="border px-4 py-2">
                    
                    <Link href={`/admin/categories/edit-category/${category._id}`}>
                      <button className="bg-blue-500 text-white px-4 py-1 rounded">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(category._id)} 
                            className="bg-red-500 text-white px-4 py-1 ml-2 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div>
  </AdminLayout>
  );
}
export default CategoriesAdmin;
import React, { useState, FormEvent } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { useRouter } from 'next/router';

const AddCategory = () => {
  const [label, setLabel] = useState('');
  const [iconURL, setIconURL] = useState('');

  const router = useRouter();
  const [notification, setNotification] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCategory = {
      label,
      iconURL,
    };

    try {
      const response = await fetch('/api/admin/categories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCategory),
      });

      if (response.ok) {
        const result = await response.json();
        //console.log("Category added:", result);
        // Here, you can provide feedback to the user, reset the form, or redirect them
        router.push({
          pathname: '/admin/categories',
          query: { notification: 'CategoryAdded' }
      });
      } else {
        const errorData = await response.json();
        console.error("Error adding category:", errorData.error);
        // Handle the error, possibly by showing the user an error message
      }
    } catch (error) {
      console.error("There was an error sending the request:", error);
      // Handle the error, possibly by showing the user an error message
    }
  };

  return (
    <AdminLayout>
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-5">Add New Category</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="label">
                  Category Name
              </label>
              <input
                  type="text"
                  id="label"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter category name"
              />
          </div>
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iconURL">
                  Icon URL
              </label>
              <input
                  type="text"
                  id="iconURL"
                  value={iconURL}
                  onChange={(e) => setIconURL(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter icon URL or path"
              />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Add Category
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddCategory;

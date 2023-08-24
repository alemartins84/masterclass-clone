// pages/admin/categories/edit-category/[id].tsx
import { useRouter } from 'next/router';
import { useState, useEffect, FormEvent } from 'react';
import { Category } from '../../../../types/category';
import Link from 'next/link';
import AdminLayout from '../../../../components/AdminLayout';
import { PickerInline } from 'filestack-react';

const apiKey = process.env.NEXT_PUBLIC_FILESTACK_API_KEY || '';

const EditCategory = () => {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/categories/${id}`)
        .then(response => response.json())
        .then(data => {
          setCategory(data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching category:", error);
          setLoading(false);
        });
      }
    }, [id]);

    if (loading) {
      return <AdminLayout><p>Loading...</p></AdminLayout>;
    }

    if (!category) {
      return <p>Category not found.</p>;
    }

    const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const response = await fetch(`/api/admin/categories/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(category),
        });

        if (response.ok) {
          const updatedCategory = await response.json();
          setCategory(updatedCategory);
          // Optionally, redirect or show a success message.
          router.push({
            pathname: '/admin/categories',
            query: { notification: 'CategoryUpdated' }
        });
        } else {
          const errorData = await response.json();
          console.error("Error updating category:", errorData.error);
          // Handle the error, possibly by showing the user an error message.
        }
      } catch (error) {
        console.error("There was an error sending the request:", error);
        // Handle the error, possibly by showing the user an error message.
      }
    };

    const handleUploadSuccess = (response: any) => {
      const fileUrl = response.filesUploaded[0].url;
      // Send this URL to your backend and update the database
      setCategory((prevCategory) => {
        if (prevCategory) {
          return { 
            ...prevCategory, 
            iconURL: fileUrl 
          };
        }
        return null;
      });
    };

    const handleUploadError = (error:any) => {
      console.error("Error uploading file:", error);
    };

    return (
      <AdminLayout>
        <div className="container mx-auto mt-10">
          <h1 className="text-2xl font-bold mb-5">Edit Category</h1>

          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="label">Category Label:</label>
              <input 
                type="text" 
                id="label" 
                value={category.label} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setCategory({ ...category, label: e.target.value })} 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iconURL">
                Icon URL:
              </label>
              <input 
                type="text" 
                id="iconURL" 
                value={category.iconURL} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setCategory({ ...category, iconURL: e.target.value })}
              />
              <PickerInline
                apikey={apiKey}
                onUploadDone={handleUploadSuccess} 
                onError={handleUploadError} 
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">Update Category</button>
          </form>

          <Link href="/admin/categories">Back to Categories List</Link>
        </div>
      </AdminLayout>
    );
};

export default EditCategory;

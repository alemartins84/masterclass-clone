// pages/admin/categories/add-course.tsx
import React, { useState, FormEvent } from 'react';
import AdminLayout from '../../../components/AdminLayout';
import { useRouter } from 'next/router';

const AddCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [instructorName, setInstructorName] = useState('');

  const router = useRouter();
  const [notification, setNotification] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCourse = {
      title,
      description,
      imageUrl,
      instructorName,
    };

    try {
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });

      if (response.ok) {
        const result = await response.json();
        //console.log("Category added:", result);
        // Here, you can provide feedback to the user, reset the form, or redirect them
        router.push({
          pathname: '/admin/courses',
          query: { notification: 'CourseAdded' }
      });
      } else {
        const errorData = await response.json();
        console.error("Error adding course:", errorData.error);
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Course title
            </label>
            <input
                type="text"
                id="label"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter course title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Description">
              Course description
            </label>
            <textarea 
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
            </textarea>            
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructorName">
              Instructor Name
            </label>
            <input
                type="text"
                id="instructorName"
                value={instructorName}
                onChange={(e) => setInstructorName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Instructor Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
              Image URL
            </label>
            <input
                type="text"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter image URL or path"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add Course
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddCourse;

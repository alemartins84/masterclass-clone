// pages/admin/categories/edit-course/[id].tsx
import { useRouter } from 'next/router';
import { useState, useEffect, FormEvent } from 'react';
import { Course } from '../../../../types/course';
import Link from 'next/link';
import AdminLayout from '../../../../components/AdminLayout';

const EditCourse = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/courses/${id}`)
        .then(response => response.json())
        .then(data => {
          setCourse(data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching course:", error);
          setLoading(false);
        });
      }
    }, [id]);

    if (loading) {
      return <AdminLayout><p>Loading...</p></AdminLayout>;
    }

    if (!course) {
      return <p>course not found.</p>;
    }

    const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const response = await fetch(`/api/courses/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(course),
        });

        if (response.ok) {
          const updatedCourse = await response.json();
          setCourse(updatedCourse);
          // Optionally, redirect or show a success message.
          router.push({
            pathname: '/admin/courses',
            query: { notification: 'courseUpdated' }
        });
        } else {
          const errorData = await response.json();
          console.error("Error updating course:", errorData.error);
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
      setCourse((prevcourse) => {
        if (prevcourse) {
          return { 
            ...prevcourse, 
            imageUrl: fileUrl 
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
          <h1 className="text-2xl font-bold mb-5">Edit course</h1>

          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="label">Course Title:</label>
              <input 
                type="text" 
                id="title" 
                value={course.title} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setCourse({ ...course, title: e.target.value })} 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Description">
                Course description
              </label>
              <textarea 
                id="description"
                value={course.description}
                onChange={(e) => setCourse({ ...course, description: e.target.value })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
              </textarea>            
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructorName">Instructor Name:</label>
              <input 
                type="text" 
                id="instructorName" 
                value={course.instructorName} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setCourse({ ...course, instructorName: e.target.value })} 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                Image URL:
              </label>
              <input 
                type="text" 
                id="imageUrl" 
                value={course.imageUrl} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setCourse({ ...course, imageUrl: e.target.value })}
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">Update course</button>
          </form>

          <Link href="/admin/courses">Back to Courses</Link>
        </div>
      </AdminLayout>
    );
};

export default EditCourse;

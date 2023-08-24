// pages/admin/courses.index.tsx
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminLayout from '../../../components/AdminLayout';
import { Course } from '../../../types/course';

const CoursesAdmin = () => {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [notificationMessage, setNotificationMessage] = useState<string | null>(null);

  type NotificationMessages = {
    [key: string]: string;
  };

  const notifications: NotificationMessages = {
    'CourseAdded': 'Course added successfully!',
    'CourseUpdated': 'Course updated successfully!',
    // Add more notifications here if needed
  };

  useEffect(() => {
    const message = notifications[router.query.notification as keyof typeof notifications];
    if (message) {
      setNotificationMessage(message);

      // Hide the notification after a few seconds
      const timer = setTimeout(() => {
        setNotificationMessage(null);
        // Optionally, remove the query parameter
        router.replace('/admin/courses');  
      }, 3000);
      return () => clearTimeout(timer);
  }
  }, [router.query]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (confirmDelete) {
      try {
        const response = await fetch(`/api/courses/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Refresh the categories list or remove the deleted category from state
          setCourses(prevCategories => prevCategories.filter(course => course._id !== id));
        } else {
          console.error("Error deleting course.");
        }
      } catch (error) {
        console.error("There was an error sending the delete request:", error);
      }
    }
  };

  return (
    <AdminLayout>
      <div>
        {notificationMessage && (
          <div className="bg-green-500 text-white p-4 rounded-md mb-4">
            {notificationMessage}
          </div>
        )}
        <div className='lg:flex lg:items-center lg:justify-between'>
          <h1 className="text-2xl mb-4">Manage Courses</h1>
          <div className="mb-4">
            <Link href="/admin/courses/add-course">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add New Course
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
                <th className="w-1/3 py-2">Course Name</th>
                <th className="w-1/3 py-2">Category</th>
                <th className="w-1/3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
            {courses.map((course, index) => (
                <tr key={course._id.toString()} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="border px-4 py-2">{course.title}</td>
                  <td className="border px-4 py-2">{course.category}</td>
                  <td className="border px-4 py-2">
                    
                    <Link href={`/admin/courses/edit-course/${course._id}`}>
                      <button className="bg-blue-500 text-white px-4 py-1 rounded">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(course._id)} 
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
  )
}

export default CoursesAdmin;
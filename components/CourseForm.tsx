// components/CourseForm.tsx

import { useState } from 'react';

interface CourseFormProps {
  onSubmit: (data: any) => void;
}

const CourseForm: React.FC<CourseFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label className="font-bold">Title:</label>
        <input 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          required 
          className="p-2 border rounded"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="font-bold">Description:</label>
        <textarea 
          value={description} 
          onChange={e => setDescription(e.target.value)} 
          required 
          className="p-2 border rounded"
        />
      </div>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Course
      </button>
    </form>
  );
};

export default CourseForm;

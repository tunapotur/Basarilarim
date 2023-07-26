'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddSuccess = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO date varsayılan olarak günün tarihi gelecek. Eğer kullanıcı isterse değiştirebilecek.
    if (!title || !description || !date) {
      alert("Title, description and date can't be empty");
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/success', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, date }),
      });

      if (res.ok) {
        router.push('/');
      } else {
        throw new Error('Failed to create a success');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Description"
      />

      <input
        onChange={(e) => setDate(e.target.value)}
        value={date}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Date"
      />

      <button
        type="submit"
        className="w-fit bg-green-600 px-6 py-3 font-bold text-white"
      >
        Add Success
      </button>
    </form>
  );
};

export default AddSuccess;

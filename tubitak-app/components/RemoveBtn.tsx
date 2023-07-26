'use client';

import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

const RemoveBtn = ({ id }: { id: number }) => {
  const router = useRouter();
  const removeSuccess = async () => {
    const confirmed = confirm('Are you sure you want to delete this success?');

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/success?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) router.refresh();
    }
  };

  return (
    <button onClick={removeSuccess} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;

import React from 'react';
import SuccessCard from '@/components/SuccessCard';
import { ISuccessList } from '@/models/success';

const getSuccessList = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/success', {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch success');

    return res.json();
  } catch (error) {
    console.log('Error loading success list', error);
  }
};

export default async function Home() {
  const successList: ISuccessList = await getSuccessList();

  return (
    <>
      {successList.map((success) => (
        <SuccessCard
          key={success._id}
          _id={success._id}
          title={success.title}
          description={success.description}
          date={success.date}
        />
      ))}
    </>
  );
}

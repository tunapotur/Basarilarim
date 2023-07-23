import React from 'react';
import SuccessCard from '@/components/SuccessCard';
import { success_list } from '@/mocks/success_list';

export default function Home() {
  return (
    <>
      {success_list.map((success) => (
        <SuccessCard key={success.id} {...success} />
      ))}
    </>
  );
}

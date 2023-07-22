import React from 'react';
import SuccessCard from '@/components/success-card';
import ISuccessList from '@/interfaces/success-list';

const SuccessCardList = ({ success_list }: { success_list: ISuccessList }) => {
  return (
    <ul className="flex flex-col space-y-6">
      {success_list.map((success) => (
        <SuccessCard key={success.id} {...success} />
      ))}
    </ul>
  );
};

export default SuccessCardList;

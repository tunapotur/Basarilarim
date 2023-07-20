import React from 'react';
import SuccessCardList from '@/components/success-list';
import ISuccessList from '@/interfaces/success-list';

const HomeContainer = ({ success_list }: { success_list: ISuccessList }) => {
  return (
    <main className="mx-auto w-full sm:w-[640px]">
      <SuccessCardList success_list={success_list} />
    </main>
  );
};

export default HomeContainer;

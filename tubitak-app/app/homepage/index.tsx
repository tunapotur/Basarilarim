import React from 'react';
import HomeContainer from '@/containers/home';
import { success_list } from '@/mocks/success_list';

export default function HomePage() {
  return <HomeContainer success_list={success_list} />;
}

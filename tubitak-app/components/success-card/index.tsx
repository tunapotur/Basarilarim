import React from 'react';
import ISuccess from '@/interfaces/success';

const SuccessCard = (probs: ISuccess) => {
  return (
    <li className="rounded-md bg-slate-200 p-3 shadow-md" key={probs.id}>
      <div className="mb-2 flex items-center justify-between">
        <h5 className="text-lg font-medium uppercase">{probs.title}</h5>
        <div className="text-sm font-light">{probs.date}</div>
      </div>
      <p className="px-1">{probs.description}</p>
    </li>
  );
};

export default SuccessCard;

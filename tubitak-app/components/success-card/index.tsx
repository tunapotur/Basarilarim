import React from 'react';
import ISuccess from '@/interfaces/success';

const SuccessCard = (probs: ISuccess) => {
  return (
    <li key={probs.id}>
      <h5>{probs.title}</h5>
      <p>{probs.description}</p>
      <div>{probs.date}</div>
    </li>
  );
};

export default SuccessCard;

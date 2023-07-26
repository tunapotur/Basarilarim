import React from 'react';
import Link from 'next/link';
import ISuccess from '@/interfaces/success';
import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';

// TODO alttaki linke bak
// https://tomanagle.medium.com/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722

const SuccessCard = (probs: ISuccess) => {
  const date = probs.date.split('-');

  return (
    <div
      key={probs._id}
      className="my-3 flex items-start justify-between gap-5 border border-slate-300 p-4"
    >
      <div>
        <h2 className="text-2xl font-bold uppercase">{probs.title}</h2>
        <p>{probs.description}</p>
      </div>

      <div>
        <div className="flex gap-2">
          <RemoveBtn id={probs._id} />
          <Link href={`/editSuccess/${probs._id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>

        <div className="mt-3 flex flex-col items-center justify-center text-xs">
          <div>
            {date[2]}/{date[1]}
          </div>
          <div>{date[0]}</div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;

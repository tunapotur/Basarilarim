import React from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const SuccessCard = (probs) => {
  const date = probs.date.split("-");
  return (
    <div className="my-3 flex items-start justify-between gap-5 border border-slate-300 p-4">
      <div>
        <h2 className="text-2xl font-bold uppercase">
          <Link href={`/success/${probs._id}`}>{probs.title} </Link>
        </h2>
        <p>{probs.description.slice(0, 200)}...</p>
      </div>

      <div>
        <div className="flex gap-2">
          <RemoveBtn _id={probs._id} />
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

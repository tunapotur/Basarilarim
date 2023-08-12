import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import RemoveBtn from "@/components/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getSuccessById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/success/${id}`, {
    next: {
      revalidate: 30,
    },
  });

  if (!res.ok) notFound();

  return res.json();
};

export default async function Success({ params }) {
  const { id } = params;
  const { success } = await getSuccessById(id);
  const { title, description, date } = success;
  const dateArray = date.split("-");

  return (
    <div className="my-3 flex items-start justify-between gap-5 p-4">
      <div>
        <h2 className="mb-5 text-2xl font-bold uppercase">{title}</h2>
        <p className="text-xl leading-relaxed">{description}</p>
      </div>

      <div>
        <div className="flex gap-2">
          <RemoveBtn _id={id} />
          <Link href={`/editSuccess/${id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>

        <div className="mt-3 flex flex-col items-center justify-center text-base">
          <div>
            {dateArray[2]}/{dateArray[1]}
          </div>
          <div>{dateArray[0]}</div>
        </div>
      </div>
    </div>
  );
}

import EditSuccessForm from "@/components/EditSuccessForm";
import React, { Suspense } from "react";

import Loading from "../../loading";

const getSuccessById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/success/${id}`, {
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) throw new Error("Failed to fetch success");

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditSuccess = async ({ params }) => {
  const { id } = params;
  const { success } = await getSuccessById(id);
  const { title, description, date } = success;

  return (
    <Suspense fallback={<Loading />}>
      <EditSuccessForm
        _id={id}
        title={title}
        description={description}
        date={date}
      />
    </Suspense>
  );
};

export default EditSuccess;

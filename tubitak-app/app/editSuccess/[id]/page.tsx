import EditSuccessForm from '@/components/EditSuccessForm';
import React from 'react';
import { ParamId, idType } from '@/models/success';

const getSuccessById = async (id: idType) => {
  try {
    const res = await fetch(`http://localhost:3000/api/success/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch success');

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditSuccess = async ({ params }: { params: ParamId }) => {
  const { id } = params;
  const { success } = await getSuccessById(String(id));
  const { title, description, date } = success;

  return (
    <EditSuccessForm
      _id={String(id)}
      title={title}
      description={description}
      date={date}
    />
  );
};

export default EditSuccess;

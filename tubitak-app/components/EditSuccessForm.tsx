import React from 'react';

const EditSuccessForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Success Title"
      />

      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Success Description"
      />

      <button className="w-fit bg-green-600 px-6 py-3 font-bold text-white">
        Update Success
      </button>
    </form>
  );
};

export default EditSuccessForm;

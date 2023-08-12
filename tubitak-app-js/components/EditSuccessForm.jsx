"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EditSuccessForm = (probs) => {
  const [newTitle, setNewTitle] = useState(probs.title);
  const [newDescription, setNewDescription] = useState(probs.description);
  const [newDate, setNewDate] = useState(probs.date);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(
        `http://localhost:3000/api/success/${probs._id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newTitle,
            newDescription,
            newDate,
          }),
        },
      );

      if (!res.ok) {
        throw new Error("Failed to update success");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Description"
      />

      <input
        onChange={(e) => setNewDate(e.target.value)}
        value={newDate}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Date"
      />

      <button className="w-fit bg-green-600 px-6 py-3 font-bold text-white">
        {isLoading && <span>Updating...</span>}
        {!isLoading && <span>Update Success</span>}
      </button>
    </form>
  );
};

export default EditSuccessForm;

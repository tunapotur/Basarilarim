import React, { Suspense } from "react";

import SuccessCard from "@/components/SuccessCard";
import Loading from "./loading";

const getSuccessList = async () => {
  try {
    // const res = await fetch("http://localhost:3000/api/success", {
    //   cache: "no-store",
    // });
    const res = await fetch("http://localhost:3000/api/success", {
      next: {
        // aysı sayfa içinde 30 saniyede bir çekilecek veriyi güncelleyecek
        // 30 saniye içinde veri değişse bile cache'den eski veri gelecek
        // revalidate: 30,
        revalidate: 0,
      },
    });

    if (!res.ok) throw new Error("Failed to fetch success");

    return res.json();
  } catch (error) {
    console.log("Error loading success list", error);
  }
};

export default async function Home() {
  const successList = await getSuccessList();

  return (
    <>
      <Suspense fallback={<Loading />}>
        {successList.map((success) => (
          <SuccessCard
            key={success._id}
            _id={success._id}
            title={success.title}
            description={success.description}
            date={success.date}
          />
        ))}

        {successList.length === 0 && (
          <p className="text-center">There are no open tickets!</p>
        )}
      </Suspense>
    </>
  );
}

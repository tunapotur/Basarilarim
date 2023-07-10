import React from "react";
import SuccessCard from "@/components/success-card";
import { ISuccessCardList } from "@/interfaces/isuccess";

const SuccessCardList = ({ successes }: ISuccessCardList) => {
  return (
    <ul>
      {successes.map((success) => (
        <li key={success.id}>
          <SuccessCard {...success} />
        </li>
      ))}
    </ul>
  );
};

export default SuccessCardList;

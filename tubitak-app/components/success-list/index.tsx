import React from "react";
import SuccessCard from "@/components/success-card";
import { ISuccessCardList } from "@/interfaces/isuccess";
import ISuccess from "@/interfaces/isuccess";

const SuccessCardList = ({ successes }: ISuccessCardList) => {
  return (
    <ul>
      {successes.map((success: ISuccess) => (
        <li key={success.id}>
          <SuccessCard {...success} />
        </li>
      ))}
    </ul>
  );
};

export default SuccessCardList;

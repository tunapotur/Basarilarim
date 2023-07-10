import React from "react";
import SuccessCardList from "@/components/success-list";
import { ISuccessCardList } from "@/interfaces/isuccess";

const HomeContainer = ({ successes }: ISuccessCardList) => {
  return (
    <>
      <SuccessCardList successes={successes} />
    </>
  );
};

export default HomeContainer;

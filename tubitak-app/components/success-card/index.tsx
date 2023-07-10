import React from "react";
import ISuccess from "@/interfaces/isuccess";

const SuccessCard = (probs: ISuccess) => {
  return (
    <div>
      <h5>{probs.title}</h5>
      <p>{probs.description}</p>
      <div>{probs.date}</div>
    </div>
  );
};

export default SuccessCard;

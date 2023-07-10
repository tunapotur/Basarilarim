import React from "react";
import ISuccess from "@/interfaces/isuccess";

const SuccessCard = (success: ISuccess) => {
  return (
    <div>
      <h5>{success.title}</h5>
      <p>{success.description}</p>
      <div>{success.date}</div>
    </div>
  );
};

export default SuccessCard;

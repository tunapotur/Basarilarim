import React from "react";
import ISuccess from "@/interfaces/isuccess";

const SuccessCard = ({ title, description, date }: ISuccess) => {
  return (
    <div>
      <h5>{title}</h5>
      <p>{description}</p>
      <div>{date}</div>
    </div>
  );
};

export default SuccessCard;

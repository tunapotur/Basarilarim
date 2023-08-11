import mongoose, { Schema } from "mongoose";

export const SuccessSchema = new Schema()(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true },
);

const Success =
  mongoose.models.Success || mongoose.model("Success", SuccessSchema);

export default Success;

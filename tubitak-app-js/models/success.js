import mongoose, { Schema } from "mongoose";

export const successSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true },
);

const Success =
  mongoose.models.Success || mongoose.model("Success", successSchema);

export default Success;

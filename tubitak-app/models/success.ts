import mongoose, { Schema } from 'mongoose';

export interface ISuccess {
  title: string;
  description: string;
  date: string;
}

const successSchema = new Schema(
  {
    title: String,
    description: String,
    date: String,
  },
  { timestamps: true }
);

const Success =
  mongoose.models.Success || mongoose.model('Success', successSchema);

export default Success;

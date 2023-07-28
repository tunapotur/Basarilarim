import mongoose, { Schema, Types, model } from 'mongoose';

export type idType = string | number | undefined;

export interface ISuccess {
  _id?: idType;
  title: string;
  description: string;
  date: string;
}

export interface ISuccessList extends Array<ISuccess> {}

export type ParamId = {
  id: Types.ObjectId;
};

export const SuccessSchema = new Schema<ISuccess>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

const Success =
  mongoose.models.Success || model<ISuccess>('Success', SuccessSchema);

export default Success;

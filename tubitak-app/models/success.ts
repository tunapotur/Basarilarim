// TODO altta bulunan linkteki makale uygulanacak
// https://mongoosejs.com/docs/typescript.html

import mongoose, { Schema } from 'mongoose';

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

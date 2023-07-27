import { Schema, model } from 'mongoose';

interface ISuccess {
  title: string;
  description: string;
  date: string;
}

const SuccessSchema = new Schema<ISuccess>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
});

const SuccessModel = model<ISuccess>('SuccessModel', SuccessSchema);

export default SuccessModel;

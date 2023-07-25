import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    // https://stackoverflow.com/questions/48917591/fail-to-connect-mongoose-to-atlas/48917626#48917626
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'SuccessTubitakDB',
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;

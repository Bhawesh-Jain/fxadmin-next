import mongoose from 'mongoose';

const connectMongoDb = async () => {
  try {
    console.log(process.env.ATLAS_URI);
    await mongoose.connect(process.env.ATLAS_URI)
      .catch(error => console.log(error));
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }
}

export default connectMongoDb
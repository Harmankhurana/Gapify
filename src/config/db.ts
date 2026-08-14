import mongoose from 'mongoose';

// exporting mongoDB connection in index.ts
export async function connectDB(): Promise<void> {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error('MONGO_URI is not defined in environment variables');
  }

  await mongoose.connect(uri);
  console.log('MongoDB connected');
}

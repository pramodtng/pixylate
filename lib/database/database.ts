/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, {Mongoose} from "mongoose";

const MONGO_DB_URL = process.env.NEXT_PUBLIC_DB_URL

interface MongooseConnection {
 conn: Mongoose | null;
 promise: Promise<Mongoose> | null;

}


let cached: MongooseConnection = (global as any).mongoose 


if(!cached) {
  cached = (global as any).mongoose = {
    conn: null, promise: null
  }
}


export const connectToDatabase = async() => {
  if(cached.conn) return cached.conn

  if(!MONGO_DB_URL) throw new Error('Missing Mongo DB URL')


  cached.promise = cached.promise || mongoose.connect(
    MONGO_DB_URL, {
      dbName:'pixylate', bufferCommands: false
    }
  )

  cached.conn = await cached.promise

  return cached.conn
}
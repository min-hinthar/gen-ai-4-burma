import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

// Caching MongoDB Connection

let cached: MongooseConnection = (global as any).mongoose;

if(!cached) {
    cached = (global as any).mongoose = {
        conn: null, promise: null
    }
}

// Optimization for Cached Conn
export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL) throw new Error('Missing MONGODB_URL!')

    cached.promise = cached.promise || mongoose.connect(
        MONGODB_URL, 
    {
        dbName: 'gen-ai-4-burma',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn;
}


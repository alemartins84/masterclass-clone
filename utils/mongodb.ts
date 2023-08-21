// mongodb.ts

import { MongoClient, Db, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let cachedDb: Db | null = null;

async function connectToDb(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  await client.connect();
  const db = client.db('masterclass-clone');
  cachedDb = db;
  return db;
}

async function testMongo(): Promise<string> {
  try {
    await connectToDb();
    return 'Successfully connected to MongoDB';
  } catch (error) {
    return `Error connecting to MongoDB: ${(error as Error).message}`;
  }
}

export { connectToDb, testMongo };

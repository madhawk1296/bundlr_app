import { MongoClient } from 'mongodb'

// Cached connection
let cachedClient = null;

export default async function clientPromise() {
  if (cachedClient) {
    return cachedClient;
  }

  const uri = `mongodb+srv://${process.env.MONGODB_USER}:${encodeURIComponent(process.env.MONGODB_PASS)}@cluster0.oznlgay.mongodb.net/?retryWrites=true&w=majority`
  const options = {}
  
  const client = new MongoClient(uri, options);
  const clientConnection = await client.connect();

  cachedClient = clientConnection;

  return clientConnection;
}
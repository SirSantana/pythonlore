import { MongoClient } from 'mongodb';

const MONGODB_URI = `mongodb+srv://santaNaN:C1Dgz8ycXDQVpHiB@cluster0.exgvi.mongodb.net/?retryWrites=true&w=majority`;
const MONGODB_DB = 'python';

// check the MongoDB URI
if (!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
}

// check the MongoDB DB
if (!MONGODB_DB) {
    throw new Error('Define the MONGODB_DB environmental variable');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // set the connection options
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    // Connect to cluster
    let client = new MongoClient(`mongodb+srv://santaNaN:${process.env.NEXT_PUBLIC_PASSWORD}@cluster0.exgvi.mongodb.net/?retryWrites=true&w=majority`
        , opts);
    await client.connect();
    let db = client.db(MONGODB_DB);

    // set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}
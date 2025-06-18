import { MongoClient, ServerApiVersion } from "mongodb"

// mongodb collection name
export const collectionNames = {
      PRACTICE_DATA: "practice-data"
};

export const dbConnect = (collectionName) => {
      const uri = process.env.MONGO_URI;
      // Create a MongoClient with a MongoClientOptions object to set the Stable API version
      const client = new MongoClient(uri, {
            serverApi: {
                  version: ServerApiVersion.v1,
                  strict: true,
                  deprecationErrors: true,
            }
      });
      return client.db(process.env.DB_NAME).collection(collectionName)
};
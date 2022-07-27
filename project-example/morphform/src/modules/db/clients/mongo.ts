import { MongoClient } from "mongodb"
import { getMongoUri } from "~/config/env"

const client = new MongoClient(getMongoUri())

export const Mongo = {
  async db() {
    if (!client.isConnected()) {
      await client.connect()
    }

    return client.db()
  },

  async collection(coll: string) {
    const db = await Mongo.db()
    return db.collection(coll)
  }
}

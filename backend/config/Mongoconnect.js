import mongoose from "mongoose";


export function mongoconnect() {
  try {
    const MONGOURI = `${process.env.MONGO_URL}/ecommerce-2`;
    const connect = mongoose.connect(MONGOURI);
    if (!connect) {
      console.log("Mongo not connected");
    } else {
      console.log("Mongo connected");
    }
  } catch (err) {
    console.log(err)
  }
}

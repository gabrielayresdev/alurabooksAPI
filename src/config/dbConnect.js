import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://N4PSTER013:123@cluster0.g0e2wey.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;

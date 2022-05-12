import mongoose from "mongoose";

mongoose.connect("mongodb+srv://devstef:A7aeIU7t4pTBytiI@cluster0.pt7ca.mongodb.net/lista-contatos");

let db = mongoose.connection;

export default db;
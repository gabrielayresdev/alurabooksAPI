import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  numeroDePaginas: { type: Number },
});

let livros = mongoose.model("livros", livroSchema);

export default livros;

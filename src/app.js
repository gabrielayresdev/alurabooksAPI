import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão feita com sucesso");
});

const app = express();

app.use(express.json());

routes(app);

/* 
const livros = [
  { id: 1, titulo: "Senhor dos Aneis" },
  { id: 2, titulo: "O Hobbit" },
];

app.get("/livros", (req, res) => {});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro foi cadastrado com sucesso");
});

const buscaLivro = (id) => {
  return livros.findIndex((livro) => +livro.id === +id);
};

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json();
});

app.delete("/livros/:id", (req, res) => {
  const { id } = req.params;
  const index = buscaLivro(id);
  livros.splice(index, 1);
  res.json(`livro ${id} removido com sucesso!`);
});
 */
export default app;

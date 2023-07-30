import livros from "../models/Livro.js";

class LivroController {
  // Crud

  // Read
  static listarLivros = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros);
    });
  };

  static litarLivroPorId = (req, res) => {
    const { id } = req.params;

    livros.findById(id, (err, livros) => {
      if (err) res.status(400).send({ message: err.message });
      else res.status(200).send(livros);
    });
  };

  // Create
  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);

    livro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar o livro.` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };

  // Update
  static atualizarLivro = (req, res) => {
    let { id } = req.params;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err)
        res.status(200).send({ message: "Livro atualizado com sucesso!" });
      else res.status(500).send({ message: err.message });
    });
  };

  // Delete
  static apagarLivro = (req, res) => {
    const { id } = req.params;

    livros.findByIdAndDelete(id, (err, livros) => {
      if (!err)
        res.status(200).send({ message: "livro excluido com sucesso!" });
      else res.status(500).send({ message: err.message });
    });
  };
}

export default LivroController;


const {getLivroPorId,getTodosLivros, insereLivro, ModificaLivro} = require("../models/livro")

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getLivro(req, res) {
    try {
    const id = req.params.id
      const livro = getLivroPorId(id);
      res.send(livro);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

function postLivro(req,res) {
    try {
        const livroNovo =(req.body);
        insereLivro(livroNovo)
        res.status(201)
        res.send("livroInserido")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req,res)
{
  try {
    const id = req.params.id;
    const modicacoes = req.body;

    ModificaLivro(modicacoes,id);

    res.send("Livro alterado com sucesso!");
    
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

module.exports = {
  getLivros, getLivro, postLivro, patchLivro
};

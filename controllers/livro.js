
const {getLivroPorId,getTodosLivros, insereLivro, ModificaLivro, DeletaLivro} = require("../models/livro")

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
    if(id && Number(id)){
      const livro = getLivroPorId(id);
      res.send(livro);
    }else{
      res.status(422)
      res.send("ID inválido!")
    }
      
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

function postLivro(req,res) {
    try {
        const livroNovo =(req.body);
        if(req.body.nome){
        insereLivro(livroNovo)
        res.status(201)
        res.send("livroInserido")
        }else{
          res.status(422);
          res.send("Insira a campo nome!");
        }
        
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

    if(id&&Number(id)){
    ModificaLivro(modicacoes,id);

    res.send("Livro alterado com sucesso!");
    
    }else{
      res.status(422)
      res.send("ID inválido!")
    }

    
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function deleteLivro(req,res)
{
  try {
    const id = req.params.id;
    if(id && Number(id)){
      DeletaLivro(id);

     res.send("Livro deletado com sucesso!");
    } else{
      res.status(422)
      res.send("ID inválido!")
    }

    
    
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

module.exports = {
  getLivros, getLivro, postLivro, patchLivro, deleteLivro
};

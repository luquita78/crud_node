const fs = require("fs");
function getTodosLivros(){

    return JSON.parse (fs.readFileSync("livros.json"));
    
}

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"));

    const livroFiltrado = livros.filter(livro => livro.id === id)[0]

    return livroFiltrado;
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("./livros.json"));

    const novaListaDeLivros = [ ...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function ModificaLivro (modicacoes, id)
{
    let livrosAtuais = JSON.parse(fs.readFileSync("./livros.json"));
    const indexModificado = livrosAtuais.findIndex(livro=> livro.id === id);
    const conteudoModificado = {...livrosAtuais[indexModificado], ...modicacoes}
    livrosAtuais[indexModificado] = conteudoModificado;
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))

}

function DeletaLivro ( id)
{
    const livros = JSON.parse(fs.readFileSync("./livros.json"));
    const livroFiltrado = livros.filter(livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(livroFiltrado))

}

module.exports = {
    getTodosLivros, getLivroPorId,insereLivro, ModificaLivro, DeletaLivro
}


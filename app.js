const express = require("express");
const rotalivro = require("./rotas/livro");



const app = express();
app.use(express.json())

//app.use(express.json());

app.use("/livros",rotalivro);



const port = 8080; 



app.listen(port, ()=> console.log(`Servidor rodando em http://localhost:${port}`));
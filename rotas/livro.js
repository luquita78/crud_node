const {Router} = require("express");
const {getLivros, patchLivro} = require("../controllers/livro")
const {getLivro,postLivro} = require("../controllers/livro")

const router = Router();

router.get("/",getLivros);

router.get("/:id",getLivro);

router.post("/", postLivro);

router.patch("/:id",patchLivro)

router.delete("/", (req,res)=>{res.send("Requisição tipo DELETE")})



module.exports= router;
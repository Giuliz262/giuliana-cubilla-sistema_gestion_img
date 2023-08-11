const { render } = require("ejs");
const {Router} = require("express");
const router = Router();

const{renderListaArchivos
}=require("../controllers/archivos.controllers")

router.get("/", renderListaArchivos);

module.exports = router;
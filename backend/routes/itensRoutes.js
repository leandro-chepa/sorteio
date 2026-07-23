const express = require("express");
const router = express.Router();

const itensController = require("../controllers/itensController");

router.get("/", itensController.listarItens);

router.get("/:id", itensController.buscarPorId);

router.post("/", itensController.inserirItem);

router.put("/:id", itensController.atualizarItem);

router.delete("/:id", itensController.excluirItem);

module.exports = router;
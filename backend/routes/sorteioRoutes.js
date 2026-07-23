const express = require("express");
const router = express.Router();

const sorteioController = require("../controllers/sorteioController");

// Sortear um item por categoria
router.get("/:categoria", sorteioController.sortear);

module.exports = router;
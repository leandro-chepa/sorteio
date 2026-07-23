require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
const itensRoutes = require("./routes/itensRoutes");
const sorteioRoutes = require("./routes/sorteioRoutes");

app.use("/api/itens", itensRoutes);
app.use("/api/sorteio", sorteioRoutes);

// Rota inicial
app.get("/", (req, res) => {
    res.json({
        mensagem: "API Sorteador funcionando!"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
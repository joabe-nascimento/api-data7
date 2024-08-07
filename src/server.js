require("dotenv").config(); // Adiciona a configuração das variáveis de ambiente
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const feedbackRoutes = require("./routes/feedbackRoutes");
const db = require("./db/database"); // Importa o módulo de conexão com o MongoDB

const app = express();
const PORT = process.env.PORT || 3001;

// Configura o CORS para permitir todas as origens
app.use(cors());
app.use(bodyParser.json()); // Configura o bodyParser para tratar JSON

app.use("/api/feedback", feedbackRoutes); // Configura a rota para feedbacks

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

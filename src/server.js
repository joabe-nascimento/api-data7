const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const feedbackRoutes = require("./routes/feedbackRoutes");
const db = require("./db/database"); // Configuração do banco de dados

const app = express();
const PORT = process.env.PORT || 3001;

// Configuração CORS
const corsOptions = {
  origin: ["http://localhost:3000", "https://data7-coral.vercel.app"], // Adicione aqui suas origens permitidas
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Roteamento
app.use("/api/feedback", feedbackRoutes);

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error("Erro no servidor:", err);
  res.status(500).send("Erro interno do servidor");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

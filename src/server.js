const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const feedbackRoutes = require("./routes/feedbackRoutes");
const db = require("./db/database"); // Importa a configuração do banco de dados

db();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/feedback", feedbackRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

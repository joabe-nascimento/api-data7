require("dotenv").config(); // Adicione isto no início do seu arquivo

const mongoose = require("mongoose");

const uri = process.env.MONGO_URI; // Use a variável de ambiente

// Conecte-se ao MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Obtenha a conexão
const db = mongoose.connection;

// Manipule eventos de erro e sucesso
db.on("error", (error) => {
  console.error("Erro na conexão com o MongoDB:", error);
});
db.once("open", () => {
  console.log("Conectado ao MongoDB com sucesso!");
});

module.exports = db;

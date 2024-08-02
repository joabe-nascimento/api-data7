require("dotenv").config(); // Adicione isto no início do seu arquivo

const mongoose = require("mongoose");

const uri = process.env.MONGO_URI; // Use a variável de ambiente

mongoose.connect(uri); // Remova as opções deprecated

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erro na conexão com o MongoDB:"));
db.once("open", () => {
  console.log("Conectado ao MongoDB com sucesso!");
});

module.exports = db;

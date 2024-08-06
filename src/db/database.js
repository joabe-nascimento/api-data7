require("dotenv").config(); 

const mongoose = require("mongoose");

const uri = process.env.MONGO_URI; 

mongoose.connect(uri);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erro na conexão com o MongoDB:"));
db.once("open", () => {
  console.log("Conectado ao MongoDB com sucesso!");
});

module.exports = db;

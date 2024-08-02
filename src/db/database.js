const mongoose = require("mongoose");

const uri =
  "mongodb+srv://data7:QJmQbYVzyx5Len3d@data7.abhtonp.mongodb.net/?retryWrites=true&w=majority&appName=data7"; // Substitua pelo seu URI de conexão

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erro na conexão com o MongoDB:"));
db.once("open", () => {
  console.log("Conectado ao MongoDB com sucesso!");
});

module.exports = db;

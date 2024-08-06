const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const feedbackRoutes = require("./routes/feedbackRoutes");
const db = require("./db/database"); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/feedback", feedbackRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

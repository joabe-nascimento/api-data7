const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

// Configure CORS
app.use(
  cors({
    origin: "https://data7-coral.vercel.app", // Replace with your actual frontend URL
  })
);

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/feedback", feedbackRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

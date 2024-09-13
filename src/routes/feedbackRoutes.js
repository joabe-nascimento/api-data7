const express = require("express");
const router = express.Router();
const Feedback = require("../models/feedback"); // Corrija o caminho se necessário

// Endpoint para receber feedback
router.post("/", async (req, res) => {
  const { feedback } = req.body;

  if (!feedback) {
    return res.status(400).json({ error: "Feedback é obrigatório" });
  }

  try {
    const newFeedback = new Feedback({ feedback });
    const savedFeedback = await newFeedback.save();
    res.status(201).json(savedFeedback);
  } catch (err) {
    res.status(500).json({ error: "Erro ao salvar feedback" });
  }
});

// Endpoint para listar feedbacks
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: "Erro ao recuperar feedbacks" });
  }
});

module.exports = router;

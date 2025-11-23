const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Conexão com o MongoDB Atlas
mongoose.connect(
  "mongodb+srv://nicole984401901_db_user:qi5VPgohmAeH5wDq@cluster-vibracao.wdowass.mongodb.net/vibracao_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log("✅ Conectado ao MongoDB!"))
.catch((err) => console.error("❌ Erro ao conectar:", err));

// Importa o modelo correto
const Dado = require("./models/Dado");

// Rota POST
app.post("/dados", async (req, res) => {
  try {
    const novo = new Dado(req.body);
    await novo.save();
    res.status(201).json({ message: "Dado salvo com sucesso!" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao salvar dado", error: err });
  }
});

// Rota GET
app.get("/dados", async (req, res) => {
  try {
    const dados = await Dado.find().sort({ data: -1 });
    res.json(dados);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar dados", error: err });
  }
});

// Inicia servidor
app.listen(3000, () => console.log("🚀 Servidor rodando na porta 3000"));

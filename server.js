require("dotenv").config();
const express = require("express");
const cors = require("cors");
const heroRoutes = require("./src/routes/heroRoutes");
const editoraRoutes = require("./src/routes/editoraRoutes");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/heros", heroRoutes);
app.use("/api/editoras", editoraRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

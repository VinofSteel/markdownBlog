import express from "express";

const app = express();
app.use(express.json());
app.set("view engine", "ejs")

const port = 3000;

app.get("/", (req, res) => res.render("index"))

app.listen(port, () => console.log(`O app está rodando na porta ${port}`));
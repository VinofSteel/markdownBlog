import express from "express";
import { articlesRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use("/articles", articlesRoutes);
app.set("view engine", "ejs");

const port = 3000;

app.get("/", (req, res) => res.render("index", { text: "hi" }));

app.listen(port, () => console.log(`O app está rodando na porta ${port}`));
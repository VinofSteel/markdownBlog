import express from "express";
import { articlesRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use("/articles", articlesRoutes);
app.set("view engine", "ejs");

const port = 3000;

app.get("/", (req, res) => {
    const articles = [{
        title: "Artigo teste",
        createdAt: Date.now(),
        description: "Descrição teste "
    }]
    res.render("index", { articles: articles })
});

app.listen(port, () => console.log(`O app está rodando na porta ${port}`));
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
        createdAt: new Date,
        description: "Descrição teste "
    },
    {
        title: "Artigo teste",
        createdAt: new Date,
        description: "Descrição teste "
    }];
    res.render("articles/index", { articles: articles });
});

app.listen(port, () => console.log(`O app está rodando na porta ${port}`));
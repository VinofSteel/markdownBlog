import express from "express";
import { articlesRoutes } from "./routes";
const mongoose = require("mongoose");

const port = 3000;
const app = express();
app.use(express.urlencoded({ extended: false}));

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost/blog")

app.set("view engine", "ejs");

app.use("/articles", articlesRoutes);


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
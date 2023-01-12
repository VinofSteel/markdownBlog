import { Router } from "express";
const Article = require("./../models/article");
export const articlesRoutes = Router();

articlesRoutes.get("/new", (req, res) => {
    res.render("articles/new", { article: new Article() });
});

articlesRoutes.get("/:id", (req, res) => {

});

articlesRoutes.post("/", async (req, res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })

    try {
        article = await article.save()
        res.redirect(`/articles/${article.id}`)
    } catch (error) {
        res.render("articles/new", { article: article })
    }
});
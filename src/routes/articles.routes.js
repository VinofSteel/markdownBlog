import { Router } from "express";

export const articlesRoutes = Router();

articlesRoutes.get("/new", (req, res) => {
    res.render("articles/new");
});

articlesRoutes.post("/", (req, res) => {

});
import { Router } from "express";

export const articlesRoutes = Router();

articlesRoutes.get("/", (req, res) => res.send("Funcionou!"))
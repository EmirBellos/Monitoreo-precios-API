import express, { type Request, type Response, type Router } from "express";

const router = express.Router();

export default function productRoutes(): Router {
    router.get("/", (req: Request, res: Response) => {
        res.json("this shit is working rigth now dawg...");
    });

    //TODO: add a POST method to create the first products
    return router;
}

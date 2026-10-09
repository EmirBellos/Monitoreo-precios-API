// TODO: Write the server code here and replace this stuff

/* const nameUser = "Alejandro";
console.log(`Hello, ${nameUser}! Welcome to TypeScript.`); */

import express from "express";
import { config } from "dotenv";
import productRoutes from "./routes/productRoutes.js";


config();
// TODO: consider add the connection DB code in db.ts file
const app = express();

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // this is not fully required but it is used to parse url encoded data from forms

// API routes
app.use("/products", productRoutes());

const PORT = Number(process.env.PORT ?? 3000);
app.listen(PORT, () => {
    console.log("The project is running in port:" + PORT);
});


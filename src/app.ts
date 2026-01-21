import express, { Express } from "express";

// Initialize Express application
const app: Express = express();

// Define a route
app.get("/", (req, res) => {
    res.send("Intinial Set up");
});

export default app;
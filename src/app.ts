import express, { Express } from "express";
import {portfolioPerformances, calculatePortfolioPerformance} from "./portfolio/portfolioPerformance"
// Initialize Express application
let app: Express = express();

// Define a route
app.get("/api/v1/portfolio/portfolioPerformance", (req, res) => {
    let initialInvestment = Number(req.query.initialInvestment);
    let currentValue = Number(req.query.currentValue);

    let result = calculatePortfolioPerformance(
        initialInvestment,
        currentValue
    )

    if (result === undefined){
        res.status(404).send("initialInvestment and currentValue are not found")
    }

    res.json(result);
});

// Health Check
app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

export default app;
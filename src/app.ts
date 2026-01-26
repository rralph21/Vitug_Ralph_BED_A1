import express, { Express } from "express";
import {portfolioPerformances, calculatePortfolioPerformance} from "./portfolio/portfolioPerformance"
// Initialize Express application
let app: Express = express();

// API end point that responds in json format
// Number convertion with each query
app.get("/api/v1/portfolio/portfolioPerformance", (req, res) => {
    let initialInvestment = Number(req.query.initialInvestment);
    let currentValue = Number(req.query.currentValue);

    let result = calculatePortfolioPerformance(
        initialInvestment,
        currentValue
    )
    
    // returns status code if undefined
    if (isNaN(initialInvestment) || isNaN(currentValue)){
        res.status(404).send("initialInvestment and currentValue must be numerical")
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
// test/portfolioPerformance.test.ts

import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("performanceSummary logic", () => {

// 60% gain
  test("Excellent performance when percentageChange >= 30", () => {
    const result = calculatePortfolioPerformance(10000, 16000);

    expect(result.performanceSummary).toBe(
      "Excellent performance! Your investment are doing great."
    );
  });

// 30% gain
  test("Excellent performance when percentageChange > 30", () => {
    const result = calculatePortfolioPerformance(10000, 13000);

    expect(result.performanceSummary).toBe(
      "Excellent performance! Your investment are doing great."
    );
  });

// 29.999% gain
  test("Solid gain when percentageChange > 10", () => {
    const result = calculatePortfolioPerformance(10000, 12999.9); 

    expect(result.performanceSummary).toBe(
      "Solid gain. Keep monitoring you invesment."
    );
  });

// 9.99....7% gain
  test("Modest gain when percentageChange > 0", () => {
    const result = calculatePortfolioPerformance(10000, 10999.99);

    expect(result.performanceSummary).toBe(
      "Modest gain, Your portfolio is growing slowly!"
    );
  });

// No change 
  test("No change when percentageChange === 0", () => {
    const result = calculatePortfolioPerformance(10000, 10000);

    expect(result.performanceSummary).toBe(
      "No change in portfolio value."
    );
  });

// -1% loss
  test("Minor loss when percentageChange < 0", () => {
    const result = calculatePortfolioPerformance(10000, 9999.9);

    expect(result.performanceSummary).toBe(
      "Minor loss, Stay calm and review your options."
    );
  });

// -9% => significant loss
  test("Significant loss when percentageChange -10%", () => {
    const result = calculatePortfolioPerformance(10000, 9000);

    expect(result.performanceSummary).toBe(
      "Significant loss, Review your portfolio strategy."
    );
  });


});


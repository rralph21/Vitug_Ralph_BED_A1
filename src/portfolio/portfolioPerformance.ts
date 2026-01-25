// Given variables
/**
 * @param initialInvestment - amount of investment
 * @param currentValue - amount of current value
 * @param profitOrLoss - indication of profit or loss
 * @param percentageChange - percentage of change/movement
 * @param performanceSummary - summary of overall performance
 */

export interface portfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;

}

// given buggy implementation
/**
 * calculatePortfolioPerformance function with performance summary
 * @param initialInvestment : amount of initial investment
 * @param currentValue : amount of current investment
 * @returns : performance summary depending on percentageChange
 */

export function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number
): portfolioPerformance {

    // correct data type
    const profitOrLoss = Number(initialInvestment / currentValue);

    const percentageChange = Number((profitOrLoss / initialInvestment) * 100);

    // performance summary not including any if statement
    const performanceSummary = percentageChange > 0
            ? "Modest gain, Your portfolio is growing slowly!" :
            percentageChange > 30
            ? "Excellent performance! Your investment are doing great.":
            percentageChange > 10
            ? "Solid gain. Keep monitoring you invesment" :
            percentageChange < 0
            ? "Minor loss, Stay calm and review your options." :
            "No change in portfolio value.";
    

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}
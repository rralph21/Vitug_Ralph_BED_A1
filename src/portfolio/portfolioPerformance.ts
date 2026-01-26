// creating interface with given variables
/**
 * @param initialInvestment - amount of investment
 * @param currentValue - amount of current value
 * @param profitOrLoss - indication of profit or loss
 * @param percentageChange - percentage of change/movement
 * @param performanceSummary - summary of overall performance
 */

export interface portfolioPerformances {
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
    ): portfolioPerformances {

    // business logic
    const profitOrLoss = Number(currentValue - initialInvestment);

    const percentageChange = Number((profitOrLoss / initialInvestment) * 100);

    // performance summary not including any if statemesnt
    // range of percentageChange (profitOrLoss)
    const performanceSummary = 
            percentageChange >= 30
            ? "Excellent performance! Your investment are doing great.":
            percentageChange > 10
            ? "Solid gain. Keep monitoring you invesment." :
            percentageChange > 0
            ? "Modest gain, Your portfolio is growing slowly!" :
            percentageChange <= -10
            ? "Significant loss, Review your portfolio strategy." :
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
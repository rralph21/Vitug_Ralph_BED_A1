// Given variables
/**
 * @param initialInvestment - amount of investment
 * @param currentValue - amount of current value
 * @param profitOrLoss - indication of profit or loss
 * @param precentageChange - percentage of change/movement
 * @param performanceSummary - summary of overall performance
 */

export interface portfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    precentageChange: number;
    performanceSummary: string;

}

// given buggy implementation

export function calculatePortfolioPerformance(): any {
    let initialInvestment = 10000;
    let currentValue = 12000;

    const profitOrLoss = initialInvestment / currentValue;

    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    let performanceSummary;
    if (percentageChange > 20) {
        performanceSummary = `The portfolio has gained significantly with a profit of $${profitOrLoss}.`;
    } else {
        performanceSummary = `The portfolio has performed poorly.`;
    }

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}
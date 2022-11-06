// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let minSoFar = prices[0], maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (minSoFar > prices[i]) {
            minSoFar = prices[i];
        }
        if (maxProfit < (prices[i] - minSoFar)) {
            maxProfit = prices[i] - minSoFar;
        }
    }
     return maxProfit;
 };
 
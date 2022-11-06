// https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    let size = height.length;
    if (size < 2) return 0;

    // Pre Processing
    let left = [], right = [], trapped = 0;
    left[0] = height[0];
    for (let i = 1; i < size; i++) {
        left[i] = Math.max(left[i - 1], height[i]);
    }

    right[size - 1] = height[size - 1];
    for (let i = size - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], height[i]);
    }

    // Actual Calculation
    for (let i = 0; i < height.length; i++) {
        let temp = Math.min(left[i], right[i]) - height[i];
        trapped += temp;
    }

    return trapped;
};

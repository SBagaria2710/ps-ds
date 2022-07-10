// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const frequencyMap = {}
    nums.forEach(num => frequencyMap[num] ? frequencyMap[num] += 1 : frequencyMap[num] = 1);

    const uniqueElementSet = new Set(nums);
    const topKFrequent = new Array();

    while (k > 0) {
        let highestSoFar = { key: null, value: 0 };

        uniqueElementSet.forEach(key => {
            let frequencyCount = frequencyMap[key];
            if (highestSoFar.value <= frequencyCount) {
                highestSoFar = { ...highestSoFar, key, value: frequencyCount };
            }
        });

        topKFrequent.push(highestSoFar.key);
        uniqueElementSet.delete(highestSoFar.key);

        k--;
    }

    return topKFrequent;
};
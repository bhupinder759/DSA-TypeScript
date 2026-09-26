function maxSubArray(nums: number[]): number {
    let current = nums[0];
let best = nums[0];

for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    // Decide: purana subarray continue karein
    // ya current number se fresh start karein
    current = Math.max(num, current + num);

    // Ab tak ka maximum sum
    best = Math.max(best, current);
}

return best;
};
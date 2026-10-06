function maxProduct(nums: number[]): number {
    let maxProd = nums[0];
    let minProd = nums[0];
    let ans = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const x = nums[i];

        if (x < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        maxProd = Math.max(x, maxProd * x);
        minProd = Math.min(x, minProd * x);

        ans = Math.max(ans, maxProd);
    }

    return ans;
}
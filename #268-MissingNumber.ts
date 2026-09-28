//my mind self solution
function missingNumber(nums: number[]): number {
    let n = nums.length;
    let currSum = nums.reduce((a,b) => a + b, 0 );
    let expSum = 0;

    for(let i = 0; i < n + 1; i++) {
        expSum += i
    }

    return expSum - currSum
};

//clean code
function missingNumber1(nums: number[]): number {
    const n = nums.length;
    const expectedSum = n * (n + 1) / 2;

    const actualSum = nums.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;

}

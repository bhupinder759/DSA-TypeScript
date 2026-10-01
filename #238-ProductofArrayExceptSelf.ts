function productExceptSelf(nums: number[]): number[] {
    const answer = new Array(nums.length).fill(1);

    // Left / prefix products
    let left = 1;

    for (let i = 0; i < nums.length; i++) {
        answer[i] = left;
        left *= nums[i];
    }

    // Right / suffix products
    let right = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i];
    }

    return answer;
}

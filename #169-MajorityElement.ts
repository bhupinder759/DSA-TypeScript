function majorityElement(nums: number[]): number {
    let candidate = 0;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }

        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
};

//second
function majorityElement2(nums: number[]): number {
    const majority = Math.floor(nums.length / 2);
    const freq = new Map<number, number>();

    for (const num of nums) {
        const count = (freq.get(num) ?? 0) + 1;
        freq.set(num, count);

        if (count > majority) {
            return num;
        }
    }

    return -1;
}
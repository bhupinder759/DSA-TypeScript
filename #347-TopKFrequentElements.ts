function topKFrequent(nums: number[], k: number): number[] {
    const freq = new Map<number, number>();

    // Frequency count
    for (const num of nums) {
        freq.set(num, (freq.get(num) ?? 0) + 1);
    }

    // frequency -> numbers
    const buckets: number[][] = Array.from(
        { length: nums.length + 1 },
        () => []
    );

    for (const [num, count] of freq) {
        buckets[count].push(num);
    }

    // Highest frequency se start
    const result: number[] = [];

    for (let count = nums.length; count >= 1 && result.length < k; count--) {
        for (const num of buckets[count]) {
            result.push(num);

            if (result.length === k) {
                break;
            }
        }
    }

    return result;
}
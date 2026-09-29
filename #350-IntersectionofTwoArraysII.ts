function intersect(nums1: number[], nums2: number[]): number[] {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const freq = new Map<number, number>();
    const result: number[] = [];

    for (const num of nums1) {
        freq.set(num, (freq.get(num) ?? 0) + 1);
    }

    for (const num of nums2) {
        const count = freq.get(num) ?? 0;

        if (count > 0) {
            result.push(num);

            if (count === 1) {
                freq.delete(num);
            } else {
                freq.set(num, count - 1);
            }
        }
    }

    return result;
}
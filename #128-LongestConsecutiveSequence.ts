//my mind but node according question 
function longestConsecutive(nums: number[]): number {
    let length = 0;
    let maxLen = 0;
    let expected = 0;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {

        if (i === 0) {
            expected = nums[i];
        }

        // duplicate hai → skip
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        if (nums[i] === expected) {
            expected = nums[i] + 1;
            length++;
        } else {
            if (length > maxLen) maxLen = length;

            expected = nums[i] + 1;
            length = 1;
        }
    }

    if (maxLen > length) {
        return maxLen;
    } else {
        return length;
    }
}

//o(n) best approch
function longestConsecutivez1(nums: number[]): number {
const set = new Set(nums);
let longest = 0;


for (const num of set) {
    // Agar num - 1 nahi hai,
    // toh num kisi consecutive sequence ka start hai.
    if (!set.has(num - 1)) {
        let current = num;
        let length = 1;

        while (set.has(current + 1)) {
            current++;
            length++;
        }

        longest = Math.max(longest, length);
    }
}

return longest;
}

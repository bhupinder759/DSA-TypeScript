/* 
You are given a string s and an integer k. You can choose any character of the string 
and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same 
letter you can get after performing the above operations.


Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
*/

function characterReplacement(s: string, k: number): number {
    const count = new Map<string, number>();

    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // Add current character to window
        count.set(char, (count.get(char) ?? 0) + 1);

        // Highest frequency inside current window
        maxFreq = Math.max(maxFreq, count.get(char)!);

        // Characters that need to be replaced
        const windowLength = right - left + 1;
        const replacements = windowLength - maxFreq;

        // Window is invalid
        if (replacements > k) {
            count.set(
                s[left],
                count.get(s[left])! - 1
            );

            left++;
        }

        // Valid window length
        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }

    return maxLength;
};

//best apped beacuse fix space 
function characterReplacement1(s: string, k: number): number {
    const count = new Int32Array(26);

    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const index = s.charCodeAt(right) - 65;

        count[index]++;
        maxFreq = Math.max(maxFreq, count[index]);

        const windowLength = right - left + 1;

        if (windowLength - maxFreq > k) {
            const leftIndex = s.charCodeAt(left) - 65;

            count[leftIndex]--;
            left++;
        }

        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }

    return maxLength;
}
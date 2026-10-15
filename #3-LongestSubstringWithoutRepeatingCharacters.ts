/* 
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. 
Note that "bca" and "cab" are also correct answers.
*/

function lengthOfLongestSubstring(s: string): number {
    let seen = new Map<string, number>();

    let left = 0;
    let maxCount = 0;

    for(let right = 0; right < s.length; right++) {
        const char = s[right];

        if(seen.has(char)) {
            left = Math.max(left, seen.get(char)! + 1);
        }
        seen.set(char, right);

        maxCount = Math.max(maxCount, right - left + 1);
    }

    return maxCount;
};
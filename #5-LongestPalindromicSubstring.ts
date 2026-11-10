/* 
Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
*/

function longestPalindrome(s: string): string {
    let start = 0;
    let maxLength = 1;

    for (let i = 0; i < s.length; i++) {

        // Odd length: aba
        let left = i;
        let right = i;

        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            const length = right - left + 1;

            if (length > maxLength) {
                maxLength = length;
                start = left;
            }

            left--;
            right++;
        }

        // Even length: abba
        left = i;
        right = i + 1;

        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            const length = right - left + 1;

            if (length > maxLength) {
                maxLength = length;
                start = left;
            }

            left--;
            right++;
        }
    }

    return s.slice(start, start + maxLength);
}

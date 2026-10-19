/* 
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring of s such that every character in t (including duplicates) is included in the window. 
If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
*/


function minWindow(s: string, t: string): string {
    if (t.length > s.length) return "";

    const need = new Int32Array(128);

    for (const ch of t) {
        need[ch.charCodeAt(0)]++;
    }

    let left = 0;
    let required = t.length;
    let start = 0;
    let minLen = Infinity;

    for (let right = 0; right < s.length; right++) {
        const rightCode = s.charCodeAt(right);

        if (need[rightCode] > 0) {
            required--;
        }

        need[rightCode]--;

        while (required === 0) {
            const len = right - left + 1;

            if (len < minLen) {
                minLen = len;
                start = left;
            }

            const leftCode = s.charCodeAt(left);
            need[leftCode]++;

            if (need[leftCode] > 0) {
                required++;
            }

            left++;
        }
    }

    return minLen === Infinity
        ? ""
        : s.slice(start, start + minLen);
}

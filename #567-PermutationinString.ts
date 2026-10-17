/* 
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
*/

function checkInclusion(s1: string, s2: string): boolean {
    const count = new Int32Array(26);
    const window = new Int32Array(26);

    const s1Length = s1.length;

    // s1 ke characters ka count
    for (let i = 0; i < s1Length; i++) {
        const index = s1.charCodeAt(i) - 97;
        count[index]++;
    }

    let left = 0;

    for (let right = 0; right < s2.length; right++) {
        // right wala character window me add karo
        const rightIndex = s2.charCodeAt(right) - 97;
        window[rightIndex]++;

        // Window ko s1 ke size ka rakho
        if (right - left + 1 > s1Length) {
            const leftIndex = s2.charCodeAt(left) - 97;
            window[leftIndex]--;
            left++;
        }

        // Same frequency hai => permutation mil gayi
        if (right - left + 1 === s1Length) {
            let same = true;

            for (let i = 0; i < 26; i++) {
                if (count[i] !== window[i]) {
                    same = false;
                    break;
                }
            }

            if (same) return true;
        }
    }

    return false;
}
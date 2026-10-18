/* 
Given two strings s and p, return an array of all the start indices of p's anagrams in s. 
You may return the answer in any order.

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
*/

function findAnagrams(s: string, p: string): number[] {
    let s2length = p.length;
    let count = new Int32Array(26);
    let window = new Int32Array(26);
    let result : number[] = [];

    for(let i = 0; i < s2length; i++) {
        let index = p.charCodeAt(i) - 97;
        count[index]++;
    }

    let left = 0;
    for(let right = 0; right < s.length; right++) {
        let rightIndex = s.charCodeAt(right) - 97;
        window[rightIndex]++;

        if(right - left + 1 > s2length) {
            let leftIndex = s.charCodeAt(left) - 97;
            window[leftIndex]--;
            left++;
        };

        if(right - left + 1 === s2length) {
            let same = true;
            for(let i = 0; i < 26; i++) {
                if(count[i] !== window[i]) {
                    same = false;
                    break;
                }
            }

            if(same) result.push(left);
        }
    }
    return result;
};
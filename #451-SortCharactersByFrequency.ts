/* 
Given a string s, sort it in decreasing order based on the frequency of the characters. 
The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.


Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
*/

function frequencySort(s: string): string {
    const freq = new Map<string, number>();

    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    const arr = [...freq];
    arr.sort((a, b) => b[1] - a[1]);

    let result = "";

    for (const [char, count] of arr) {
        result += char.repeat(count);
    }

    return result;
}

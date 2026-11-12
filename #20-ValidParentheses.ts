/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false
*/

function isValid(s: string): boolean {
    let pair : Record<string, string> = {
        ')' : '(',
        '}': '{',
        ']': '['
    }

    let stack: string[] = [];

    for(let i = 0; i < s.length; i++) {
        let parentheses = s[i];

        if(
            parentheses === '(' ||
            parentheses === '{' ||
            parentheses === '['
        ) {
            stack.push(parentheses)
        } else {
            let top = stack.pop();

            if(top !== pair[parentheses]) {
                return false;
            }
        }
    }

    return stack.length === 0 
};
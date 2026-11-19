/* 
Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "3+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1

*/

function calculate(s: string): number {
    const stack: number[] = [];

    let num = 0;
    let operator = '+';

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        // Build the current number
        if (ch >= '0' && ch <= '9') {
            num = num * 10 + Number(ch);
        }

        // Process when we find an operator or reach the end
        if (
            (ch !== ' ' && (ch < '0' || ch > '9')) ||
            i === s.length - 1
        ) {
            if (operator === '+') {
                stack.push(num);
            } 
            else if (operator === '-') {
                stack.push(-num);
            } 
            else if (operator === '*') {
                stack.push(stack.pop()! * num);
            } 
            else if (operator === '/') {
                stack.push(Math.trunc(stack.pop()! / num));
            }

            operator = ch;
            num = 0;
        }
    }

    return stack.reduce((sum, value) => sum + value, 0);
}

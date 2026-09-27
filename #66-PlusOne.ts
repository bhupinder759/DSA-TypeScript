//my mind
function plusOne(digits: number[]): number[] {
    let n = digits.length - 1;

    for (let k = n; k >= 0; k--) {
        let currNum = digits[k];

        if (currNum === 9) {
            digits[k] = 0;

            // Agar first digit bhi 9 tha
            if (k === 0) {
                digits.unshift(1);
            }
        } else {
            digits[k] = currNum + 1;
            break;
        }
    }

    return digits;
};

//clean code
function plusOne1(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    return [1, ...digits];
}
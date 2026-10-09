// according to question best approch but not run time high

function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    const isAlphaNumeric = (char: string): boolean => {
        return /^[a-z0-9]$/i.test(char);
    };

    while (left < right) {
        // Skip non-alphanumeric characters from the left
        if (!isAlphaNumeric(s[left])) {
            left++;
            continue;
        }

        // Skip non-alphanumeric characters from the right
        if (!isAlphaNumeric(s[right])) {
            right--;
            continue;
        }

        // Compare characters without case sensitivity
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// my solutions but not according to question
function isPalindrome1(s: string): boolean {
    let cleanString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")

    let left = 0;
    let right = cleanString.length - 1;

    while(left < right) {
        if(cleanString[left] !== cleanString[right]) {
            return false
        }
        left++;
        right--;
    }

    return true;
};
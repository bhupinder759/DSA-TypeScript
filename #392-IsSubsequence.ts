//optimize sol by ai just minor change from me
function isSubsequence(s: string, t: string): boolean {
    let i = 0;
    let j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }

    return i === s.length;
}

//my solution

function isSubsequence1(s: string, t: string): boolean {
    if( s.length === 0) return true
    let i: number = 0;
    let j: number = 0;
    let count = 0;

    while(j <= t.length) {
        if(s[i] === t[j]) {
            count++;
            i++;
        }
        if (count === s.length) return true;
        j++;
    }
    return false;
};
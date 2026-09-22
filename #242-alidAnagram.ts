function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const freq = new Map<string, number>();

    for (const char of s) {
        freq.set(char, (freq.get(char) ?? 0) + 1);
    }

    for (const char of t) {
        const count = freq.get(char);

        if (count === undefined || count === 0) {
            return false;
        }

        freq.set(char, count - 1);
    }

    return true;
};
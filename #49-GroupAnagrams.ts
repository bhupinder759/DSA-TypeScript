//normal best approch
function groupAnagrams(strs: string[]): string[][] {
    const freq = new Map<string, string[]>();

    for (const ch of strs) {
        const sorted = ch.split('').sort().join('');

        let existing = freq.get(sorted) ?? [];

        existing.push(ch);

        freq.set(sorted, existing);
    }

    return Array.from(freq.values());
}

// better algorithmic approach hai jo split().sort().join() ko avoid karti hai.fast speed
function groupAnagrams1(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const str of strs) {
        const count = new Array(26).fill(0);

        for (const ch of str) {
            count[ch.charCodeAt(0) - 97]++;
        }

        const key = count.join('#');

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key)!.push(str);
    }

    return Array.from(map.values());
}

/* "LeetCode par abhi fastest runtime"

→ Tumhara 24 ms wala sorting approach better perform kar raha hai.

Agar goal hai:

"Algorithmically optimal approach samajhna"

→ Frequency counting approach better theoretical complexity deta hai. */
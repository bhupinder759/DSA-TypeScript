function isValidSudoku(board: string[][]): boolean {
    const rows = Array.from({ length: 9 }, () => new Set<string>());
    const cols = Array.from({ length: 9 }, () => new Set<string>());
    const boxes = Array.from({ length: 9 }, () => new Set<string>());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            const num = board[i][j];

            if (num === ".") {
                continue;
            }

            // Find which 3x3 box this cell belongs to
            const boxIndex =
                Math.floor(i / 3) * 3 + Math.floor(j / 3);

            // Check duplicate
            if (
                rows[i].has(num) ||
                cols[j].has(num) ||
                boxes[boxIndex].has(num)
            ) {
                return false;
            }

            // Mark number as seen
            rows[i].add(num);
            cols[j].add(num);
            boxes[boxIndex].add(num);
        }
    }

    return true;
}
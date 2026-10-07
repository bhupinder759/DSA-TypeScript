// run time 30% but for best approch interview O(1) 
function setZeroes(matrix: number[][]): void {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Kya first row mein original 0 tha?
    let firstRowZero = false;

    // Kya first column mein original 0 tha?
    let firstColZero = false;

    // 1. Check first row
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }

    // 2. Check first column
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }

    // 3. First row & first column ko markers ki tarah use karo
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {

            if (matrix[i][j] === 0) {
                matrix[i][0] = 0; // row marker
                matrix[0][j] = 0; // column marker
            }
        }
    }

    // 4. Markers ke according inner matrix ko zero karo
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {

            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // 5. Agar original first row mein 0 tha
    if (firstRowZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    // 6. Agar original first column mein 0 tha
    if (firstColZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
}

// 90% runtime but this is second option not fulli optimal O(M+N)
function setZeroes1(matrix: number[][]): void {
    const zeroRows = new Set<number>();
    const zeroCols = new Set<number>();

    const rows = matrix.length;
    const cols = matrix[0].length;

    // Step 1: Find all rows and columns containing 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }

    // Step 2: Make those rows and columns zero
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            if (zeroRows.has(i) || zeroCols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
}
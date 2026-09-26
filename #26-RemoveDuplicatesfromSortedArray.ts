//my mind solution
function removeDuplicates(nums: number[]): number {
    let MatchNum = nums[0];
    let lastIndex = 0;

    for(let k = 0; k < nums.length; k++) {
        let currNum = nums[k]
        if (currNum === MatchNum) {
            continue;
        } else {
            nums[lastIndex + 1] = currNum;
            lastIndex++;
            MatchNum = currNum
        }
    }

    return lastIndex + 1;
};

//best clean solution
function removeDuplicates1(nums: number[]): number {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}
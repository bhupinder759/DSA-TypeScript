/* 
Given n non-negative integers representing an elevation map 
where the width of each bar is 1, compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/

//best solution

function trap(height: number[]): number {
    let left = 0;
    let right = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }

            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }

            right--;
        }
    }

    return water;
}

//another but take time beacuse space extra

function trap1(height: number[]): number {
    const n = height.length;

    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);

    let water = 0;

    // Left to right: calculate leftMax
    leftMax[0] = height[0];

    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // Right to left: calculate rightMax
    rightMax[n - 1] = height[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // Calculate trapped water
    for (let i = 0; i < n; i++) {
        const minHeight = Math.min(leftMax[i], rightMax[i]);
        water += minHeight - height[i];
    }

    return water;
}
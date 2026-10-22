/* 
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
*/

function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);

    let result: number[][] = [];

    for (let i = 0; i < intervals.length; i++) {
        if (result.length === 0 ||
            result[result.length - 1][1] < intervals[i][0]) {
            result.push(intervals[i]);
        } else {
            result[result.length - 1][1] = Math.max(
                result[result.length - 1][1],
                intervals[i][1]
            );
        }
    }

    return result;
}

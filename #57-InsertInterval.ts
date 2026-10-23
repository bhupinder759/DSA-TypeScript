/* 
You are given an array of non-overlapping intervals intervals where intervals[i] = 
[starti, endi] represent the start and the end of the ith interval and intervals is 
sorted in ascending order by starti. You are also given an interval newInterval = [start, end] 
that represents the start and end of another interval.

Two intervals are considered overlapping if they share at least one point.

Insert newInterval into intervals such that intervals is still sorted in ascending order by 
starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.
 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/

//best also for interview
function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = [];
    let i = 0;
    const n = intervals.length;

    // 1. Add intervals that come before newInterval
    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // 2. Merge overlapping intervals
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }

    // Add the merged interval
    result.push([...newInterval]);

    // 3. Add remaining intervals
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}

// second for understainf
function insert1(intervals: number[][], newInterval: number[]): number[][] {
    let result: number[][] = [];

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < newInterval[0]) {
            // Existing interval newInterval se pehle hai
            result.push(intervals[i]);
        } else if (intervals[i][0] > newInterval[1]) {
            // Existing interval newInterval ke baad hai
            // Yahan newInterval ko result mein add karna hai
            result.push(newInterval)

            for(let j = i; j < intervals.length; j++) {
                result.push(intervals[j])
            }

            return result;
            // Phir current aur remaining intervals bhi add karne hain
        } else {
            // Dono overlap karte hain
            // newInterval ka start aur end update karo
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        }
    }
    result.push(newInterval);

    return result;
};
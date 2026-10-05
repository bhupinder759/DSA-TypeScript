function subarraySum(nums: number[], k: number): number {
    let sum : number = 0;
    let output : number = 0;

    const map = new Map<number , number>();

    map.set(0,1);

    for(const num of nums) {
        sum += num;

        const required = sum - k;

        if(map.has(required)) {
            output += map.get(required)!
        }

        map.set(sum, (map.get(sum) ?? 0) + 1)
    }

    return output;
};
function twoSum(nums: number[], target: number): number[] {

    for (let j = 0; j < nums.length; j++) {
        // find the difference from the expected sum
        // check if the counter part exists in the array
        // return if yes
        
        const diff = target - nums[j];
        const otherIndex = nums.indexOf(diff);
        
        if (diff > 0 && otherIndex >= 0 && otherIndex !== j) {
            return [j, otherIndex];
        }
    }

    return [-1, -1];
};

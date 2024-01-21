class Solution:
    def subsetsWithDup(self, nums: list[int]) -> list[list[int]]:
        result = []
        subset = []

        nums.sort() # places duplicates next to each other

        def dfs(i):
            if i >= len(nums):
                result.append(subset.copy())
                return

            subset.append(nums[i])
            dfs(i + 1)

            while i + 1 < len(nums) and nums[i] == nums[i + 1]:
                i += 1 # handles duplicates

            subset.pop()
            dfs(i + 1)

        dfs(0)

        return result
class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        result = []
        subset = []

        def dfs(i):
            if i >= len(nums):
                result.append(subset.copy())
                return

            subset.append(nums[i])
            dfs(i + 1)

            subset.pop()
            dfs(i + 1)

        dfs(0)

        return result
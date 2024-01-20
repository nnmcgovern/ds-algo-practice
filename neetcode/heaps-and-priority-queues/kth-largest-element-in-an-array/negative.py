from heapq import *

class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        nums = [-num for num in nums]

        heapify(nums)

        for i in range(k-1):
            heappop(nums)

        return heappop(nums) * -1
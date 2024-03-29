from heapq import *

class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        heapify(nums)

        while len(nums) > k:
            heappop(nums)

        return heappop(nums)
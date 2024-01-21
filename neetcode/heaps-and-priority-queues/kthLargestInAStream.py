from heapq import * # min heap

class KthLargest:

    def __init__(self, k: int, nums: list[int]):
        self.k = k
        self.nums = []

        for num in nums:
            heappush(self.nums, num)

    def add(self, val: int) -> int:
        heappush(self.nums, val)

        while len(self.nums) > self.k:
            heappop(self.nums) # pops smallest num

        return self.nums[0]


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
from heapq import *

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        print(stones)

        stones = [-stone for stone in stones]

        print(stones)

        heapify(stones)

        while len(stones) > 1:
            y = heappop(stones) * -1
            x = heappop(stones) * -1

            if y > x:
                y = y - x
                y = y * -1
                heappush(stones, y)

        if len(stones) == 0:
            return 0
        else:
            return stones[0] * -1
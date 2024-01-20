from heapq import *

class Solution:
    def kClosest(self, points: list[list[int]], k: int) -> list[list[int]]:
        result = []

        for point in points:
            x, y = point

            distance = x**2 + y**2

            point.insert(0, distance)

        heapify(points)

        for i in range(k):
            distance, x, y = heappop(points)
            result.append([x, y])

        return result
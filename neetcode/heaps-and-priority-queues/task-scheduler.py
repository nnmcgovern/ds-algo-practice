from heapq import *

class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        if n == 0:
            return len(tasks)

        task_map = {}
        
        for task in tasks:
            if not task_map.get(task):
                task_map[task] = -1
            else:
                task_map[task] -= 1

        task_list = []
        for task in task_map:
            value = task_map.get(task)
            task_list.append(value)

        heapify(task_list)
        queue = []
        time = 0

        while task_list or queue:
            time += 1

            if task_list:
                count = 1 + heappop(task_list)

                if count:
                    queue.append([count, time + n])

            if queue and queue[0][1] == time:
                heappush(task_list, queue.pop(0)[0])

        return time
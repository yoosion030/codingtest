# 큐
from collections import deque
queue = deque()

queue.append(1)
queue.append(2)
queue.append(3)

print(queue)

print(queue.popleft())
print(queue.popleft())

print(queue)


# 양방향 큐
doubleQueue = deque()

doubleQueue.append(5)
doubleQueue.appendleft(4)

print(doubleQueue)

# 힙(우선순위 큐)
import heapq
heap = []

heapq.heappush(heap, 4)
heapq.heappush(heap, 1)
heapq.heappush(heap, 2)
heapq.heappush(heap, 3)
heapq.heappush(heap, 5)
heapq.heappush(heap, 6)

print(heap)

print(heapq.heappop(heap))
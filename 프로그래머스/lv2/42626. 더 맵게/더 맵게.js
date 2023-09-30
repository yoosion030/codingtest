class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.size() === 1) {
      return this.heap.pop();
    }

    const minValue = this.peek();
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return minValue;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }

  heapifyUp() {
    let currentIndex = this.size() - 1;
    while (currentIndex > 0) {
      const parentIdx = this.parentIndex(currentIndex);
      if (this.heap[parentIdx] <= this.heap[currentIndex]) {
        break;
      }
      [this.heap[parentIdx], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIdx]];
      currentIndex = parentIdx;
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    while (true) {
      const leftIndex = this.leftChildIndex(currentIndex);
      const rightIndex = this.rightChildIndex(currentIndex);
      let minIndex = currentIndex;

      if (leftIndex < this.size() && this.heap[leftIndex] < this.heap[minIndex]) {
        minIndex = leftIndex;
      }

      if (rightIndex < this.size() && this.heap[rightIndex] < this.heap[minIndex]) {
        minIndex = rightIndex;
      }

      if (minIndex === currentIndex) {
        break;
      }

      [this.heap[currentIndex], this.heap[minIndex]] = [this.heap[minIndex], this.heap[currentIndex]];
      currentIndex = minIndex;
    }
  }
}

function solution(scoville, K) {
  let answer = 0;
  const priorityQueue = new PriorityQueue();

  // 초기 스코빌 지수를 우선순위 큐에 삽입
  for (const s of scoville) {
    priorityQueue.enqueue(s);
  }

  while (priorityQueue.size() > 1 && priorityQueue.peek() < K) {
    const first = priorityQueue.dequeue();
    const second = priorityQueue.dequeue();
    const mixedScoville = first + second * 2;
    priorityQueue.enqueue(mixedScoville);
    answer++;
  }

  return priorityQueue.peek() >= K ? answer : -1;
}
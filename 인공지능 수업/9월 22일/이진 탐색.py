# 탐색 = N개의 데이터 중 특정한 데이터를 찾는 과정

# 순차 탐색
# 여러 개의 데이터를 담을 수 있는 자료형 안에 있는 특정한 데이터를 찾기 위해 데이터를 앞에서부터 순서대로 확인하는 방법

# 이진 탐색 
# 데이터의 내부가 정렬되어 있을 때 사용할 수 있는 탐색 알고리즘
# 탐색할 때 이미 정렬되어 있다고 가정
# 탐색하고자 하는 범위의 시작점, 끝점, 중간점을 이용하여 데이터를 2개의 부분 집합으로 나눔

# 시작점 = 0
# 중간점 = (시작점 + 끝점) / 2
# 끝점 = n - 1 (n은 배열의 크기)

# 내가 찾는 데이터가 큰 쪽에 있다면 중간점을 기준으로 작은 쪽은 탐색하지 않음
# 또 다시 기준 점을 잡고 해당 요소를 찾을 때 까지 반복함.

# 배열, 찾으려는 요소, 시작값, 끝값을 입력받아서
# 중간점을 이용해서 데이터의 탐색 범위를 절반으로 줄여나가면서
# 요소를 찾는 알고리즘 Nlog2N

# 중간점과 찾고자하는 요소가 같으면 멈춤
# 배열의 탐색 범위가 0보가 작으면 => 시작값 > 끝값

# 데이터가 천만 이상이면 이진탐색.
# 억대 이상이면

def binary_search(array, target, start, end):
    if start > end:
        return None
    mid = (start + end) // 2
    if array[mid] == target:
        return mid
    elif target < array[mid] :
        return binary_search(array, target, start, mid - 1)
    elif target > array[mid]:
        return binary_search(array, target, mid + 1, end)


def binary_search_while(array, target, start, end):
    while start <= end:
        mid = (start + end) // 2
        if array[mid] == target:
            return mid
        elif target < array[mid] :
            end =  mid - 1
        elif target > array[mid]:
            start = mid + 1
    return None 


array = [1, 2, 6, 34, 76, 987, 2938, 25364, 358329043]
array.sort()
target = 2

print(binary_search(array, target, 0, len(array) - 1))
print(binary_search_while(array, target, 0, len(array) - 1))
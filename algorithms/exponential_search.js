function binarySearch (nums, n, low, high) {
    while (low < high) {
        mid = Math.floor((low + high) / 2)

        if (nums[mid] == n) {
            return mid
        } else if (nums[mid] < n) {
            low = mid + 1
        } else {
            high = mid
        }
    }

    return -1
}

function exponentialSearch(arr, target) {
    if (arr[0] === target) {
        return 0;
    }

    let n = arr.length;
    let i = 1;

    while (i < n && arr[i] < target) {
        i *= 2;
    }

    if (arr[i] === target) {
        return i;
    }

    return binarySearch(arr, target, i / 2, Math.min(i, n - 1));
}


let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
];

let target = 32
let result = exponentialSearch(arr, target)

console.log(`Element found at index ${result}`)

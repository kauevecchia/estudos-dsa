function quickSort(arr, left, right) {
    if(left < right) {
        const pi = partition(arr, left, right)
        quickSort(arr, left, pi - 1)
        quickSort(arr, pi + 1, right)
    }
}

function partition(arr, left, right) {
    const pivot = arr[right]

    let i = left - 1

    for(j = left; j < right; j++) {
        if(arr[j] <= pivot) {
            i += 1
            let aux = arr[i]
            arr[i] = arr[j]
            arr[j] = aux
        }
    }
    aux = arr[i + 1]
    arr[i + 1] = arr[right]
    arr[right] = aux
}

quickSort(arr, 0, arr.length - 1)
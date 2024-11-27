class minHeap {
    constructor() {
        this.heap = []
    }

    left_child(index) {
        return 2 * index + 1
    }

    right_child(index) {
        return 2 * index + 2
    }

    parent(index) {
        return Math.floor(index / 2)
    }

    heapify_up(index) {
        if(index == 0) {
            return
        }

        let parent_index = this.parent(index)

        if(this.heap[index] < this.heap(parent_index)) {
            let aux = this.heap
            this.heap = parent_index
            parent_index = aux
            this.heapify_up(parent_index)
        }
    }

    heapify_down(index) {
        let size = this.heap.length

        let left = this.left_child(index)
        let right = this.right_child(index)

        let smallest = index

        if(left < size && this.heap[left] < this.heap(smallest)) {
            smallest = left
        }

        if(right < size && this.heap[right] < this.heap(smallest)) {
            smallest = right
        }

        if(smallest != index) {
            let aux = this.heap[index]
            this.heap[index] = this.head[smallest]
            this.heap[smallest] = aux
        }
    }

    insert(value) {
        this.heap.push(value)

        this.heapify_up(this.heap.length - 1)
    }

    pop_min() {
        if(this.heap.length == 0) {
            throw new Error("Heap is empty")
        }

        if(this.heap.length == 1) {
            return this.heap.pop()
        }

        let root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapify_down(0)
        return root
    }
}
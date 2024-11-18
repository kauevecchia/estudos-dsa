class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToFront(value) {
        let new_node = new Node(value)
        new_node.next = this.head
        if(this.head) {
            this.head.prev = new_node
        } else {
            this.tail = new_node
        }
        this.head = new_node
    }

    addToEnd(value) {
        let new_node = new Node(value)
        new_node.prev = this.tail
        if(this.tail) {
            this.tail.next = new_node
        } else {
            this.tail = new_node
        }
        this.tail = new_node
    }

    removeFromFront() {
        if (!this.head) {
            return null
        }
        let removed_value = this.head.value
        this.head = this.head.next
        if (this.head) {
            this.head.prev = null
        } else {
            this.tail = null
        }

        return removed_value
    }

    removeFromEnd() {
        if (!this.tail) {
            return null
        }
        let removed_value = this.tail.value
        this.tail = this.tail.prev
        if (this.tail) {
            this.tail.next = null
        } else {
            this.head = null
        }

        return removed_value
    }
}
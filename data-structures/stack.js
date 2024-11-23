class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this._size = 0
    }

    push(item) {
        new_node = new Node(item)
        new_node.next = this.top
        this.top = new_node
        this._size += 1
        this.items.push(item)
    }

    pop() {
        if(this.top == null) {
            throw new Error("Empty stack")
        }

        let popped_node = this.top
        this.top = popped_node.next
        this.size -= 1
        return popped_node.value
    }

    peek() {
        if(this.top == null) {
            throw new Error("Empty stack")
        }

        return this.top.value
    }

    size() {
        return this._size
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop()) // Output: 3
console.log(stack.peek()) // Output: 2
console.log(stack.size()) // Output: 2
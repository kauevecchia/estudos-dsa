class Stack {
    constructor() {
        this.items = []
    }

    push(item) {
        this.items.push(item)
    }

    pop() {
        if(!this.items.length) {
            throw new Error("Empty list")
        }

        return this.items.shift()
    }

    peek() {
        if(!this.items.length) {
            throw new Error("Empty list")
        }

        return this.items[-1]
    }

    size() {
        return this.items.length
    }
}
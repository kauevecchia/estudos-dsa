class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class binaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if (this.root == null) {
            this.root = new Node(data)
        } else {
            this.insert_recursive(data, this.root)
        }
    }

    insert_recursive(data, node) {
        if (data < node.data) {
            if (node.left == null) {
                node.left = new Node(data)
            } else {
                this.insert_recursive(data, node.left)
            }
        } else {
            if (node.right == null) {
                node.right = new Node(data)
            } else {
                this.insert_recursive(data, node.right)
            }
        }
    }

    search(data) {
        return this.search_recursive(this.root, data)
    }

    search_recursive(node, data) {
        if (node == null) {
           return false 
        }
        if (node.data == data) {
            return true
        } else if (data < node.data) {
            return this.search_recursive(node.left, data)
        } else {
            return this.search_recursive(node.right, data)
        }
    }
}

const tree = new binaryTree()
tree.insert(5)
tree.insert(3)
tree.insert(8)
tree.insert(1)
tree.insert(4)
tree.insert(7)
tree.insert(9)

console.log(`Search 4: ${tree.search(4)}.`)
console.log(`Search 6: ${tree.search(6)}.`)
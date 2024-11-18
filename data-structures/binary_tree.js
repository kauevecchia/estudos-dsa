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

    preorder_traversal() {
        let result = []
        this.preorder_recursive(this.root, result)
        return result
    }

    preorder_recursive(node, result) {
        if (node) {
            result.push(node.data)
            this.preorder_recursive(node.left, result)
            this.preorder_recursive(node.right, result)
        }
    }

    inorder_traversal() {
        let result = []
        this.inorder_recursive(this.root, result)
        return result
    }

    inorder_recursive(node, result) {
        if (node) {
            this.inorder_recursive(node.left, result)
            result.push(node.data)
            this.inorder_recursive(node.right, result)
        }
    }

    postorder_traversal() {
        let result = []
        this.postorder_recursive(this.root, result)
        return result
    }

    postorder_recursive(node, result) {
        if (node) {
            this.postorder_recursive(node.left, result)
            this.postorder_recursive(node.right, result)
            result.push(node.data)
        }
    }
}

const tree = new binaryTree()
tree.insert(5)
tree.insert(3)
tree.insert(1)
tree.insert(10)
tree.insert(15)
tree.insert(7)

// preorder: [5, 3, 1, 10, 7, 15]
// inorder: [1, 3, 5, 7, 10, 15]
// postorder: [1, 3, 7, 15, 10, 5]


console.log(`preorder_traversal: ${tree.preorder_traversal()}.`)
console.log(`inorder_traversal: ${tree.inorder_traversal()}.`)
console.log(`postorder_traversal: ${tree.postorder_traversal()}.`)
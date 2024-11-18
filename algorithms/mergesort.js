function findMiddle(head) {
    let slow = head
    let fast = head.next

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

function merge(l1, l2) {
    let head = new Node()
    let tail = head

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1
            l1 = l1.next
        } else {
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next
    }

    tail.next = l1 || l2
    return head.next
}

function mergeSort(head) {
    if (!head || !head.next) {
        return head
    }

    let middle = findMiddle(head)
    let afterMiddle = middle.next
    middle.next = null

    let left = mergeSort(head);
    let right = mergeSort(afterMiddle)

    let sortedList = merge(left, right)

    return sortedList
}

class Node {
    constructor(val = 0, next = null) {
        this.val = val
        this.next = next
    }
}


let node_7 = new Node(7)
let node_1 = new Node(1, node_7)
let node_3 = new Node(3, node_1)
let node_9 = new Node(9, node_3)


let myList = mergeSort(node_9)


function printList(head) {
    let current = head
    let result = []
    while (current) {
        result.push(current.val)
        current = current.next
    }
    console.log(result.join(" -> "))
}

printList(myList)

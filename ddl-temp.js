// Double linked List

class Node {
    constructor(data) {
        this.data = data,
            this.prev = null,
            this.next = null
    }
}

function printDDL(head) {
    let curr = head;
    while (curr) {
        console.log(curr.data);
        curr = curr.next;
    }
}


let head;
let n1 = new Node(1);
head = n1;
let n2 = new Node(1);

/**
 * Insert node in sorted DDL
 * 
 * @param {any} head 
 * @param {any} data 
 * @returns 
 */
function sortedInsert(head, data) {
    let newNode = new Node(data);
    if (head === null)
        return head = newNode;
    let curr = head;
    while (curr) {
        if (data > curr.data) {
            if (curr.next === null) {
                curr.next = newNode;
                newNode.prev = curr;
                break;
            }
            curr = curr.next;
        } else {
            let prev = curr.prev;
            if (prev === null)
                head = newNode;
            else {
                prev.next = newNode;
                newNode.prev = prev;
            }
            newNode.next = curr;
            curr.prev = newNode;
            break;
        }
    }
    return head;
}

// 1 4 2 3 7 6 9 10
let resHead = sortedInsert(null, 3);
// resHead = sortedInsert(resHead, 4);
// resHead = sortedInsert(resHead, 2)
// resHead = sortedInsert(resHead, 3);
// resHead = sortedInsert(resHead, 7);
// resHead = sortedInsert(resHead, 6)
// resHead = sortedInsert(resHead, 9);
// resHead = sortedInsert(resHead, 10);
printDDL(resHead);
console.log('-----------------------');

/**
 * Reverse SSL using recursion
 * 
 * @param {any} head 
 * @returns 
 */
function reverseSSL1(head) {
    let h;
    if (head === null || head.next === null) {
        return head;
    }
    h = reverseLinkedList(head.next) || h;
    head.next.next = head;
    head.next = null;
    return h;
}
let rev = reverseSSL1(resHead)
    // printDDL(rev);

// normal method - 3 variables prev, curr, next
/**
 * Reverse SSL without recursion
 * 
 * @param {any} head 
 * @returns 
 */
function reverseSSL2(head) {
    if (head === null)
        return;

    let curr = head,
        prev = null,
        next = null;

    while (curr.next) {
        next = curr.next;
        curr.next = prev;
        if (next === null)
            return curr; //head
        prev = curr;
        curr = next;
    }
}

// let rev2 = reverseSSL2(resHead)
// printDDL(rev2);
/**
 * Reverse DDl
 * 
 * @param {any} head 
 * @returns 
 */
function reverseDLL(head) {
    if (head === null || head.next === null)
        return head;

    let curr = head,
        temp = null,
        newHead = null;

    while (curr) {
        temp = curr.next;
        curr.next = curr.prev;
        curr.prev = temp;
        if (temp === null) {
            newHead = curr;
            break;
        }
        curr = temp;
    }
    return newHead;
}

let result = reverseDLL(resHead);
printDDL(result);
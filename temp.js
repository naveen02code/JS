// // import { print } from "util";


//   Node is defined as
var Node = function(data) {
    this.data = data;
    this.next = null;
}


// // This is a "method-only" submission.
// // You only need to complete this method.

function insertAtHead(head, data) {
    let newNode = new Node(data);
    if (head === null) {
        head = newNode;
    } else {
        newNode.next = head;
        head = newNode;
    }
    return head;
}

function insert(head, data) {
    let newNode = new Node(data);
    if (head === null) {
        head = newNode;
    } else {
        let current = head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    return head;
}

// let n11 = new Node(11);
// // head.next = n1;
// let headA = insert(null, 1);
// insert(headA, 3);
// insert(headA, 5);
// headA.next = n11;
// insert(headA, 6);


// let headB = insert(null, 2);
// headB.next = n11;
// insert(headB, 4);
// insert(headB, 7);

// let n1 = new Node(11);
// head.next = n1;
// let n2 = new Node(22);
// n1.next = n2;
// let n3 = new Node(33);
// n2.next = n3;
// let n4 = new Node(44);
// n3.next = n4;
// n4.next = null;

// head = insert(head, 2);
// head = insert(head, 226);


// head = insertAtHead(head, 329);
// head = insertAtHead(head, 722);


// // reversePrint(head);
// let h1 = reverseSLL(head);
// print(h1);

// function print(head) {
//     if (head) {
//         let curr = head;
//         while (curr.next) {
//             console.log(curr.data);
//             curr = curr.next;
//         }
//         console.log(curr.data);
//     }
// }




// function deleteNode(head, position) {
//     if (head === null)
//         return head;

//     let curr = head,
//         prev = null;
//     for (let i = 0; i < position; i++) {
//         if (curr.next === null)
//             return;
//         prev = curr;
//         curr = curr.next;
//     }
//     if (prev)
//         prev.next = curr.next;
//     else
//         head = curr.next;

//     return head;
// }

// function reversePrint(head) {
//     if (head === null)
//         return;
//     let curr = head;
//     let output = curr.data;
//     while (curr.next) {
//         curr = curr.next;
//         output = `${curr.data}\n${output}`;
//     }
//     console.log(output);
// }

// function reverseLinkedList(head) {
//     if (head === null || head.next === null)
//         return head;
//     let nodes = [];
//     let curr = head;
//     nodes.push(curr);
//     while (curr.next) {
//         curr = curr.next;
//         nodes.push(curr);
//     }
//     let c = nodes.length;
//     head = nodes[c - 1];
//     nodes[0].next = null;

//     for (let i = c - 1; i > 0; i--) {
//         nodes[i].next = nodes[i - 1];
//     }
//     return head;
// }
// var head1;

// function reverseSLL(node) {
//     let h;
//     if (node === null || node.next === null) {
//         return node;
//     }
//     h = reverseSLL(node.next) || h;
//     node.next.next = node;
//     node.next = null;
//     return h;
// }


// function dynamicArray(n, queries) {
//     /*
//      * Write your code here.
//      */
//     let lastAnswer = 0,
//         seqList = [];
//     for (let i = 0; i < n; i++) {
//         seqList[i] = [];
//     };

//     queries.forEach(q => {

//         let qt = q[0],
//             x = q[1],
//             y = q[2],
//             seqIndex = (x ^ lastAnswer) % n;
//         switch (qt) {
//             case 1:
//                 seqList[seqIndex].push(y);
//                 break;
//             case 2:
//                 let index = y % seqList[seqIndex].length;
//                 lastAnswer = seqList[seqIndex][index];
//                 console.log(lastAnswer);
//                 break;
//             default:
//                 break;
//         }
//     })
// }


// dynamicArray(
//     2, [
//         [1, 0, 5],
//         [1, 1, 7],
//         [1, 0, 3],
//         [2, 1, 0],
//         [2, 1, 1]
//     ]);

//-----------------------------------------------------------------------------------------------------
// a = [1, 2, 3, 4, 5],
//     d = 4, n = 5;
// //code written below
// let newArr = [];
// for (var i = 0; i < n; i++) {
//     if (i + d === n)
//         break;
//     newArr.push(a[i + d]);
// }
// //remove rotated element
// a.splice(d, n - d);
// newArr = newArr.concat(a);
// console.log(newArr.join(' '));

//------------------------------------------------------------------------------------------------------
// function findSuffix(collections, queryString) {
//     /*
//      * Write your code here.
//      */
//     let count = 0;
//     collections.forEach(e => {
//         if (queryString === e)
//             count++;
//     });

//     return count;
// }

// let collections = ['aba', 'baba', 'aba', 'xzxb'],
//     queryString = ['aba', 'xzxb', 'ab'];
// let output = findSuffix(collections, queryString[2]);
// console.log(output);

// //-----------------------------------------------------------------------------------------------------
// function arrayManipulation(n, queries) {
//     /*
//      * Write your code here.
//      */
//     let arr = new Array(n).fill(0),
//         qCount = queries.length,
//         max = 0;
//     queries.forEach((q, i) => {
//         let a = q[0],
//             b = q[1],
//             k = q[2];
//         for (let i = a - 1; i < b; i++) {
//             arr[i] += k;
//             if (arr[i] > max)
//                 max = arr[i];
//         }
//     });
//     return max;
// };

// let queries = [
//         [1, 2, 100],
//         [2, 5, 100],
//         [3, 4, 100]
//     ],
//     n = 5;
// let max = arrayManipulation(n, queries);
// console.log(max);

// let a = {
//     value: 2,
//     valueOf: function() {
//         return ++this.value;
//     },
//     toString: function() {
//         return ++this.value;
//     }
// }

// if (a == 3 && a == 4) {
//     console.log('Condition is true but How?');
// }


// let a = {
//     value: 2,
//     toString: function() {
//         return ++this.value;
//     }
// }
// if (a == 3 && a == 4) {
//     console.log('Condition is true');
// }


//------------------------------------------------------------------------------------------------------
// function reverseArray(a) {
//     /*
//      * Write your code here.
//      */
//     let count = a.length,
//         output = [];
//     for (let i = count - 1; i >= 0; i--) {

//         output.push(a[i]);
//     }
//     return output;
// }

// let arr = [1, 4, 3, 2];
// console.log(reverseArray(arr));

//------------------------------------------------------------------------------------------
// function hasCycle(head) {
//     if (head === null)
//         return false;
//     let traversed = [],
//         isCyclic = false,
//         curr = head;
//     while (curr) {
//         if (traversed.indexOf(curr) > -1) {
//             isCyclic = true;
//             break;
//         } else {
//             traversed.push(curr);
//             curr = curr.next;
//         }
//     }
//     return isCyclic;
// }
// let hasCycleRes = hasCycle(head);
// console.log(hasCycleRes);

// function hasCycleSample(head) {
//     if (head == null) {
//         return 0;
//     }

//     let slow = head;
//     let fast = head;

//     while (fast != null && fast.next != null) {
//         slow = slow.next;
//         fast = fast.next.next;

//         if (slow == fast) {
//             return 1;
//         }
//     }

//     return 0;
// }

// let hasCycleSampleRes = hasCycleSample(head);
// console.log(hasCycleSampleRes);

// ----------------------------------------------------------------------------------------------------------------------------------
// function mergeLinkedLists(headA, headB) {
// // using recursion
// let currA = headA, currB = headB;
// if(currA === null)
//     return currB;
// else if(currB === null)
//     return currA;
// let headC;
// if(currA.data <= currB.data){
//     headC = currA;
//     headC.next = mergeLinkedLists(currA.next, currB);
// }else{
//     headC = currB;
//     headC.next = mergeLinkedLists(currA, currB.next);
// }
// return headC;

//without recursion
//     let currA = headA,
//         currB = headB,
//         headC = null,
//         currC = headC;
//     while (currA || currB) {
//         //If any list reached end
//         if (currA === null)
//             return headC ? currC.next = currB : headC = currB;
//         else if (currB === null)
//             return headC ? currC.next = currA : headC = currA;

//         if (currA.data <= currB.data) {
//             headC ? headC.next = currA : headC = currA;
//             currA = currA.next;
//         } else {
//             headC ? headC.next = currB : headC = currB;
//             currB = currB.next;
//         }

//     }
//     return headC;
// }

// let mergedLS = mergeLinkedLists(headA, headB);

// function leftRotateArray(arr, n) {
//     let c = arr.length,
//         newArr = [];
//     for (let i = 0; i < c; i++) {
//         //let index = i + n < c ? i + n :
//     }
// }


// ---------------------------------------------------------------------------------------------------------
// find merging point in two linkedlist
// let headA = new Node('ao');
// let na1 = new Node('a1');
// headA.next = na1;
// let na2 = new Node('a2');
// na1.next = na2;
// let na3 = new Node('a3');
// na2.next = na3;

// let headB = new Node('b0');
// let nb1 = new Node('b1');
// headB.next = nb1;;
// nb1.next = na2;

// function findMergeNode(headA, headB) {
//     let currA = headA,
//         currB = headB,
//         listA = [];

//     while (currA) {
//         listA.push(currA);
//         currA = currA.next;
//     }

//     while (currB) {
//         if (listA.indexOf(currB) > -1)
//             break;
//         currB = currB.next;
//     }
//     return currB.data;
// };

// let mergePoint = findMergeNode(headA, headB);
// console.log(mergePoint);


// -----------------------------------------------------------------------------
console.log('running...')

// Sample code to perform I/O:

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function(input) {
//     stdin_input += input; // Reading input from STDIN
// });

// process.stdin.on("end", function() {
//     removeFriend(stdin_input);
// });

// function main(input) {
//     process.stdout.write(input + "\n"); // Writing output to STDOUT
// }

// function removeFriend(input) {
//     let splitedInput = input.trim().split('\n'),
//         testCaseCount = parseInt(splitedInput[0].trim()),
//         testCaes = [];

//     for (let i = 1; i < splitedInput.length; i += 2) {
//         let fd = splitedInput[i].split(' ');
//         let p = splitedInput[i + 1].split(' ');
//         testCaes.push(new TestCase(fd[0], fd[1], p));
//     }

//     for (let i = 0; i < testCaes.length; i++) {
//         for (let j = 0; j < testCaes[i].deleteFriendCount; j++) {
//             let isDeleted = false;
//             for (let k = 0; k < testCaes[i].popularityList.length - 1; k++) {
//                 if (parseInt(testCaes[i].popularityList[k]) < parseInt(testCaes[i].popularityList[k + 1])) {
//                     testCaes[i].popularityList.splice(k, 1);
//                     isDeleted = true;
//                     break;
//                 }
//             }
//             if (!isDeleted)
//                 testCaes[i].popularityList.pop();
//         }
//         main(testCaes[i].popularityList.join(' '))
//     }
// }
// class TestCase {
//     constructor(ExistingFriendCount, deleteFriendCount, popularityList) {
//         this.existingFriendCount = ExistingFriendCount,
//             this.deleteFriendCount = deleteFriendCount,
//             this.popularityList = popularityList
//     }
// }
//Finding the Kth Node from the End in a Linked List in JavaScript


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
          this.head = newNode;
      } else {
          let current = this.head;
          while (current.next) {
              current = current.next;
          }
          current.next = newNode;
      }
  }

  print() {
    let current = this.head;
    const values = [];
    while (current) {
        values.push(current.data);
        current = current.next;
    }
    console.log(values.join(' -> '));
}
  
    findKthFromEnd(k) {
        if (k <= 0 || !this.head) {
            return null; // Invalid input or empty list
        }

        let first = this.head;
        let second = this.head;

        // Move the first pointer K nodes ahead
        for (let i = 0; i < k; i++) {
            if (first.next) {
                first = first.next;
            } else {
                return null; // K is greater than the number of nodes
            }
        }

        // Move both pointers simultaneously until first reaches the end
        while (first.next) {
            first = first.next;
            second = second.next;
        }

        return second.data; // Return the data of the Kth node from the end
    }
}

// Create a linked list and add elements
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);

console.log("Original linked list:");
myList.print();

const k = 2;
const kthNode = myList.findKthFromEnd(k);

if (kthNode !== null) {
    console.log(`\n${k}nd node from the end: ${kthNode}`);
} else {
    console.log(`\nThere is no ${k}nd node from the end.`);
}
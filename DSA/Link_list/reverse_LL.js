class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
} 

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data){
    
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  print() {
    let str = '';
    let current = this.head;
    while(current) {
     str = str + current.data +" --> " ;
     current = current.next;
    }
    console.log(str)
  }

  reverse() {
    let a = null ;
    let b = this.head;

    while(b){
      let c = b.next ;
      b.next = a;
      a = b;
      b = c;
    }
    this.head = a;
  }
}

const ll = new LinkedList();
ll.addFirst(4);
ll.addFirst(7);
ll.addFirst(12);
ll.addFirst(3);
ll.addFirst(55);
ll.addFirst(25);
ll.print();

ll.reverse();
ll.print();
// 25 --> 55 --> 3 --> 12 --> 7 --> 4 --> 
// 4 --> 7 --> 12 --> 3 --> 55 --> 25 --> 
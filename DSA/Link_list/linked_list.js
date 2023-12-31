
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

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let current = this.head;
    let counter = 0;
    while(current.next)
    {
      counter++;
      current = current.next;
    }
    return counter;
  }

  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }

    if (index == 0) {
      addFirst(data);
      return;
    }

    const newNode = new Node(data);

    let current = this.head ;
    for (i = 0 ; i < index - 1 ; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  print() {
    let current = this.head;
    let str = "";
    while(current){
      str = str + current.data + " -- "
      current = current.next ;
    }
    console.log(str);    
  } 
}

const LL = new LinkedList() ;
LL.addFirst(55);
LL.addFirst(88);
LL.addFirst(5);
LL.addFirst(75);
LL.addLast(100);

LL.print()

LL.addAt(5 , 29);



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
ll.addFirst(25);
ll.addFirst(55);
ll.addFirst(3);
ll.addFirst(3);
ll.addFirst(55);
ll.addFirst(25);
ll.print();
console.log(isPalindrome(ll.head))

function isPalindrome(head) {

  let mid = getmidnode(head); 
 
  let newhead = reverse(mid.next);

  while(newhead) {
    
      if (newhead.data != head.data) {
          return false;
      }
      newhead = newhead.next;
      head = head.next;
  }
  return true;
};

function getmidnode(head) {
   let s = head ;
   let f = head ;

   while( f.next && f.next.next){
       s = s.next;
       f = f.next.next;
   }
   return s;
}

function reverse(midhead) {
   let a = null;
   let b = midhead;

   while(b)
   {
       let c = b.next;
       b.next = a ;
       a = b;
       b =c;
   }
   return a;
}


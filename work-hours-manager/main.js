
class LinkedList {
  constructor()
      {
          this.head = null;
          this.size = 0;
      }
  add(element)
      {
          let node = new Node(element);
          let current;

          if(this.head == null)
              {
                  this.head = node;
              }
          else
              {
                  
                  current = this.head 
                  while(current.next)
                      {
                          current = current.next;
                      }
                  current.next = node;
              }
          this.size++;
      }
  getFirst()
      {
          return this.head;
      }
  getLast()
      {
          let lastNode = this.head;
          if(lastNode)
              {
                  while (lastNode.next) 
                      {
                          lastNode = lastNode.next;
                      }
              }
          return lastNode;
      }
  insertAt(element, index)
      {
          if(element < 0 || index > this.size)
              {
                  return console.log("Insert a valid index");
              }
          else
              {
                  let node = new Node(element);
                  let curr, prev;

                  curr = this.head;
                  
                  if(index == 0)
                      {
                          node.next = this.head;
                          this.head = node;
                      }
                  else
                      {
                          curr = this.head;
                          let it = 0;

                          while (it < index) 
                              {
                                  it++;
                                  prev = curr;
                                  curr = curr.next;
                              }
                          node.next = curr;
                          prev.next = node;
                      }
                  this.size++;
              }
      }
  removefrom(index)
      {
          if(index < 0 || index >= this.size)
              {
                  return console.log("please enter a valid index");
              }
          else
              {
                  let current, prev, it = 0;
                  current = this.head;
                  prev = current;

                  if(index === 0)
                      {
                          this.head = current.next;
                      }
                  else
                      {
                          while(it < index)
                              {
                                  it++;
                                  prev = current;
                                  current = current.next;
                              }
                          prev.next = current.next;
                      }
                  this.size--;

                  return current.element;
              }
      }
  removeElement(element)
      {
          let  current = this.head;
          let prev = null;

          while (current != null) 
              {
                  if(current.element === element)
                      {
                          if(prev == null)
                              {
                                  this.head = current.next;
                              }
                          else
                              {
                                  prev.next = current.next;
                              }
                          this.size--;
                          return current.element;
                      }
                  prev = current;
                  current = current.next;
              }
          return -1;
      }
  indexOf(element)
      {
          let count = 0;
          let current = this.head;

          while (current != null) 
              {
                  if(current.element === element)
                      {
                          return count;
                      }
                  count++;
                  current = current.next;
              }
          
          return -1;
      }
  printList()
      {
          let current = this.head;
          let str = "";
          
          while(current)
              {
                  str += current.element + " ";
                  current = current.next;
              }
          console.log(str);
      }
}

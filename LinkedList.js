class Node{
  constructor(value){
    this.val = value;
    this.nextNode = null;
  }
}

class LinkedList{
    constructor(){
      this.head = null;
      this.tail = null;
    }

    append(value){
      const appendNode = new Node(value);
      if(this.head === null){
        this.head = appendNode;
        this.tail = this.head;
        return this.head;
      }
      let currentNode = this.head;
      while(currentNode.nextNode !==null){
        currentNode = currentNode.nextNode
      }
      currentNode.nextNode = appendNode;
      this.tail = appendNode;
      return this.head;
    }

    prepend(value){
      const prependNode = new Node(value);
      if(this.head === null){
        this.head = prependNode;
        this.tail = this.head;
        return this.head;
      }
      const currentNode = this.head;
      prependNode.nextNode = currentNode
      this.head = prependNode;

      return this.head;
    }

    size(){
      let count = 0;
      let currentNode = this.head;
      while(currentNode!=null){
        count++;
        currentNode = currentNode.nextNode;
      }

      return count;
    }
    // head(){
    //   return this.head;
    // }

    // tail(){
    //   return this.tail;
    // }

    at(index){
      let count=0;
      let currentNode = this.head;
      while(currentNode!=null && count!== index){
        count++;
        currentNode = currentNode.nextNode;
      }
      return currentNode
    }

    pop(){
      if(this.head === null) return null;

      let currentNode = this.head;
      while(currentNode.nextNode !== this.tail){
        currentNode = currentNode.nextNode;
      }
      const poppedNode = this.tail;
      currentNode.nextNode = null;
      this.tail = currentNode

      return poppedNode;
      
    }

    contains(value){
      if(this.head === null) return false;

      let currentNode = this.head;
      while(currentNode !== null){
        if(currentNode.value === value) return true

        currentNode = currentNode.nextNode
      }

      return false
    }

    find(value){
      let count=0;
      let currentNode = this.head;
      while(currentNode!=null){
        if(currentNode.value === value) return count;
        count++;
        currentNode = currentNode.nextNode;
      }
      return null
    }

    toString(){
      console.log("( value ) -> ( value ) -> ( value ) -> null");
      let outputString = ''
      let currentNode = this.head;
      while(currentNode.nextNode!== null){
        outputString+=`( ${curretNode.value} ) -> `
      }
      outputString+='null';

      return outputString;
    }
    
}

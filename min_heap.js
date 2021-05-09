// Implementing MinHeap
/*
A Heap is a special Tree-based data structure in which the tree is a complete binary tree.
Since a heap is a complete binary tree, a heap with N nodes has log N height.
It is useful to remove the highest or lowest priority element. It is typically represented as an array.
There are two types of Heaps in the data structure.


MIN HEAP -
In a Min-Heap the key present at the root node must be less than or equal among the keys
present at all of its children. The same property must be recursively true for all sub-trees in that
Binary Tree. In a Min-Heap the minimum key element present at the root.

MAX HEAP -
In a Max-Heap the key present at the root node must be greater than or equal among the keys
present at all of its children. The same property must be recursively true for all sub-trees in that
Binary Tree. In a Max-Heap the maximum key element present at the root.

Note: Minor changes to the following code will result in a Max Heap
*/

class minHeap {
    constructor () {
      // Initializing the array heap and adding a dummy element at index 0
      this.heap = [null];
    }
    
    getArr() {
      return this.heap;
    }
    
    getMax() {
      // Accessing the min element at index 1 in the heap array
      return this.heap[1];
    }
    
    insert(node) {
      this.heap.push(node);
      //Finding the correct position for the newly added node
      if (this.heap.length > 1) {
        let current = this.heap.length - 1;
        //Traversing up the parent node until the current node (current) is greater than the parent node (current/2)
        while (current > 1 && this.heap[Math.floor(current/2)] < this.heap[current]) {
          //Swapping the two nodes
          [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]];
          current = Math.floor(current/2);
        }
      }
    }
    
    remove() {
        /* Smallest element is at the index 1 in the heap array */
        let largest = this.heap[1]
        
        /* When there are more than two elements in the array, we put the right most element at the first position
            and start comparing nodes with the child nodes
        */
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length-1]
            this.heap.splice(this.heap.length - 1)
            if (this.heap.length === 3) {
                if (this.heap[1] < this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return largest;
            }
            let current = 1
            let leftChildIndex = current * 2
            let rightChildIndex = current * 2 + 1
            while (this.heap[leftChildIndex] &&
                    this.heap[rightChildIndex] &&
                    (this.heap[current] < this.heap[leftChildIndex] ||
                        this.heap[current] < this.heap[rightChildIndex])) {
                if (this.heap[leftChildIndex] > this.heap[rightChildIndex]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
                    current = leftChildIndex
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
                    current = rightChildIndex
                }
    
                leftChildIndex = current * 2
                rightChildIndex = current * 2 + 1
            }
            if (this.heap[rightChildIndex] === undefined && this.heap[leftChildIndex] > this.heap[current]) {
                [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
            }
        }
        /* If there are only two elements in the array,
        we directly splice out the first element */
        else if (this.heap.length === 2) {
            this.heap.splice(1, 1);
        } else {
            return null;
        }
        return largest;
    }
}
  
let foo = new minHeap;
foo.insert(10);
foo.insert(23);
foo.insert(36);
foo.insert(25);
foo.insert(70);
console.log(foo.remove());
console.log(foo.getArr());
function fib (n) { let a = [1, 1]; for (let i = 2; i < n; i++) { a.push(a[i - 1] + a[i - 2]) } console.log(a);  return a[n -2] + a[n -3];  }

function fibsIte (n) {
    let seq = [1, 1];

    if (n <= 2) return seq;
    
    for (let i = 2; seq.length <= n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }

    return seq;
}

const fibsRec = n => {
    if (n <= 1) { return 0 }
    if (n === 2) { return 1 }

    return fibsRec(n - 1) + fibsRec(n - 2);
};

function collatz (n, y) {
    if (!y) y = 0;
    
    if (n === 1) { return y };

    if (n % 2 === 0) { 
        return collatz(n/2, y++);
    };

    if (n % 2 !== 0) {
        return collatz(3*n+1, y++) 
    };
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printListRev = list => {
    values = [];
    
    while (list) {
        values.push(list.value);

        list = list.next;
    };

    console.log(values.reverse());
}

printListRevRec = list => {
    if (list.next) printListRevRec(list.next);
    console.log(list.value);
};

printList = (list) => {
  while (list) {
      console.log(list.value);
      list = list.next;
  }  
};

printListRec = (list) => {
    if (list.next) {
        console.log(list.value);
        printListRec(list.next);
    }
};

const mergeSort = nums => {
    if (nums.length === 1) return nums;
    
    let first = nums.slice(0, Math.floor(nums.length/2));
    if (first.length > 2) first = mergeSort(first);
    else if (first[0] > first[1]) first = [first[1], first[0]];
    
    let second = nums.slice(Math.floor(nums.length/2), nums.length);
    if (second.length > 2) second = mergeSort(second);
    else if (second[0] > second[1]) second = [second[1], second[0]];

    let merged = [];

    for (let k = 0; k < nums.length; k++) {
        if (first[0] < second[0]) {
            merged.push(first[0]);
            first.shift();
        } else if (second[0] < first[0]) {
            merged.push(second[0]);
            second.shift();
        } else if (first[0] === second[0]) {
            merged.push(first[0]);
            merged.push(second[0]);
            first.shift();
            second.shift();
        } else if (first.length === 0) {
            merged.push(...second);
            break;
        } else if (second.length === 0) {
            merged.push(...first);
            break;
        }
    }

    return merged;
};

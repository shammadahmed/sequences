function fib (n) { let a = [1, 1]; for (let i = 2; i < n; i++) { a.push(a[i - 1] + a[i - 2]) } console.log(a);  return a[n -2] + a[n -3];  }

function fibsIte (n) {
    let seq = [1, 1];

    if (n <= 2) return seq;
    
    for (let i = 2; seq.length <= n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }

    return seq;
}

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

console.log(`----------Fibonacci Series-----------`);
console.log(`Fibonacci Series up to 7...`);

let n = 7,n1= 0, n2 = 1, nextTerms;
for (let index = 0; index < n; index++) {
    console.log(n1);
    nextTerms = n1 + n2;
    n1= n2;
    n2= nextTerms;
}

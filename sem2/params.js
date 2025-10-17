// exemplu
const checkPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!(n % i)) {
            return false;
        }
    }
    return true;
}

if (process.argv.length < 3) {
    console.log("not enough params");
} else {
    console.log(checkPrime(parseInt(process.argv[2])));
}

// exercitiu
const fibonacci = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        const sum = a + b;
        a = b;
        b = sum;
    }
    return b;
}

console.log(fibonacci(parseInt(process.argv[2])));
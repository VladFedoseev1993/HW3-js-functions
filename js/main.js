console.log('------------- 4')

function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
console.log(result);
// Сложение

function sub(c, d) {
    return c - d;
}

let result1 = sub(10, 5);
console.log(result1);
// Вычитание


function multiplay(e, f) {
    return e * f;
}

let result3 = multiplay(7, 7);
console.log(result3);
// Умножение

function div(r, t) {
    return r / t;
}

let result4 = div(81, 9);
console.log(result4);
// Деление

console.log('------------- 5')

function num(n) {
    let string = ''
    for (let i = 1; i <= n; i++) {
        string = string + i;
    }
    return string;
}
console.log(num(6));


console.log('------------- 6')

function num1(y) {
    let string1 = ''
    for (let i = y; i >= 1; i--) {
        string1 = string1 + i;
    }
    return string1;
}
console.log(num1(3));
console.log('------------- 7')

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}
console.log(pow(2, 6));


console.log('------------- 8')

function isBigger(a, b) {
    if (a > b) {
        return true;
    } else {
        return false;
    }
}
console.log(isBigger(10, 1));


console.log('------------- 9')

function isBigger1(n, m) {
    if (n < m) {
        return true;
    } else {
        return false;
    }
}
console.log(isBigger1(1, 10));
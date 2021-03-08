module.exports = function reverse (n) {
    let str = String(n).split('')
    let number
    if (str.includes('-')) {
        number = str.slice(1).reverse().join('')
    }
    else {
        number = +str.reverse().join('')
    }
    return number
}

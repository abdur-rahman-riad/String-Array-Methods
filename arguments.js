function addNumbers() {
    let sum = 0;
    for (const num of arguments) {
        sum = sum + num;
    }
    return sum;
}
console.log(addNumbers(5, 15, 30));
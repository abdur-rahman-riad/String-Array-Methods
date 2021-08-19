const numbers = [2, 10, 7, 11, 3, 12, 5, 12, 1, 12, 4, 15, 6, 9, 8];
const sorted = numbers.sort(function (a, b) {
    return a - b;
});
// const reversedNumbers = numbers.reverse();
console.log(sorted);
// console.log(reversedNumbers);

const friends = ['riad', 'mohammad', 'badshah', 'abdur', 'rahman', 'dair'];
const sortedFriends = friends.sort();
const reversedFriends = friends.reverse();
// console.log(sortedFriends);
console.log(reversedFriends);
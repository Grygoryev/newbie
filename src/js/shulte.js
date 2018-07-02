var numbers = [],
    board = $('.shulte-table'),
    cell = $('.shulte-table__cell');

for (var i = 1; i <= 25; i++) {
  numbers.push(i);
}

function shuffleNums(arr) {
  for (var i = 0; i < 25; i++) {
    var pos = randomNum(24); // 4
    var pos2 = randomNum(24); //6
    var x = arr[pos]; // x = arr[4]
    arr[pos] = arr[pos2]; // arr[4] = arr[6]
    arr[pos2] = x; // arr[6] = x

  }
  return arr;
}

function addNewNums(arr) {
  shuffleNums(arr);
  for (var i = 0; i < arr.length; i++) {
    board.find(cell).remove();
  }
}

console.log(numbers);

var x = numbers[5];

numbers[5] = numbers[6];

numbers[6] = x;

console.log(numbers);
console.log(shuffleNums(numbers));


console.log(cell);

function addNumbers(arr) {
  for (var i = 0; i < numbers.length; i ++) {
    board.append(cell.clone().html(arr[i]));
  }
  cell[0].remove();
}


function randomNum(max) {
  return Math.round(max - ((max * Math.random())));
}

var randomnums = [];

for (var i = 1; i <= 25; i++) {
  randomnums.push(randomNum(25));
}

function getRandomNumbers() {
  var nums = [];

  for (var i = 0; i < 25; i++) {
    var newNum = randomNum(25);
    nums.push(newNum);
  }

  console.log(nums);
}


// console.log(randomnums);
// console.log(randomNum());
// console.log(randomNum());
// console.log(randomNum());
// console.log(randomNum());
console.log(getRandomNumbers());
console.log("xxxxxx");
console.log(randomNum(35));
console.log(cell[0]);
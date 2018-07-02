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

function addNumbers(arr) {

  var newCell = document.createElement('div');
  newCell.className = 'shulte-table__cell';

  for (var i = 0; i < numbers.length; i ++) {
    board.append(cell.clone().html(arr[i]));
  }
  cell[0].remove();
}

function randomNum(max) {
  return Math.round(max - ((max * Math.random())));
}

function refreshNumbers() {
  location.reload();
}

console.log(numbers);
console.log(shuffleNums(numbers));

addNumbers(shuffleNums(numbers));
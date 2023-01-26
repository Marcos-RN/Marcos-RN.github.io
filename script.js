var cells = document.getElementsByClassName("sudoku-cell");
var solution = [[], [], [], [], [], [], [], [], []]; // 2D array to store the solution
var userInput = [[], [], [], [], [], [], [], [], []]; // 2D array to store the user's input

for (var i = 0; i < cells.length; i++) {
  var row = Math.floor(i / 9);
  var col = i % 9;
  userInput[row][col] = cells[i]; }

  // cells[i].addEventListener("input", function(e) {
    // Validate input here, for example, make sure the input is a number between 1 and 9
    // and that it doesn't conflict


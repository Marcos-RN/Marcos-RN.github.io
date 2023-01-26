var cells = document.getElementsByClassName("sudoku-cell");
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("input", function(e) {
    // Validate input here, for example, make sure the input is a number
    // between 1 and 9 and that it doesn't conflict with any other numbers
    // in the same row, column, or 3x3 block
  });
}

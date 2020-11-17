/**Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. */
let size = 8;
let board = "";
let boardRow = 1;
let boardColumn = 1;
while (boardColumn <= size) {
  if (boardRow % 2 === 0) {
      board = board + "# ".repeat(size/2) + "\n";
      boardRow++;
  } else {
      board = board + " #".repeat(size/2) + "\n";
      boardRow++;
  }
  boardColumn++;
}
console.log(board);


// Other Solution
// let size = 8;
// let board = "";
// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }
// console.log(board);
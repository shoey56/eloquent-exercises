/** Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

let row = 0;
let column = "";
while (row < 7){
  column = column + "#";
  console.log(column);
  row++;
}

//Other solution
// for (let line = "#"; line.length < 8; line += "#")
//   console.log(line);
/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


// ----------------------------------------------------------------------OLD CODE BELOW
// window.findNRooksSolution = function(n, board) {
//   var result = [];
//   var solution = [];
//   var board = board || new Board({n: n});

//   var toggleCount = 0;
//   var _helper = function(board, n){
//     for(var j = 0; j < n; j++){ // j is row index
//       for(var m = 0; m < n; m ++){ // m is column index
//         if (board.get(j)[m] === 0) { //we are checking if there is a piece at (j,m) - if not, then add piece
//           board.togglePiece(j, m); // we are adding a toggle piece 
//           if(!board.hasAnyRooksConflicts()) { // if board has no conflicts
//             toggleCount++;      //increase toggleCount by one
//             if(toggleCount === n){          //and checking to see if there is a conflict. if there is none...
//               var allRows = board.rows();
//               for(var i = 0; i < n; i++) {
//                 solution.push(allRows[i].slice());
//               }
//               return;
//             }

//             _helper(board, n);
//           }
//           board.togglePiece(j,m); //if there is a conflict, remove toggle
//         }
//       }
//     }
//   };

//   _helper(board, n);

//   console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
//   // console.log(solution);
//   return solution;

// };



// --------------------------------------------------------------------------


window.findNRooksSolution = function(n, board) {
  var result = [];
  var solution = [];

  var _helper = function(board, depth){
    //depth at the very beginning is zero
    //base case
    //if(depth === n) { //if reaches bottom of matrix, then 
        //if solution works (i.e. use helpers to validate), then copy solution and return out of function and go back to previous depth
        //if not, then return out of function
    //}
    //loop through each row ---> specifically use depth variable to represent row index
    //for (var i = 0; i < n; i++) { //looping through each element only in that row
        //toggle on ith element in array (row)
        //recurse on updated board => _helper(board, depth+1);
        //toggle off ith element
    //} 

  //_helper(board, 0) depth is zero when we first invoke

};






// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {


  // var solution = undefined; //fixme
  var solutionCount = 0;

  var arr = [];

  for(var i = 0; i < n; i++){
     arr[i] = new Board({n: n}); // arr[i] is the board itself which is a n x n matrix
     arr[i].togglePiece(0, i); // putting a toggle at a different column on top row of each board.
     arr[i].findNRooksSolution(n, arr[i]);
  }
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


// var board = new Board({n: 3});
// _helper()
this.findNRooksSolution(3);

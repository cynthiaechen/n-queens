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


window.findNRooksSolution = function(n) {
  var solution = [];
  var board = board || new Board({n: n});
  var allRows = board.rows();

  var copy = function(matrix) {
    var results = [];
    for (var i = 0; i < matrix.length; i++) {
      results.push(matrix[i].slice());
    }
    return results;

  };

  var _helper = function(board, depth){
    
    //BASE CASE
    if(depth === n) {
      if(!board.hasAnyRooksConflicts()) { //if there are no conflicts
        solution.push(copy(allRows));
      }
      return;
    }

    //in this case for now, depth = 0

    for(var i = 0; i < allRows[depth].length; i++){
      board.togglePiece(depth, i);
      if(!board.hasAnyRooksConflicts()){ //board has no conflict
        _helper(board, depth + 1);
      } 
      board.togglePiece(depth, i);
    }

  };

  _helper(board, 0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution[0]));
  console.log(solution);
  return solution[0];

};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = [];
  var board = board || new Board({n: n});
  var allRows = board.rows();

  var copy = function(matrix) {
    var results = [];
    for (var i = 0; i < matrix.length; i++) {
      results.push(matrix[i].slice());
    }
    return results;

  };

  var _helper = function(board, depth){
    
    //BASE CASE
    if(depth === n) {
      if(!board.hasAnyRooksConflicts()) { //if there are no conflicts
        solution.push(copy(allRows));
      }
      return;
    }

    //in this case for now, depth = 0

    for(var i = 0; i < allRows[depth].length; i++){
      board.togglePiece(depth, i);
      if(!board.hasAnyRooksConflicts()){ //board has no conflict
        _helper(board, depth + 1);
      } 
      board.togglePiece(depth, i);
    }

  };

  _helper(board, 0);

  var solutionCount = solution.length;

  
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

// Tic Tac Toe
class Agent {
    constructor() {

    }

    minimax(board, depth, isMaximizing) {

        const gameOver = board.gameOver();
        if (gameOver !== 0) {
            if (gameOver === 1) return 10 - depth; // X wins
            if (gameOver === 2) return depth - 10; // O wins
            return 0; // Draw
        }

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < board.cells.length; i++) {
                if (board.cellFree(i + 1)) {
                    const newBoard = board.clone();
                    newBoard.move(i + 1);
                    const score = this.minimax(newBoard, depth + 1, false);
                    bestScore = Math.max(bestScore, score);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < board.cells.length; i++) {
                if (board.cellFree(i + 1)) {
                    const newBoard = board.clone();
                    newBoard.move(i + 1);
                    const score = this.minimax(newBoard, depth + 1, true);
                    bestScore = Math.min(bestScore, score);
                }
            }
            return bestScore;
        }



        // // Base cases - check if the game is over or a draw
        // var gameOver = board.gameOver();
        // if (gameOver === 1) {
        //     return 1; // X wins
        // } else if (gameOver === 2) {
        //     return -1; // O wins
        // } else if (gameOver === 3) {
        //     return 0; // the game is a draw
        // }

        // // Recursive case - evaluate all possible moves and choose the best score
        // if (isMaximizing) {
        //     var bestScore = -Infinity;
        //     for (var i = 0; i < board.cells.length; i++) {
        //         var cell = i + 1;
        //         if (board.cellFree(cell)) {
        //             var newBoard = board.clone();
        //             newBoard.move(cell);
        //             var score = this.minimax(newBoard, false);
        //             bestScore = Math.max(bestScore, score);
        //         }
        //     }
        //     return bestScore;
        // } else {
        //     var bestScore = Infinity;
        //     for (var i = 0; i < board.cells.length; i++) {
        //         var cell = i + 1;
        //         if (board.cellFree(cell)) {
        //             var newBoard = board.clone();
        //             newBoard.move(cell);
        //             var score = this.minimax(newBoard, true);
        //             bestScore = Math.min(bestScore, score);
        //         }
        //     }
        //     return bestScore;
        // }
    }

    selectMove(board) {

        let bestMove = null;
        let bestScore = board.playerOne ? -Infinity : Infinity;

        for (let i = 0; i < board.cells.length; i++) {
            if (board.cellFree(i + 1)) {
                const newBoard = board.clone();
                newBoard.move(i + 1);
                const score = this.minimax(newBoard, 0, !board.playerOne);

                if (board.playerOne) {
                    if (score > bestScore) {
                        bestScore = score;
                        bestMove = i + 1;
                    }
                } else {
                    if (score < bestScore) {
                        bestScore = score;
                        bestMove = i + 1;
                    }
                }
            }
        }

        return bestMove;






    //     // Define the initial best score and move
    //     var maxScore = -Infinity;
    //     var maxMove = null;

    //     var minScore = Infinity;
    //     var minMove = null;

    //     // Loop through each cell to evaluate the best move
    //     for (var i = 0; i < board.cells.length; i++) {
    //         var cell = i + 1;
    //         if (board.cellFree(cell)) {
    //             // Make a move on the current cell
    //             var newBoard = board.clone();
    //             newBoard.move(cell);

    //             // Calculate the score for the current move
    //             var score = this.minimax(newBoard, !board.playerOne);

    //             // Update the best move if the current move has a higher score
    //             if (score > maxScore) {
    //                 maxScore = score;
    //                 maxMove = cell;
    //             }
    //             if (score < minScore) {
    //                 minScore = score;
    //                 minMove = cell;
    //             }
    //         }
    //     }

    //     return board.playerOne ? maxMove : minMove;
    }

}
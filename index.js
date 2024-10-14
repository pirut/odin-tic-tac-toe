const game = (function () {
    let board = [
        [3, 4, 5],
        [6, 7, 8],
        [9, 10, 11],
    ];

    const makeMove = (type, row, col) => {
        if (row > 2 || col > 2 || row < 0 || col < 0) {
            return false;
        }
        if (type.toUpperCase() === "X" || type === 1) {
            board[row][col] = 1;
            console.log(board);
            return true;
        } else if (type.toUpperCase() === "O" || type === 2) {
            board[row][col] = 2;
            return true;
        } else {
            return false;
        }
    };

    const checkWin = () => {
        let same = true;
        let watch;
        //row check
        for (let i = 0; i < 3; i++) {
            same = true;
            let watch = board[i][0];
            for (let j = 0; j < 3; j++) {
                if (board[i][j] !== watch) {
                    same = false;
                    break;
                } else {
                    continue;
                }
            }
            if (same === true) {
                console.log("win");
                return true;
            }
        }
        //col check
        for (let i = 0; i < 3; i++) {
            same = true;
            let watch = board[0][i];
            for (let j = 0; j < 3; j++) {
                if (board[j][i] !== watch) {
                    same = false;
                    break;
                } else {
                    continue;
                }
            }
            if (same === true) {
                console.log("win");
                return true;
            }
        }
        //diag left-right check
        for (let i = 0; i < 3; i++) {
            same = true;
            let watch = board[0][0];
            if (board[i][i] !== watch) {
                same = false;
                break;
            } else {
                continue;
            }
        }
        if (same === true) {
            console.log("win");
            return true;
        }
        //diag right-left check
        let j = 2;
        for (let i = 0; i < 3; i++) {
            same = true;
            let watch = board[0][2];
            if (board[i][j] !== watch) {
                same = false;
                break;
            } else {
                j--;
                continue;
            }
        }
        if (same === true) {
            console.log("win");
            return true;
        }

        console.log("no winner");
    };
    return { makeMove, checkWin };
})();

game.makeMove("x", 0, 2);
game.makeMove("x", 1, 1);
game.makeMove("x", 2, 0);
game.checkWin();

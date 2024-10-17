//Game Logic

const game = (function () {
    let board = [
        [3, 4, 5],
        [6, 7, 8],
        [9, 10, 11],
    ];

    const makeMove = (type, loc) => {
        if (loc[0] > 2 || loc[1] > 2 || loc[0] < 0 || loc[1] < 0) {
            return false;
        }
        if (type.toUpperCase() === "X" || type === 1) {
            board[loc[0]][loc[1]] = 1;
            // console.log(board);
            return true;
        } else if (type.toUpperCase() === "O" || type === 2) {
            board[loc[0]][loc[1]] = 2;
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

//DOM Manipulation

const displayController = (function () {
    const locations = [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
    ];

    let currentMove = true;
    let index = 0;

    const listenForClick = (boxes) => {
        boxes.forEach((element) => {
            element.value = index;
            index++;
            element.addEventListener("click", (e) => {
                if (currentMove) {
                    element.textContent = "X";
                    game.makeMove("X", locations[element.value]);
                    currentMove = !currentMove;
                } else {
                    element.textContent = "O";
                    game.makeMove("O", locations[element.value]);
                    currentMove = !currentMove;
                }
            });
        });
    };

    return { listenForClick };
})();

const boxes = document.querySelectorAll(".game-box");

displayController.listenForClick(boxes);

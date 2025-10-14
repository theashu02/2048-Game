
export const isGameOver = (board: number[][]): boolean => {
    // empty cells
    if (board.flat().includes(0)) return false;

    // possible horizontal merges
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board.length - 1; c++) {
            if (board[r][c] === board[r][c + 1]) return false;
        }
    }

    // vertical merges
    for (let c = 0; c < board.length; c++) {
        for (let r = 0; r < board.length - 1; r++) {
            if (board[r][c] === board[r + 1][c]) return false;
        }
    }

    return true;
};
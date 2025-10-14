export const rotateLeft = (board: number[][]): number[][] => {
    const size = board.length;
    const newBoard = Array(size).fill(null).map(() => Array(size).fill(0));
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            newBoard[r][c] = board[c][size - 1 - r];
        }
    }
    return newBoard;
};

export const rotateRight = (board: number[][]): number[][] => {
    const size = board.length;
    const newBoard = Array(size).fill(null).map(() => Array(size).fill(0));
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            newBoard[r][c] = board[size - 1 - c][r];
        }
    }
    return newBoard;
};
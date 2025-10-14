export const addRandomTile = (board: number[][]): number[][] => {
    const newBoard = board.map(row => [...row]);
    console.log("new board pass ---> ", newBoard)
    const emptyTiles: { r: number; c: number }[] = [];
    console.log("emptyTiles pass ----> ", emptyTiles)
    newBoard.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell === 0) {
          emptyTiles.push({ r, c });
        }
      });
    });
  
    if (emptyTiles.length === 0) return newBoard;
  
    const { r, c } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    newBoard[r][c] = Math.random() < 0.9 ? 2 : 4;
    return newBoard;
}

export const initializeBoard = (size: number = 4): number[][] => {
    let board = Array(size).fill(null).map(() => Array(size).fill(0));
    console.log("Random board ---> ", board);
    board = addRandomTile(board);
    board = addRandomTile(board);
    return board;
};
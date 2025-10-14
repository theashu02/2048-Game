import { rotateLeft, rotateRight } from "./rotateLogic";
import { slideAndMergeRow } from "./slideMerge";


export const move = (board: number[][], direction: 'up' | 'down' | 'left' | 'right'): { newBoard: number[][]; score: number } => {
    let boardToProcess = board.map(row => [...row]);
    let totalScore = 0;

    if (direction === 'right') {
        boardToProcess = rotateRight(rotateRight(boardToProcess));
    } else if (direction === 'up') {
        boardToProcess = rotateLeft(boardToProcess);
    } else if (direction === 'down') {
        boardToProcess = rotateRight(boardToProcess);
    }

    const processedRows = boardToProcess.map(row => {
        const { newRow, score } = slideAndMergeRow(row);
        totalScore += score;
        return newRow;
    });

    let finalBoard = processedRows;

    // Rotate back to original orientation
    if (direction === 'right') {
        finalBoard = rotateRight(rotateRight(finalBoard));
    } else if (direction === 'up') {
        finalBoard = rotateRight(finalBoard);
    } else if (direction === 'down') {
        finalBoard = rotateLeft(finalBoard);
    }

    return { newBoard: finalBoard, score: totalScore };
};
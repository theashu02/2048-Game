// src/components/Board.tsx
import React from 'react';
import Tile from './common/Tile';

interface BoardProps {
  board: number[][];
}

const Board: React.FC<BoardProps> = ({ board }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4 bg-background p-4 rounded-md">
      {board.flat().map((value, index) => (
        <Tile key={index} value={value} />
      ))}
    </div>
  );
};

export default Board;
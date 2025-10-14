import React from 'react';
import Tile from './common/Tile';

interface BoardProps {
  board: number[][];
}

const Board: React.FC<BoardProps> = ({ board }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4 p-4 rounded-md bg-border">
      {board.flat().map((value, index) => (
        <Tile key={index} value={value} />
      ))}
    </div>
  );
};

export default Board;
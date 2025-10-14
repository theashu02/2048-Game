'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Board from './components/common/Board';
import { addRandomTile, initializeBoard } from './components/gamelogic/boardInitialize';
import { move } from './components/gamelogic/move';
import { isGameOver } from './components/gamelogic/isGameOver';
import { Navbar } from './components/common/navbar';
import { Button } from '@/components/ui/button';

function emptyBoard(size: number = 4) {
  return Array.from({ length: size }, () => Array(size).fill(0));
}

const App: React.FC = () => {
  const [board, setBoard] = useState<number[][]>(() => emptyBoard(4));
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [win, setWin] = useState<boolean>(false);

  useEffect(() => {
    setBoard(initializeBoard(4));
  }, []);

  const handleRestart = () => {
    setBoard(initializeBoard(4));
    setScore(0);
    setGameOver(false);
    setWin(false);
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (gameOver) return;

    let direction: 'up' | 'down' | 'left' | 'right' | null = null;
    switch (event.key) {
      case 'ArrowUp': direction = 'up'; break;
      case 'ArrowDown': direction = 'down'; break;
      case 'ArrowLeft': direction = 'left'; break;
      case 'ArrowRight': direction = 'right'; break;
    }

    if (direction) {
      event.preventDefault();
      const { newBoard, score: moveScore } = move(board, direction);
      
      if (JSON.stringify(newBoard) !== JSON.stringify(board)) {
        const boardWithNewTile = addRandomTile(newBoard);
        setBoard(boardWithNewTile);
        setScore(prevScore => prevScore + moveScore);

        if (boardWithNewTile.flat().includes(2048)) {
          setWin(true);
          setGameOver(true);
        } else if (isGameOver(boardWithNewTile)) {
          setGameOver(true);
        }
      }
    }
  }, [board, gameOver]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center p-4">
      <Navbar />
      <div className="w-full max-w-md">
        <header className="flex justify-around items-center mb-4">
          <div className="flex items-center gap-4">
            <div className="text-white p-2 px-4 rounded-md text-lg font-bold text-center">
              SCORE: {score}
            </div>
            <Button 
              onClick={handleRestart}
              variant="secondary"
              className="bg-[#8f7a66] cursor-pointer text-white py-2 px-4 rounded-md font-semibold hover:bg-[#9f8b77] transition-colors"
            >
              New Game
            </Button>
          </div>
        </header>

        <main className="relative">
          {(gameOver) && (
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-white/70 z-10 rounded-md">
              <p className="text-6xl font-bold text-gray-700">{win ? 'You Win!' : 'Game Over!'}</p>
              <Button onClick={handleRestart} className="cursor-pointer mt-4 bg-[#8f7a66] text-white py-2 px-4 rounded-md font-semibold">Try Again</Button>
            </div>
          )}
          <Board board={board} />
        </main>
      </div>
    </div>
  );
};

export default App;
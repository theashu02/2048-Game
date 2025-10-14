'use client'

import Board from "./components/Board";
import { useState, useEffect } from "react";
import { initializeBoard } from "./components/gamelogic/boardInitialize";
import { Navbar } from "./components/common/navbar";

function emptyBoard(size: number = 4): number[][] {
  return Array.from({ length: size }, () => Array(size).fill(0));
}

export default function Home() {

  const [board, setBoard] = useState(() => emptyBoard(4));

  useEffect(() => {
    setBoard(initializeBoard(4));
  }, []);


  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Navbar />
      <Board board={board} />
    </div>
  );
}

import React from 'react';

interface TileProps {
  value: number;
}

const TILE_STYLES: { [key: number]: string } = {
  0: 'bg-[#cdc1b4]',
  2: 'bg-[#eee4da] text-[#776e65]',
  4: 'bg-[#ede0c8] text-[#776e65]',
  8: 'bg-[#f2b179] text-white',
  16: 'bg-[#f59563] text-white',
  32: 'bg-[#f67c5f] text-white',
  64: 'bg-[#f65e3b] text-white',
  128: 'bg-[#edcf72] text-white',
  256: 'bg-[#edcc61] text-white',
  512: 'bg-[#edc850] text-white',
  1024: 'bg-[#edc53f] text-white',
  2048: 'bg-[#edc22e] text-white',
};

const getFontSize = (value: number) => {
  if (value > 999) return 'text-xl sm:text-2xl md:text-3xl';
  if (value > 99) return 'text-2xl sm:text-3xl md:text-4xl';
  return 'text-3xl sm:text-4xl md:text-5xl';
};

const Tile: React.FC<TileProps> = ({ value }) => {
  const baseClasses = 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center font-bold rounded-sm transition-all duration-100';
  const styleClasses = TILE_STYLES[value] || TILE_STYLES[2048];
  const fontSizeClass = getFontSize(value);

  return (
    <div className={`${baseClasses} ${styleClasses} ${fontSizeClass}`}>
      {value > 0 ? value : ''}
    </div>
  );
};

export default Tile;

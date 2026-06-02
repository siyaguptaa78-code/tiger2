'use client';

import React from 'react';
import Image from 'next/image';

interface OnlineGamesProps {
  onSelectGame: () => void;
}

export default function OnlineGames({ onSelectGame }: OnlineGamesProps) {
  // Top Grid Games
  const topGames = [
    { name: 'Cricket', src: '/assets/cricket-ChpXgv2G.webp' },
    { name: 'Football', src: '/assets/football-CWbWzNb9.webp' },
    { name: 'Tennis', src: '/assets/tennis-CQ-F-f8D.webp' },
    { name: 'Casino', src: '/assets/casino-emtGdGYa.webp' },
    { name: 'Indian Casino', src: '/assets/indian-casino-BVGF_4g3.webp' },
    { name: 'Teenpatti', src: '/assets/teenpatti-DIQuoH3I.webp' },
    { name: 'Lucky 7', src: '/assets/lucky-7-n-lDQuHj.webp' },
    { name: '32 Cards', src: '/assets/32-cards-D6asvfGI.webp' },
    { name: 'AAA', src: '/assets/aaa-CCS5X0kd.webp' },
    { name: 'Baccarat', src: '/assets/bac-7va-o6lF.webp' },
    { name: 'Bollywood Casino', src: '/assets/bolywood-Cd9xvvkc.webp' },
    { name: 'Seven Up', src: '/assets/seven-up-BwpDcox7.webp' },
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-[#080c12] relative z-10 px-4">
      <div className="max-w-7xl mx-auto w-full space-y-6 md:space-y-10">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-1 border-l-4 border-[#ef8c16] pl-4">
          <h2 className="text-xl md:text-3xl font-black text-white uppercase tracking-wider">
            Online Game Zone
          </h2>
          <p className="text-xs md:text-sm text-slate-400 font-bold tracking-widest uppercase">
            Live Sports Betting &amp; Casino Table Games
          </p>
        </div>

        {/* 1. Top Games Grid (12 Cards, 3 columns on desktop, 2 on tablet/mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-5 w-full">
          {topGames.map((game, index) => (
            <button
              key={index}
              onClick={onSelectGame}
              className="relative w-full aspect-[400/240] rounded-2xl overflow-hidden glass-panel-gold group transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 cursor-pointer"
            >
              <Image
                src={game.src}
                alt={game.name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* 2. Chained Grid (Left: 2x2 grid of smaller games, Right: Tall Promo Banner) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-5 w-full pt-4">
          
          {/* Left Block (2 columns, Poker, Dragon Tiger, Andar Bahar x 2) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3 md:gap-5">
            {/* Poker */}
            <button
              onClick={onSelectGame}
              className="relative w-full aspect-[400/240] rounded-2xl overflow-hidden glass-panel-gold group transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 cursor-pointer"
            >
              <Image
                src="/assets/poker-CskTq9B1.webp"
                alt="Poker"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>

            {/* Dragon Tiger */}
            <button
              onClick={onSelectGame}
              className="relative w-full aspect-[400/240] rounded-2xl overflow-hidden glass-panel-gold group transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 cursor-pointer"
            >
              <Image
                src="/assets/dragontiger-BRNfidWB.webp"
                alt="Dragon Tiger"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>

            {/* Andar Bahar Block 1 */}
            <button
              onClick={onSelectGame}
              className="relative w-full aspect-[400/240] rounded-2xl overflow-hidden glass-panel-gold group transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 cursor-pointer"
            >
              <Image
                src="/assets/andarbahar-CcNp4DaF.webp"
                alt="Andar Bahar"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>

            {/* Andar Bahar Block 2 */}
            <button
              onClick={onSelectGame}
              className="relative w-full aspect-[400/240] rounded-2xl overflow-hidden glass-panel-gold group transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 cursor-pointer"
            >
              <Image
                src="/assets/andarbahar-CcNp4DaF.webp"
                alt="Andar Bahar Double"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          </div>

          {/* Right Block (Tall vertical Promo Banner) */}
          <div className="w-full">
            <button
              onClick={onSelectGame}
              className="relative w-full aspect-[400/500] rounded-2xl overflow-hidden glass-panel-gold group transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 block cursor-pointer"
            >
              <Image
                src="/assets/bottomnewgames-BkqVXGWr.png"
                alt="Live Casino releases"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

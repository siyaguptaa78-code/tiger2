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

  // Categories mapping
  const getCategory = (name: string) => {
    if (['Cricket', 'Football', 'Tennis'].includes(name)) return 'Sports Betting';
    if (name.includes('Casino')) return 'Live Casino';
    return 'Table Game';
  };

  return (
    <section className="w-full py-12 md:py-16 bg-[#080c12] relative z-10 px-4 sm:px-6 lg:px-8 xl:px-0 max-w-[1440px] mx-auto">
      <div className="w-full space-y-8 md:space-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-2 border-l-4 border-[#ef8c16] pl-5">
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-wider">
            Online Game Zone
          </h2>
          <p className="text-sm md:text-base text-slate-400 font-bold tracking-widest uppercase">
            Live Sports Betting &amp; Casino Table Games
          </p>
        </div>

        {/* 1. Top Games Grid (Responsive with min-width) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full">
          {topGames.map((game, index) => (
            <div
              key={index}
              onClick={onSelectGame}
              className="group relative flex flex-col bg-[#111823] rounded-2xl overflow-hidden glass-panel-gold transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer border border-white/5 hover:border-[#ef8c16]/50"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[400/240] overflow-hidden bg-black/50">
                <Image
                  src={game.src}
                  alt={game.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay gradient for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111823] via-transparent to-transparent opacity-80" />
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-1 p-5 md:p-6 z-10 relative bg-[#111823]">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#ef8c16] mb-1">
                  {getCategory(game.name)}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 line-clamp-1 group-hover:text-[#ffc558] transition-colors">
                  {game.name}
                </h3>
                
                {/* CTA Button */}
                <button className="mt-auto w-full h-[40px] md:h-[44px] flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-gradient-to-r group-hover:from-[#ef8c16] group-hover:to-[#ff7300] border border-white/10 group-hover:border-transparent text-white text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Secondary Games Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 w-full pt-6">
          
          {/* Left Block (2 columns for smaller games) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              { name: 'Poker', src: '/assets/poker-CskTq9B1.webp' },
              { name: 'Dragon Tiger', src: '/assets/dragontiger-BRNfidWB.webp' },
              { name: 'Andar Bahar', src: '/assets/andarbahar-CcNp4DaF.webp' },
              { name: 'Andar Bahar Double', src: '/assets/andarbahar-CcNp4DaF.webp' },
            ].map((game, idx) => (
              <div
                key={idx}
                onClick={onSelectGame}
                className="group relative flex flex-col bg-[#111823] rounded-2xl overflow-hidden glass-panel-gold transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer border border-white/5 hover:border-[#ef8c16]/50"
              >
                <div className="relative w-full aspect-[400/240] overflow-hidden bg-black/50">
                  <Image
                    src={game.src}
                    alt={game.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111823] via-transparent to-transparent opacity-80" />
                </div>
                <div className="flex flex-col flex-1 p-4 md:p-5 z-10 relative bg-[#111823]">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#ef8c16] mb-1">
                    Card Game
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-white mb-3 line-clamp-1 group-hover:text-[#ffc558] transition-colors">
                    {game.name}
                  </h3>
                  <button className="mt-auto w-full h-[36px] md:h-[40px] flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-gradient-to-r group-hover:from-[#ef8c16] group-hover:to-[#ff7300] border border-white/10 group-hover:border-transparent text-white text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300">
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Block (Tall vertical Promo Banner) */}
          <div className="w-full h-full flex">
            <div
              onClick={onSelectGame}
              className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden glass-panel-gold group transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-white/5 hover:border-[#ef8c16]/50 flex flex-col"
            >
              <div className="relative w-full h-full flex-1">
                <Image
                  src="/assets/bottomnewgames-BkqVXGWr.png"
                  alt="Live Casino releases"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-6 bg-[#111823] border-t border-white/10 shrink-0">
                <button className="w-full h-[44px] flex items-center justify-center rounded-lg btn-gold-gradient text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300">
                  Explore New Games
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

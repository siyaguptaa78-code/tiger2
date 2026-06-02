'use client';

import React, { useState, useEffect } from 'react';

interface BannerProps {
  onPlayNow: () => void;
}

export default function Banner({ onPlayNow }: BannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'ENJOY FASTEST ODDS',
      subtitle: 'WITH LIVE DEALERS & CASINOS',
      description: 'Get real-time betting updates, competitive odds, and instant transactions on your favorite games.',
      buttonText: 'Play Now',
      color: 'from-[#ff7300] to-[#ef8c16]',
    },
    {
      title: 'TIGER EXCHANGE 365',
      subtitle: 'PREMIUM SPORTSBOOK SELECTIONS',
      description: 'Play Cricket, Soccer, Tennis, Matka, Horse Racing, and Live Casino with 24/7 dedicated support.',
      buttonText: 'Join Exchange',
      color: 'from-[#00c6ff] to-[#0072ff]',
    },
    {
      title: 'SECURE CASH WINNINGS',
      subtitle: 'FASTEST WITHDRAWALS IN 45 MINUTES',
      description: 'Deposit safely using UPI, NetBanking or GPay and receive instant wallet credit settlements.',
      buttonText: 'Instant Play',
      color: 'from-[#ea00d9] to-[#711c91]',
    },
  ];

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="w-full py-6 md:py-10 bg-[#080c12] relative z-10 px-4">
      <div className="max-w-7xl mx-auto w-full relative h-[260px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-[#111823]">
        {/* Banner mask background texture */}
        <div className="absolute inset-0 bg-[url('/assets/banner-mask-heading-sec-DX7r4ccK.webp')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />

        {/* Slides rendering */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col justify-center px-6 md:px-16 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0 pointer-events-auto'
                : 'opacity-0 translate-x-4 pointer-events-none'
            }`}
          >
            {/* Visual background gradient circle flare */}
            <div className={`absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-br ${slide.color} opacity-20 blur-[80px] pointer-events-none`} />
            <div className={`absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-br ${slide.color} opacity-10 blur-[80px] pointer-events-none`} />

            {/* Slide info content */}
            <div className="max-w-xl space-y-3 md:space-y-5 z-10 relative">
              <span className={`inline-block px-3 py-1 text-[10px] md:text-xs font-black tracking-widest text-[#000000] bg-gradient-to-r ${slide.color} rounded-full uppercase`}>
                VIP Betting
              </span>
              <div className="space-y-1.5">
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight glow-text-gold">
                  {slide.title}
                </h2>
                <h3 className="text-sm md:text-xl font-bold text-gold-gradient tracking-wide uppercase">
                  {slide.subtitle}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed">
                {slide.description}
              </p>

              {/* Action play now button */}
              <div className="pt-2">
                <button
                  onClick={onPlayNow}
                  className="px-6 md:px-8 py-3 rounded-full btn-gold-gradient text-xs md:text-sm font-black tracking-wider uppercase flex items-center gap-2 cursor-pointer"
                >
                  {slide.buttonText}
                  <span className="text-base font-normal">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Dots Paginations */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2.5 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide
                  ? 'bg-[#ef8c16] w-6'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

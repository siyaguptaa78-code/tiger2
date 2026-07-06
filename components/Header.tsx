'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  businessType?: number;
}

export default function Header({
  onOpenLogin,
  onOpenRegister,
  businessType = 2,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full relative z-30 bg-[#080c12] border-b border-white/5">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center w-[220px]">
            <Image
              src="/assets/logo.svg"
              alt="Tiger365 Logo"
              width={220}
              height={50}
              priority
              className="object-contain"
            />
          </Link>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            {businessType === 2 && (
              <button
                onClick={onOpenRegister}
                className="px-5 py-2.5 rounded-full border border-[rgba(239,140,22,0.3)] hover:border-[#ef8c16] text-[#ef8c16] font-bold text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer"
              >
                Register
              </button>
            )}
            <button
              onClick={onOpenLogin}
              className="px-6 py-2.5 rounded-full btn-gold-gradient font-bold text-sm tracking-wider uppercase cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between px-4 py-3.5 w-full bg-[#080c12]">
          {/* Hamburger Menu Bar */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1 cursor-pointer"
            aria-label="Open mobile navigation"
          >
            <Image
              src="/assets/menu_bar-Cev7CaPt.svg"
              alt="Menu"
              width={24}
              height={24}
              className="opacity-90 active:opacity-100 transition"
            />
          </button>

          {/* Logo Center */}
          <Link href="/" className="flex items-center w-[160px] justify-center">
            <Image
              src="/assets/logo.svg"
              alt="Tiger365 Logo"
              width={160}
              height={36}
              priority
              className="object-contain"
            />
          </Link>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            {businessType === 2 && (
              <button
                onClick={onOpenRegister}
                className="px-3 py-1.5 rounded-full border border-[rgba(239,140,22,0.3)] text-[#ef8c16] font-bold text-xs uppercase cursor-pointer"
              >
                Reg
              </button>
            )}
            <button
              onClick={onOpenLogin}
              className="px-3.5 py-1.5 rounded-full btn-gold-gradient font-bold text-xs uppercase cursor-pointer"
            >
              Log
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 left-0 bottom-0 w-[280px] bg-[#0b0f17] border-r border-[rgba(239,140,22,0.15)] shadow-2xl flex flex-col p-6 transition-transform duration-300 transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Header of Mobile Menu */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
            <Image
              src="/assets/logo.svg"
              alt="Tiger365 Logo"
              width={150}
              height={34}
              priority
              className="object-contain"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 bg-[#1b2432]/40 rounded-full border border-white/5 hover:border-[rgba(239,140,22,0.5)] transition duration-200 cursor-pointer"
              aria-label="Close menu"
            >
              <Image
                src="/assets/close-btn.svg"
                alt="Close"
                width={16}
                height={16}
                className="opacity-80"
              />
            </button>
          </div>

          {/* Links list */}
          <nav className="flex-1 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-[rgba(239,140,22,0.05)] text-slate-200 hover:text-white font-bold transition duration-200"
            >
              <span className="w-2 h-2 rounded-full bg-[#ef8c16]"></span>
              Home
            </Link>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-[rgba(239,140,22,0.05)] text-slate-200 hover:text-white font-bold text-left transition duration-200 cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[#ef8c16]"></span>
              Login
            </button>
            {businessType === 2 && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-[rgba(239,140,22,0.05)] text-slate-200 hover:text-white font-bold text-left transition duration-200 cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#ef8c16]"></span>
                Register
              </button>
            )}
          </nav>

          {/* Sidebar Footer */}
          <div className="border-t border-white/5 pt-4 text-center">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              WWW.TIGER365OFFICIAL.CO.IN
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

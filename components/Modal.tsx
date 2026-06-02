'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}: ModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-3xl',
    xl: 'max-w-5xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className={`relative w-full ${sizeClasses[size]} glass-panel-gold rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col transition-all transform scale-100 duration-300`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[rgba(239,140,22,0.15)] bg-[#111823]">
          {title ? (
            <h3 className="text-lg font-bold text-gold-gradient tracking-wide uppercase">
              {title}
            </h3>
          ) : (
            <div />
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#1b2432]/60 border border-white/5 hover:border-[rgba(239,140,22,0.5)] transition duration-200"
            aria-label="Close modal"
          >
            <Image
              src="/assets/close-btn.svg"
              alt="Close"
              width={16}
              height={16}
              className="opacity-80 hover:opacity-100 transition"
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto bg-[#0a0f18]/95 custom-scrollbar text-[#e1e7f0]">
          {children}
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

interface ForgetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

export default function ForgetPasswordModal({
  isOpen,
  onClose,
  onOpenLogin,
}: ForgetPasswordModalProps) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username.trim()) {
      setError('Please enter your username');
      return;
    }

    setIsLoading(true);
    // Simulate Forgot Password API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccess('Your password reset request has been sent! Please contact our customer support on WhatsApp to obtain your new password.');
    }, 1200);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Forgot Password" size="sm">
      {success ? (
        <div className="space-y-5 text-center py-4">
          <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full flex items-center justify-center mx-auto text-3xl">
            !
          </div>
          <p className="text-sm font-semibold leading-relaxed text-slate-200">{success}</p>
          <div className="pt-2">
            <a
              href="https://wa.me/918557877879"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba56] text-black font-extrabold text-sm rounded-full transition shadow-lg"
            >
              <Image
                src="/assets/whatsapp-BnREQbLK.webp"
                alt="WhatsApp"
                width={16}
                height={16}
              />
              Contact Support
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-xs text-slate-400 leading-relaxed font-medium">
            Enter your username below to request a password reset. You will need to contact our official support team to verify your identity.
          </p>

          {error && (
            <div className="p-3 text-xs bg-red-950/80 border border-red-500/30 text-red-300 rounded-lg text-center font-medium">
              {error}
            </div>
          )}

          {/* Username Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Username
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Image
                  src="/assets/user_icon-BN3A1y4M.svg"
                  alt="User"
                  width={18}
                  height={18}
                  className="opacity-60"
                />
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
                className="w-full bg-[#111823] border border-[rgba(239,140,22,0.15)] focus:border-[#ef8c16] focus:ring-1 focus:ring-[#ef8c16] outline-none text-sm text-white rounded-xl py-3 pl-11 pr-4 transition-all duration-200"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-xl btn-gold-gradient text-sm flex items-center justify-center gap-2 mt-4 cursor-pointer"
          >
            {isLoading ? (
              <div className="flex gap-1.5 items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-black animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-black animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-black animate-bounce"></span>
              </div>
            ) : (
              'Reset Password'
            )}
          </button>

          {/* Back to Login prompt */}
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={onOpenLogin}
              className="text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline transition"
            >
              Back to Login
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
  onOpenForgetPassword: () => void;
}

export default function LoginModal({
  isOpen,
  onClose,
  onOpenRegister,
  onOpenForgetPassword,
}: LoginModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username.trim()) {
      setError('Username is required');
      return;
    }
    if (!password) {
      setError('Password is required');
      return;
    }

    setIsLoading(true);
    // Simulate API Login call
    setTimeout(() => {
      setIsLoading(false);
      setError('Invalid username or password. Please try again.');
    }, 1200);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Login" size="sm">
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="p-3 text-xs bg-red-950/80 border border-red-500/30 text-red-300 rounded-lg text-center font-medium">
            {error}
          </div>
        )}

        {/* Username Field */}
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

        {/* Password Field */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Password
            </label>
            <button
              type="button"
              onClick={onOpenForgetPassword}
              className="text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline transition"
            >
              Forgot Password?
            </button>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Image
                src="/assets/key_icon-BQPUDfRX.svg"
                alt="Password"
                width={18}
                height={18}
                className="opacity-60"
              />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full bg-[#111823] border border-[rgba(239,140,22,0.15)] focus:border-[#ef8c16] focus:ring-1 focus:ring-[#ef8c16] outline-none text-sm text-white rounded-xl py-3 pl-11 pr-12 transition-all duration-200"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center opacity-65 hover:opacity-100 transition"
            >
              <Image
                src={showPassword ? '/assets/eye-open-C_Qn7HD_.webp' : '/assets/eye-close-Dm8YiFMl.png'}
                alt={showPassword ? 'Hide password' : 'Show password'}
                width={18}
                height={18}
              />
            </button>
          </div>
        </div>

        {/* Submit button */}
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
            'Login'
          )}
        </button>

        {/* Sign up prompt */}
        <div className="text-center pt-2">
          <p className="text-xs text-slate-400 font-medium">
            New to Tiger365?{' '}
            <button
              type="button"
              onClick={onOpenRegister}
              className="text-amber-400 hover:text-amber-300 font-bold hover:underline transition ml-1"
            >
              Register Now
            </button>
          </p>
        </div>
      </form>
    </Modal>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

export default function RegisterModal({
  isOpen,
  onClose,
  onOpenLogin,
}: RegisterModalProps) {
  const [mobile, setMobile] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!mobile.trim() || !/^\d{10}$/.test(mobile)) {
      setError('Enter a valid 10-digit mobile number');
      return;
    }
    if (!username.trim() || username.length < 4) {
      setError('Username must be at least 4 characters long');
      return;
    }
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    // Simulate Registration API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccess('Registration successful! Please login with your credentials.');
      setTimeout(() => {
        onOpenLogin();
      }, 1500);
    }, 1500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Register" size="sm">
      {success ? (
        <div className="space-y-4 py-8 text-center">
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-3xl animate-pulse">
            ✓
          </div>
          <p className="text-sm font-semibold text-slate-200">{success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 text-xs bg-red-950/80 border border-red-500/30 text-red-300 rounded-lg text-center font-medium">
              {error}
            </div>
          )}

          {/* Mobile Field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Mobile Number
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-sm text-slate-400 font-bold">
                +91
              </span>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="Enter 10-digit number"
                className="w-full bg-[#111823] border border-[rgba(239,140,22,0.15)] focus:border-[#ef8c16] focus:ring-1 focus:ring-[#ef8c16] outline-none text-sm text-white rounded-xl py-3 pl-12 pr-4 transition-all duration-200"
              />
            </div>
          </div>

          {/* Username Field */}
          <div className="space-y-1">
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
                onChange={(e) => setUsername(e.target.value.replace(/[^a-zA-Z0-9]/g, ''))}
                placeholder="Choose Username"
                className="w-full bg-[#111823] border border-[rgba(239,140,22,0.15)] focus:border-[#ef8c16] focus:ring-1 focus:ring-[#ef8c16] outline-none text-sm text-white rounded-xl py-3 pl-11 pr-4 transition-all duration-200"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Password
            </label>
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
                placeholder="Create Password"
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

          {/* Confirm Password Field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Image
                  src="/assets/key_icon-BQPUDfRX.svg"
                  alt="Confirm Password"
                  width={18}
                  height={18}
                  className="opacity-60"
                />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full bg-[#111823] border border-[rgba(239,140,22,0.15)] focus:border-[#ef8c16] focus:ring-1 focus:ring-[#ef8c16] outline-none text-sm text-white rounded-xl py-3 pl-11 pr-4 transition-all duration-200"
              />
            </div>
          </div>

          {/* Referral Code Field */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Referral Code (Optional)
            </label>
            <input
              type="text"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
              placeholder="Referral Code"
              className="w-full bg-[#111823] border border-[rgba(239,140,22,0.15)] focus:border-[#ef8c16] focus:ring-1 focus:ring-[#ef8c16] outline-none text-sm text-white rounded-xl py-3 px-4 transition-all duration-200"
            />
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
              'Register'
            )}
          </button>

          {/* Login prompt */}
          <div className="text-center pt-2">
            <p className="text-xs text-slate-400 font-medium">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onOpenLogin}
                className="text-amber-400 hover:text-amber-300 font-bold hover:underline transition ml-1"
              >
                Login Now
              </button>
            </p>
          </div>
        </form>
      )}
    </Modal>
  );
}

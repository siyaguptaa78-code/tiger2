'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginModal from '@/components/LoginModal';
import RegisterModal from '@/components/RegisterModal';
import ForgetPasswordModal from '@/components/ForgetPasswordModal';
import InfoModals from '@/components/InfoModals';
import { ModalType } from '@/types';
import { blogPosts } from '@/data/blogs';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function BlogPostPage(props: PageProps) {
  const params = use(props.params);
  const post = blogPosts.find((p) => p.id === params.id);
  
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const domainName = 'tiger365official.co.in';

  if (!post) {
    notFound();
  }

  const handleOpenModal = (type: ModalType) => {
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#080c12] overflow-x-hidden text-white">
      {/* Background decorations */}
      <div className="home-left-right">
        <div className="home-left">
          <Image src="/assets/home-left-design-DebOdF89.webp" alt="Decoration" width={350} height={600} priority className="object-contain" />
        </div>
      </div>

      <Header onOpenLogin={() => handleOpenModal('login')} onOpenRegister={() => handleOpenModal('register')} />

      <main className="flex-1 w-full max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#ef8c16] hover:text-[#f4b860] font-bold mb-10 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO BLOG
        </Link>

        <article>
          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-[#111823] text-[#ef8c16] text-xs font-bold px-4 py-1.5 rounded-full border border-white/5 uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-slate-500 text-xs font-bold uppercase">{post.readTime}</span>
              <span className="text-slate-600 text-xs">•</span>
              <span className="text-slate-500 text-xs font-bold uppercase">{post.date}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
              {post.title}
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-[#ef8c16] to-[#f4b860] rounded-full mb-10"></div>
          </header>

          {/* Feature/Emoji banner */}
          <div className={`bg-gradient-to-r ${post.color} border border-white/5 rounded-3xl p-16 text-center text-7xl md:text-8xl mb-12 shadow-2xl relative overflow-hidden`}>
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ef8c16] to-transparent opacity-50"></div>
            {post.emoji}
          </div>

          {/* Body and Sidebar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 text-slate-300 leading-relaxed text-base sm:text-lg">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="max-w-none"
              />
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-[#111823] border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ef8c16] to-[#f4b860]"></div>
                
                <div className="text-center mb-8">
                  <span className="text-5xl mb-4 block">🐯</span>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">Get Your ID</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Join India's most trusted gaming exchange platform. 24/7 service.</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 text-sm text-slate-300 font-medium bg-[#0d131c] p-3 rounded-xl border border-white/5">
                    <div className="w-6 h-6 rounded-full bg-[#ef8c16]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#ef8c16] font-bold text-xs">✓</span>
                    </div>
                    <span>100% Trusted & Secure</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-300 font-medium bg-[#0d131c] p-3 rounded-xl border border-white/5">
                    <div className="w-6 h-6 rounded-full bg-[#ef8c16]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#ef8c16] font-bold text-xs">✓</span>
                    </div>
                    <span>Instant Refills & Cashout</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-300 font-medium bg-[#0d131c] p-3 rounded-xl border border-white/5">
                    <div className="w-6 h-6 rounded-full bg-[#ef8c16]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#ef8c16] font-bold text-xs">✓</span>
                    </div>
                    <span>24/7 WhatsApp Support</span>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenModal('login')}
                  className="w-full bg-gradient-to-r from-[#ef8c16] to-[#f4b860] hover:from-[#f4b860] hover:to-[#ef8c16] text-black font-black py-4 px-6 rounded-full text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-[#ef8c16]/25 transform hover:-translate-y-1"
                >
                  GET ID NOW
                </button>
              </div>
            </div>
          </div>
        </article>

      </main>

      <Footer onOpenModal={handleOpenModal} domainName={domainName} />

      <LoginModal isOpen={activeModal === 'login'} onClose={handleCloseModal} onOpenRegister={() => handleOpenModal('register')} onOpenForgetPassword={() => handleOpenModal('forgetPassword')} />
      <RegisterModal isOpen={activeModal === 'register'} onClose={handleCloseModal} onOpenLogin={() => handleOpenModal('login')} />
      <ForgetPasswordModal isOpen={activeModal === 'forgetPassword'} onClose={handleCloseModal} onOpenLogin={() => handleOpenModal('login')} />
      <InfoModals activeModal={activeModal} onClose={handleCloseModal} domainName={domainName} />
    </div>
  );
}

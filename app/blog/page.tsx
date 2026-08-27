"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import RegisterModal from "@/components/RegisterModal";
import ForgetPasswordModal from "@/components/ForgetPasswordModal";
import InfoModals from "@/components/InfoModals";
import { ModalType } from "@/types";
import { blogPosts } from "@/data/blogs";

export default function BlogList() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const domainName = "tiger365official.co.in";

  const handleOpenModal = (type: ModalType) => {
    if (type === "login" || type === "register") {
      window.location.href = "https://www.Gabbar247.vip";
      return;
    }
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#080c12] overflow-x-hidden">
      {/* Background decorations */}
      <div className="home-left-right">
        <div className="home-left">
          <Image
            src="/assets/home-left-design-DebOdF89.webp"
            alt="Decoration"
            width={350}
            height={600}
            priority
            className="object-contain"
          />
        </div>
      </div>

      <Header
        onOpenLogin={() => handleOpenModal("login")}
        onOpenRegister={() => handleOpenModal("register")}
      />

      <main className="flex-1 w-full max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Page Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest">
            The <span className="text-gold-gradient">Blog</span>
          </h1>
          <p className="text-sm md:text-base text-slate-400 font-bold uppercase tracking-widest max-w-2xl mx-auto">
            Get the latest news, betting strategies, and tournament guides from
            the world of professional gaming.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ef8c16] to-[#f4b860] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-[#111823] border border-white/5 hover:border-[#ef8c16]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#ef8c16]/10 flex flex-col relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ef8c16] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4 text-xs font-bold">
                  <span className="bg-[#ef8c16]/10 text-[#ef8c16] px-3 py-1 rounded-full border border-[#ef8c16]/20">
                    {post.category}
                  </span>
                  <span className="text-slate-500">{post.readTime}</span>
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="block group-hover:text-[#ef8c16] transition-colors"
                >
                  <h3 className="text-xl font-bold text-white leading-snug mb-3">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-bold">
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-sm font-bold text-[#ef8c16] flex items-center gap-1 group/btn"
                  >
                    READ MORE
                    <svg
                      className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer onOpenModal={handleOpenModal} domainName={domainName} />

      <LoginModal
        isOpen={activeModal === "login"}
        onClose={handleCloseModal}
        onOpenRegister={() => handleOpenModal("register")}
        onOpenForgetPassword={() => handleOpenModal("forgetPassword")}
      />
      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={handleCloseModal}
        onOpenLogin={() => handleOpenModal("login")}
      />
      <ForgetPasswordModal
        isOpen={activeModal === "forgetPassword"}
        onClose={handleCloseModal}
        onOpenLogin={() => handleOpenModal("login")}
      />
      <InfoModals
        activeModal={activeModal}
        onClose={handleCloseModal}
        domainName={domainName}
      />
    </div>
  );
}

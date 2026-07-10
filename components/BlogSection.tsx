'use client';

import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogs';

export default function BlogSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#080c12] relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111823] border border-white/5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ef8c16] animate-pulse"></span>
              <span className="text-xs font-bold text-[#ef8c16] uppercase tracking-wider">Latest News & Analysis</span>
            </div>
            <h2 className="text-xl md:text-3xl font-black text-white uppercase tracking-wider">
              From the <span className="text-gold-gradient">Blog</span>
            </h2>
            <p className="text-xs md:text-sm text-slate-400 font-bold tracking-widest uppercase">
              Insights, Guides & Strategies
            </p>
          </div>
          
          <Link
            href="/blog"
            className="group hidden md:flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-[#ef8c16] transition-colors"
          >
            VIEW ALL ARTICLES
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="group bg-[#111823] border border-white/5 hover:border-[#ef8c16]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#ef8c16]/10 flex flex-col relative"
            >
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ef8c16] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4 text-xs font-bold">
                  <span className="bg-[#ef8c16]/10 text-[#ef8c16] px-3 py-1 rounded-full border border-[#ef8c16]/20">
                    {post.category}
                  </span>
                  <span className="text-slate-500">{post.readTime}</span>
                </div>

                <Link href={`/blog/${post.id}`} className="block group-hover:text-[#ef8c16] transition-colors">
                  <h3 className="text-xl font-bold text-white leading-snug mb-3">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-bold">{post.date}</span>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/blog"
            className="bg-[#111823] border border-white/10 text-slate-300 font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#ef8c16]/10 hover:text-[#ef8c16] hover:border-[#ef8c16]/30 transition-all"
          >
            VIEW ALL ARTICLES
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: "What is Tiger365?",
    answer: "Tiger365 is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
  },
  {
    question: "How does a Tiger365 ID work?",
    answer: "An account ID is generally used to identify a user account. Refer to Tiger365's current account instructions and terms for the exact process."
  },
  {
    question: "How can I access Tiger365?",
    answer: "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
  },
  {
    question: "What sports are available on Tiger365?",
    answer: "Available sports can change. Check the current sports or gaming section on the website for the latest list and availability."
  },
  {
    question: "Does Tiger365 provide live sports information?",
    answer: "Check the site's current sports section for any live-event information and the terms that apply to its use."
  },
  {
    question: "How can I get help with my Tiger365 account?",
    answer: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
  },
  {
    question: "How do I find Tiger365 login information?",
    answer: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
  },
  {
    question: "What payment options are supported?",
    answer: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
  },
  {
    question: "What should I do if I have trouble accessing my account?",
    answer: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
  },
  {
    question: "Where can I find the latest Tiger365 updates?",
    answer: "Refer to Tiger365's current website information and terms for the most accurate answer."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 xl:px-0 bg-[#080c12] relative z-10 max-w-[1440px] mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111823] border border-white/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ef8c16]"></span>
            <span className="text-xs font-bold text-[#ef8c16] uppercase tracking-wider">Help Center</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 md:mb-6 tracking-tight">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto">
            Find answers to common questions about Tiger365 and how to get started on our premium platform.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-[#111823] border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-[#ef8c16]/50 shadow-lg shadow-[#ef8c16]/5' : 'border-white/5 hover:border-[#ef8c16]/30'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
              >
                <span className="font-bold text-slate-200 text-base md:text-lg pr-6 group-hover:text-white transition-colors">
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 flex-shrink-0 text-[#ef8c16] bg-white/5 p-2 rounded-full ${openIndex === index ? 'rotate-180 bg-[#ef8c16]/10' : ''}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 text-slate-400 text-sm md:text-base border-t border-white/5 pt-4 md:pt-5 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

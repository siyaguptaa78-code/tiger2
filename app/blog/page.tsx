import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { WA_LINK } from '@/components/constants';

export const metadata: Metadata = {
  title: 'Blog – Tiger 365 ID | Cricket Betting Tips & News',
  description: 'Read the latest cricket betting tips, strategies, and news from Tiger365 ID. Stay updated with IPL, T20 World Cup, and sports betting insights.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog – Tiger 365 ID | Cricket Betting Tips & News',
    description: 'Read the latest cricket betting tips, strategies, and news from Tiger365 ID. Stay updated with IPL, T20 World Cup, and sports betting insights.',
    url: 'https://tiger365onlineid.co.in/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog – Tiger 365 ID | Cricket Betting Tips & News',
    description: 'Read the latest cricket betting tips, strategies, and news from Tiger365 ID. Stay updated with IPL, T20 World Cup, and sports betting insights.',
  },
};

const blogPosts = [
  {
    id: 'ilt20-2026-season-5',
    title: 'ILT20 2026: Season 5 Schedule, Teams, Dates & Everything About the International League T20',
    excerpt: 'ILT20 Season 5 runs 22 November–20 December 2026 in the UAE. Desert Vipers defend their maiden title. Teams, schedule, past winners, how to watch and FAQs.',
    category: 'Tournament Guide',
    date: 'July 8, 2026',
    readTime: '6 min read',
    emoji: '🏏',
    color: 'from-emerald-900/30 to-black',
  },
  {
    id: 'sa20-2027',
    title: 'SA20 2027: Schedule, Teams, Auction & Everything About Season 5 of South Africa\'s T20 League',
    excerpt: 'SA20 2027 is expected December 2026–January 2027 with the auction in September. Sunrisers Eastern Cape defend a third title. Teams, past winners, how to watch and FAQs.',
    category: 'Tournament Guide',
    date: 'July 8, 2026',
    readTime: '10 min read',
    emoji: '🏏',
    color: 'from-orange-900/30 to-black',
  },
  {
    id: 'ipl-betting-tips-2024',
    title: 'Top IPL Betting Tips for 2026 Season',
    excerpt: 'Get the best strategies for IPL betting this season. Learn how to analyze team performance, pitch conditions, and player form to maximize your winnings.',
    category: 'Cricket Betting',
    date: 'June 1, 2026',
    readTime: '5 min read',
    emoji: '🏏',
    color: 'from-orange-900/30 to-black',
  },
  {
    id: 't20-world-cup-guide',
    title: 'Complete Guide to T20 World Cup Betting',
    excerpt: 'Everything you need to know about betting on the T20 World Cup. Markets, odds, and expert predictions to help you make informed decisions.',
    category: 'Tournament Guide',
    date: 'May 28, 2026',
    readTime: '7 min read',
    emoji: '🏆',
    color: 'from-yellow-900/30 to-black',
  },
  {
    id: 'aviator-game-strategy',
    title: 'Aviator Game Strategy: How to Play Smart',
    excerpt: 'Master the Aviator crash game with these proven strategies. Understand the mechanics, manage your bankroll, and know when to cash out.',
    category: 'Casino Games',
    date: 'May 25, 2026',
    readTime: '4 min read',
    emoji: '✈️',
    color: 'from-blue-900/30 to-black',
  },
  {
    id: 'cricket-id-vs-exchange',
    title: 'Cricket ID vs Betting Exchange: What\'s the Difference?',
    excerpt: 'Confused about cricket IDs and betting exchanges? We explain the key differences, advantages, and how Tiger365 ID gives you access to both.',
    category: 'Beginner Guide',
    date: 'May 20, 2026',
    readTime: '6 min read',
    emoji: '📊',
    color: 'from-green-900/30 to-black',
  },
  {
    id: 'safe-betting-tips',
    title: '10 Tips for Safe and Responsible Betting in India',
    excerpt: 'Stay safe while enjoying online sports betting. These 10 essential tips will help you bet responsibly, manage your bankroll, and avoid common mistakes.',
    category: 'Safety',
    date: 'May 15, 2026',
    readTime: '8 min read',
    emoji: '🔒',
    color: 'from-purple-900/30 to-black',
  },
  {
    id: 'upi-betting-deposits',
    title: 'How to Deposit and Withdraw via UPI for Betting',
    excerpt: 'Step-by-step guide on making deposits and withdrawals for your cricket betting ID using UPI, IMPS, and other Indian payment methods.',
    category: 'Payments',
    date: 'May 10, 2026',
    readTime: '3 min read',
    emoji: '💳',
    color: 'from-red-900/30 to-black',
  },
];



export default function BlogPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      {/* Info banner */}
      <div className="w-full bg-orange-950/60 border-b border-orange-500/20 py-2 px-4 text-center">
        <p className="text-xs text-orange-300/80">
          <span className="font-semibold">Note:</span> tiger365onlineid.co.in is an informational website only and does not offer betting services.
        </p>
      </div>

      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-4">
              Latest Posts
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
              Tiger365 <span className="text-orange-500">Blog</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-400 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              Cricket betting tips, strategies, game guides, and the latest sports news
            </p>
          </div>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="py-16 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                id={`blog-post-${post.id}`}
                className="group bg-[#1a1a1a] border border-gray-800 hover:border-orange-500/40 rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 flex flex-col"
              >
                {/* Card image area */}
                <div className={`bg-gradient-to-b ${post.color} p-12 text-center text-5xl flex items-center justify-center min-h-[140px]`}>
                  {post.emoji}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-orange-500/10 text-orange-400 text-xs font-bold px-3 py-1 rounded-full border border-orange-500/20">
                      {post.category}
                    </span>
                    <span className="text-gray-700 text-xs">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-white mb-3 group-hover:text-orange-100 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <span className="text-gray-700 text-xs">{post.date}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors flex items-center gap-1"
                    >
                      Read More
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Ready to Start <span className="text-orange-500">Betting?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Get your Tiger365 ID now and access the best cricket betting experience in India.
          </p>
          <a
            href={WA_LINK}
            id="blog-cta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange inline-flex items-center gap-3 text-white font-bold px-10 py-5 rounded-full text-lg uppercase tracking-wider"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            GET TIGER 365 ID
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

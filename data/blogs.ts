export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  emoji: string;
  color: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'ilt20-2026-season-5',
    title: 'ILT20 2026: Season 5 Schedule, Teams, Dates & Everything About the International League T20',
    excerpt: 'ILT20 Season 5 runs 22 November–20 December 2026 in the UAE. Desert Vipers defend their maiden title. Teams, schedule, past winners, how to watch and FAQs.',
    category: 'Tournament Guide',
    date: 'July 8, 2026',
    readTime: '6 min read',
    emoji: '🏏',
    color: 'from-emerald-900/30 to-[#111823]',
    content: `
      <p class="mb-6 text-slate-300 leading-relaxed">The UAE's International League T20 is coming earlier than ever before. Season 5 has been scheduled for 22 November-20 December 2026, shifting the competition from its traditional January slot, and coming just after the Abu Dhabi T10 and before the SA20/BBL burst into the UAE winter. For fans, that means top-level T20 action in the Emirates for all but the shortest of winters. For the Desert Vipers, it means there's no time to bask in their glory.</p>

      <p class="mb-6 text-slate-300 leading-relaxed">Four seasons of the ILT20 have produced four different winners. Someone is bound to win it twice eventually - and the Vipers get their first chance to do so.</p>

      <h3 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ef8c16] to-[#f4b860] mt-10 mb-6">ILT20 2026: All You Need to Know</h3>
      <div class="overflow-x-auto mb-8 bg-[#0d131c] rounded-2xl border border-white/5 p-1 shadow-xl">
        <table class="w-full text-left border-collapse text-sm md:text-base">
          <thead>
            <tr class="bg-[#151d29] rounded-t-xl">
              <th class="p-4 font-bold text-slate-200 border-b border-white/5 first:rounded-tl-xl">Detail</th>
              <th class="p-4 font-bold text-slate-200 border-b border-white/5 last:rounded-tr-xl">Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-4 border-b border-white/5 text-slate-400">Dates</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">22 November - 20 December 2026 (confirmed)</td>
            </tr>
            <tr class="bg-[#111823]/50">
              <td class="p-4 border-b border-white/5 text-slate-400">Season</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">5th edition (DP World ILT20)</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-white/5 text-slate-400">Teams</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">6</td>
            </tr>
            <tr class="bg-[#111823]/50">
              <td class="p-4 border-b border-white/5 text-slate-400">Venues</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">Dubai International Stadium, Zayed Cricket Stadium (Abu Dhabi), Sharjah Cricket Stadium</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-white/5 text-slate-400">Defending champions</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">Desert Vipers (maiden title)</td>
            </tr>
            <tr class="bg-[#111823]/50">
              <td class="p-4 border-b border-white/5 text-slate-400">Format</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">T20, round-robin + playoffs</td>
            </tr>
            <tr>
              <td class="p-4 text-slate-400">Last season</td>
              <td class="p-4 text-slate-300 font-medium">2 December 2025 - 4 January 2026</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ef8c16] to-[#f4b860] mt-10 mb-6">What Happened Last Season</h3>
      <p class="mb-6 text-slate-300 leading-relaxed">Season 4 saw the Desert Vipers finally win the title after twice finishing runners-up, beating MI Emirates in the final in January 2026. The ILT20 has so far seen four different winners in its four seasons - Gulf Giants, MI Emirates, Dubai Capitals and the Vipers - making it the only top-tier T20 league yet to see a repeat champion, with a healthy competitive balance between the six franchises.</p>

      <h3 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ef8c16] to-[#f4b860] mt-10 mb-6">ILT20 Teams: All Six Franchises</h3>
      <p class="mb-6 text-slate-300 leading-relaxed">Ownership will be familiar to those who follow the other leagues on this site, with the IPL's big teams all having a UAE franchise.</p>
      
      <div class="overflow-x-auto mb-8 bg-[#0d131c] rounded-2xl border border-white/5 p-1 shadow-xl">
        <table class="w-full text-left border-collapse text-sm md:text-base">
          <thead>
            <tr class="bg-[#151d29] rounded-t-xl">
              <th class="p-4 font-bold text-slate-200 border-b border-white/5 first:rounded-tl-xl">Team</th>
              <th class="p-4 font-bold text-slate-200 border-b border-white/5">Owners</th>
              <th class="p-4 font-bold text-slate-200 border-b border-white/5 last:rounded-tr-xl">The Short Version</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-4 border-b border-white/5 text-white font-bold">Desert Vipers</td>
              <td class="p-4 border-b border-white/5 text-slate-400">Lancer Capital (Avram Glazer)</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">Champions at last; the league's most consistent team</td>
            </tr>
            <tr class="bg-[#111823]/50">
              <td class="p-4 border-b border-white/5 text-white font-bold">MI Emirates</td>
              <td class="p-4 border-b border-white/5 text-slate-400">Reliance (Mumbai Indians)</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">2024 champions, beaten finalists last season</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-white/5 text-white font-bold">Dubai Capitals</td>
              <td class="p-4 border-b border-white/5 text-slate-400">GMR Group (Delhi Capitals)</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">2025 champions</td>
            </tr>
            <tr class="bg-[#111823]/50">
              <td class="p-4 border-b border-white/5 text-white font-bold">Gulf Giants</td>
              <td class="p-4 border-b border-white/5 text-slate-400">Adani Sportsline</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">Inaugural champions (2023)</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-white/5 text-white font-bold">Abu Dhabi Knight Riders</td>
              <td class="p-4 border-b border-white/5 text-slate-400">Knight Riders Group (KKR)</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">Star names, still searching for a first title</td>
            </tr>
            <tr class="bg-[#111823]/50">
              <td class="p-4 text-white font-bold">Sharjah Warriorz</td>
              <td class="p-4 text-slate-400">Capri Global</td>
              <td class="p-4 text-slate-300 font-medium">The Sharjah crowd's team, perennial dark horses</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p class="mb-6 text-slate-300 leading-relaxed">Squads for the 2023, 2024 and 2025 seasons were all announced in the months preceding their opening fixtures, with the big overseas stars typically unveiled during the player registration and draft/signing windows. Expect the same to happen ahead of Season 5, as the ILT20's lucrative salary structure continues to attract white-ball stars from England, Australia, the West Indies and beyond. This section will be updated as the squad lists are officially confirmed.</p>

      <h3 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ef8c16] to-[#f4b860] mt-10 mb-6">ILT20 2026 Schedule</h3>
      <p class="mb-6 text-slate-300 leading-relaxed">The full list of fixtures is yet to be officially released, but it is expected to follow the same pattern as the previous seasons - with all six teams playing each other at the three UAE international stadiums, before a playoff final on 20 December 2026. Evening matches in the UAE are shown live in India on the Zee network's digital platforms, with the timing working out particularly well for Indian viewers given the proximity of the UAE to India - the matches start at 19:00 local time, which is 20:30 IST. This means the whole match finishes well before midnight IST, comfortably within prime time.</p>

      <h3 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ef8c16] to-[#f4b860] mt-10 mb-6">How to Watch ILT20 2026</h3>
      <p class="mb-6 text-slate-300 leading-relaxed">In India, the ILT20 has been telecast and streamed on the Zee network's platforms in recent seasons; if you're used to catching the other leagues on other apps, make sure to check Zee for the ILT20. Elsewhere, coverage runs through regional sports networks. As with all the other leagues, make sure to check the official ILT20 website for the most up-to-date information on the availability of the ILT20 in your region.</p>
    `
  },
  {
    id: 'sa20-2027',
    title: 'SA20 2027: Schedule, Teams, Auction & Everything About Season 5 of South Africa\'s T20 League',
    excerpt: 'SA20 2027 is expected December 2026–January 2027 with the auction in September. Sunrisers Eastern Cape defend a third title. Teams, past winners, how to watch and FAQs.',
    category: 'Tournament Guide',
    date: 'July 8, 2026',
    readTime: '10 min read',
    emoji: '🏏',
    color: 'from-orange-900/30 to-[#111823]',
    content: `
      <p class="mb-6 text-slate-300 leading-relaxed">Four SA20 seasons, including three by one team. Sunrisers Eastern Cape have made South Africa's franchise tournament their personal trophy cabinet, but the big question ahead of season five - due to be held across December 2026 and January 2027 - is how many others could follow. The league's exact dates have yet to be announced, but the pattern (last season ran 26 December to 25 January) and traditional September auction are likely to be followed. This page will be regularly updated with any further news.</p>

      <p class="mb-6 text-slate-300 leading-relaxed">New to the SA20? Six teams, all owned by IPL franchises, have contested the tournament which has taken place during the South African summer while the rest of the cricketing world has been dormant. It has since evolved into the second most popular T20 league on the planet.</p>
      
      <h3 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ef8c16] to-[#f4b860] mt-10 mb-6">SA20 2027: The Details</h3>
      <div class="overflow-x-auto mb-8 bg-[#0d131c] rounded-2xl border border-white/5 p-1 shadow-xl">
        <table class="w-full text-left border-collapse text-sm md:text-base">
          <thead>
            <tr class="bg-[#151d29] rounded-t-xl">
              <th class="p-4 font-bold text-slate-200 border-b border-white/5 first:rounded-tl-xl">Detail</th>
              <th class="p-4 font-bold text-slate-200 border-b border-white/5 last:rounded-tr-xl">Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-4 border-b border-white/5 text-slate-400">Expected season window</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">Late December 2026 - January 2027 (TBC)</td>
            </tr>
            <tr class="bg-[#111823]/50">
              <td class="p-4 border-b border-white/5 text-slate-400">Expected auction</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">September 2026</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-white/5 text-slate-400">Teams</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">6 (all owned by IPL franchises)</td>
            </tr>
            <tr class="bg-[#111823]/50">
              <td class="p-4 border-b border-white/5 text-slate-400">Defending champions</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">Sunrisers Eastern Cape (3rd title)</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-white/5 text-slate-400">Format</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">T20, double round-robin group stage and knockout</td>
            </tr>
            <tr class="bg-[#111823]/50">
              <td class="p-4 text-slate-400">Last season</td>
              <td class="p-4 text-slate-300 font-medium">26 December 2025 - 25 January 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ef8c16] to-[#f4b860] mt-10 mb-6">SA20 2026: What Happened</h3>
      <p class="mb-6 text-slate-300 leading-relaxed">A tightly-contested final, where Dewald Brevis hit 101 from 56 for Pretoria Capitals, was ultimately overshadowed by a superb spell of bowling from Marco Jansen that saw him claim 3-10 from his spell. Brevis's century aside, Pretoria could only manage 158 for 7 — and the chasing Sunrisers Eastern Cape knocked it off with a 68 from Matthew Breetzke and an unbeaten 63 from captain Tristan Stubbs, winning by six wickets with an unbroken 114-run stand.</p>
      <p class="mb-6 text-slate-300 leading-relaxed">That's three titles in four years for the Gqeberha-based giants, whose only miss came in 2025, when their arch-rivals MI Cape Town lifted the trophy. These are the only two franchises to have won the tournament thus far.</p>
      
      <h3 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ef8c16] to-[#f4b860] mt-10 mb-6">SA20 Teams: The Six Franchises</h3>
      <div class="overflow-x-auto mb-8 bg-[#0d131c] rounded-2xl border border-white/5 p-1 shadow-xl">
        <table class="w-full text-left border-collapse text-sm md:text-base">
          <thead>
            <tr class="bg-[#151d29] rounded-t-xl">
              <th class="p-4 font-bold text-slate-200 border-b border-white/5 first:rounded-tl-xl">Team</th>
              <th class="p-4 font-bold text-slate-200 border-b border-white/5">IPL Owner</th>
              <th class="p-4 font-bold text-slate-200 border-b border-white/5 last:rounded-tr-xl">Venue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-4 border-b border-white/5 text-white font-bold">Sunrisers Eastern Cape</td>
              <td class="p-4 border-b border-white/5 text-slate-400">Sunrisers Hyderabad</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">St George's Park, Gqeberha</td>
            </tr>
            <tr class="bg-[#111823]/50">
              <td class="p-4 border-b border-white/5 text-white font-bold">MI Cape Town</td>
              <td class="p-4 border-b border-white/5 text-slate-400">Mumbai Indians</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">Newlands, Cape Town</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-white/5 text-white font-bold">Joburg Super Kings</td>
              <td class="p-4 border-b border-white/5 text-slate-400">Chennai Super Kings</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">Wanderers, Johannesburg</td>
            </tr>
            <tr class="bg-[#111823]/50">
              <td class="p-4 border-b border-white/5 text-white font-bold">Paarl Royals</td>
              <td class="p-4 border-b border-white/5 text-slate-400">Rajasthan Royals</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">Boland Park, Paarl</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-white/5 text-white font-bold">Pretoria Capitals</td>
              <td class="p-4 border-b border-white/5 text-slate-400">Delhi Capitals</td>
              <td class="p-4 border-b border-white/5 text-slate-300 font-medium">SuperSport Park, Centurion</td>
            </tr>
            <tr class="bg-[#111823]/50">
              <td class="p-4 text-white font-bold">Durban's Super Giants</td>
              <td class="p-4 text-slate-400">Lucknow Super Giants</td>
              <td class="p-4 text-slate-300 font-medium">Kingsmead, Durban</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p class="mb-6 text-slate-300 leading-relaxed">As South Africa's answer to England's T20 Blast, the SA20 has the advantage of all franchises being owned by IPL teams. This has helped to create a tournament that serves both as a scouting ground for the IPL and an overflow for South Africa's white-ball talent, as the likes of Dwaine Pretorius, Brevis and Jansen - all SA20 regulars - have enjoyed huge success overseas. The details of the squad rebuild ahead of the fifth season will be discussed in the next few months leading up to the September 2026 auction.</p>
    `
  },
  {
    id: 'ipl-betting-tips-2024',
    title: 'Top IPL Betting Tips for 2026 Season',
    excerpt: 'Get the best strategies for IPL betting this season. Learn how to analyze team performance, pitch conditions, and player form to maximize your winnings.',
    category: 'Cricket Betting',
    date: 'June 1, 2026',
    readTime: '5 min read',
    emoji: '📈',
    color: 'from-amber-900/30 to-[#111823]',
    content: `
      <p class="mb-6 text-slate-300 leading-relaxed">The Indian Premier League (IPL) 2026 is set to be one of the most exciting tournaments in cricket history. With teams packed with international stars and emerging domestic talents, betting on IPL matches requires deep analysis and a strategic approach. Here is our comprehensive guide to help you make informed decisions and get the most out of your Tiger365 ID.</p>
      
      <h3 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ef8c16] to-[#f4b860] mt-10 mb-6">1. Understand Pitch and Weather Conditions</h3>
      <p class="mb-6 text-slate-300 leading-relaxed">Pitch conditions play a vital role in the outcome of T20 matches in India. Venues like Wankhede (Mumbai) and Chinnaswamy (Bengaluru) are historically high-scoring due to short boundaries and flat wickets, making them ideal for backing the team chasing. On the other hand, slow, spin-friendly pitches like Chepauk (Chennai) favor teams with quality spin bowlers and require a different strategy.</p>
      
      <h3 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ef8c16] to-[#f4b860] mt-10 mb-6">2. Analyze Player Form and Matchups</h3>
      <p class="mb-6 text-slate-300 leading-relaxed">Pre-match matchups are highly critical. Check head-to-head stats of key batsmen against specific bowlers. For instance, if an opening batsman struggles against left-arm fast bowling, look at the opponent's bowling attack. Using your Tiger365 exchange ID, you can capitalize on these specific matchups live as they unfold.</p>
      
      <h3 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ef8c16] to-[#f4b860] mt-10 mb-6">3. Live Betting is Key</h3>
      <p class="mb-6 text-slate-300 leading-relaxed">T20 cricket swings rapidly. Backing a team before the match begins might offer lower odds compared to wait-and-watch tactics. Live betting on the Tiger365 platform allows you to assess the game's tempo, the dew factor in night matches, and the exact match situation before placing your bets.</p>
    `
  }
];

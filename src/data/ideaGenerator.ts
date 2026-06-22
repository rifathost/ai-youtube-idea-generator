export interface GeneratedOutput {
  ideas: string[];
  titles: string[];
  thumbnailTexts: string[];
  hookLines: string[];
  seoKeywords: string[];
  difficultyScore: number;
  viralPotentialScore: number;
}

// ─── Template Banks ───────────────────────────────────────────────

const ideaTemplates = [
  "I Tried {niche} For 30 Days – Here's What Happened",
  "Why Nobody Talks About This {niche} Secret",
  "The {niche} Mistake 90% Of Beginners Make",
  "{niche} vs {niche} – Which Is Actually Better?",
  "How I Made ₹1L/Month Using {niche} (No Clickbait)",
  "The Fastest Way To Learn {niche} In 2025",
  "I Tested 10 {niche} Tips – Only 2 Actually Work",
  "Complete {niche} Roadmap For {audience} (2025 Edition)",
  "Hidden {niche} Tricks That Experts Don't Share",
  "{niche} Myths That Are Keeping You Broke/Stuck",
  "I Quit {niche} After Discovering This",
  "Ultimate Beginner's Guide To {niche} in 2025",
  "I Spent ₹10,000 On {niche} – Was It Worth It?",
  "Why {niche} Is The Best Skill To Learn Right Now",
  "Honest Review: Best {niche} Tools/Apps Compared",
  "My {niche} Journey: From Zero To Results",
  "{niche} Case Study: What Actually Works In 2025",
  "Stop Doing This In {niche} (It's Killing Your Growth)",
  "Top 7 {niche} Secrets That Changed My Life",
  "I Interviewed 10 {niche} Experts – Here's What They Said",
];

const titleTemplates = [
  "🔥 {niche} Blueprint That No One Shows You (2025)",
  "⚡ I Did {niche} For 1 Week – Shocking Results",
  "🚀 How To Master {niche} Faster Than 99% Of People",
  "💡 The {niche} Strategy That Changed Everything",
  "❌ Stop Wasting Time On {niche} – Do THIS Instead",
  "✅ {niche} Step-by-Step Guide For {audience}",
  "💰 Earn With {niche}: The Complete Truth",
  "🎯 I Found The Best {niche} Method (Tested & Proven)",
  "📱 {niche} Tutorial: From Beginner To Pro In 7 Days",
  "🧠 Why Smart People Choose {niche} To Get Ahead",
  "⭐ The Ultimate {niche} Checklist You Need In 2025",
  "🔑 Unlock {niche} Success With These Simple Steps",
  "📊 {niche} vs Traditional Methods – Data Reveals All",
  "🎓 Learn {niche} Free In 2025 (Full Roadmap)",
  "🌟 How I Cracked {niche} In 30 Days (Full Breakdown)",
];

const thumbnailTemplates = [
  "I TRIED {NICHE} FOR 30 DAYS",
  "THIS CHANGED EVERYTHING",
  "{NICHE} SECRET REVEALED",
  "DO THIS BEFORE IT'S TOO LATE",
  "HOW I WENT FROM 0 TO PRO",
  "NOBODY TELLS YOU THIS",
  "THE TRUTH ABOUT {NICHE}",
  "STOP MAKING THIS MISTAKE",
  "WORKS IN 2025 ✅",
  "I WAS SHOCKED 😱",
];

const hookTemplates = [
  "What if I told you that most people are doing {niche} completely wrong? Stay till the end because this changes everything.",
  "In the next {duration}, I'm going to show you the exact {niche} strategy that helped me achieve results nobody talks about.",
  "I made every possible mistake in {niche} so you don't have to. Here's what actually works in 2025.",
  "Before you spend another minute on {niche}, watch this video first. This one tip could save you months of wasted effort.",
  "99% of {audience} never reach their {niche} goals – and after watching this, you'll understand exactly why.",
  "This is the {niche} video I wish I had when I started. If you're a {audience}, this is for you.",
  "The biggest {niche} lie being sold online right now – and the truth that nobody in this space wants you to know.",
  "I tested every {niche} method I could find. Some were terrible. One was absolutely game-changing. Let me show you.",
];

const keywordBanks: Record<string, string[]> = {
  general: [
    "viral YouTube ideas 2025", "YouTube growth tips", "trending video ideas",
    "YouTube SEO strategy", "content creation tips", "YouTube algorithm 2025",
    "how to grow YouTube channel", "YouTube niche ideas",
  ],
  tech: [
    "tech tutorial", "best tech gadgets", "AI tools 2025", "software review",
    "coding for beginners", "tech news Hindi", "smartphone tips",
  ],
  finance: [
    "make money online", "passive income ideas", "stock market basics",
    "budgeting tips", "financial freedom", "investment guide",
  ],
  fitness: [
    "home workout routine", "weight loss tips", "gym for beginners",
    "diet plan India", "fitness motivation", "yoga for beginners",
  ],
  education: [
    "study tips students", "exam preparation", "online learning",
    "skill development", "career guidance India", "free courses",
  ],
  gaming: [
    "mobile gaming tips", "BGMI tips and tricks", "game review",
    "gaming setup India", "earn from gaming", "gaming highlights",
  ],
  cooking: [
    "easy recipe Indian", "quick breakfast ideas", "healthy meal prep",
    "street food recipe", "restaurant style cooking", "diet recipes",
  ],
  travel: [
    "budget travel India", "solo travel tips", "hidden travel spots",
    "travel vlog India", "cheap flights tips", "best places to visit",
  ],
  business: [
    "startup ideas 2025", "business tips beginners", "dropshipping India",
    "freelancing guide", "digital marketing tips", "online business ideas",
  ],
  lifestyle: [
    "morning routine productive", "self improvement tips", "daily habits",
    "motivation Hindi", "life hacks 2025", "productivity tips",
  ],
};

const videoTypePrefixes: Record<string, string> = {
  "Long Video": "In-depth:",
  "Shorts": "60-sec:",
  "Tutorial": "How-To:",
  "Review": "Honest Review:",
  "Faceless": "Voiceover:",
};

const languageSuffixes: Record<string, string> = {
  English: "",
  Hindi: " (हिंदी में)",
  Hinglish: " (Hinglish)",
};

// ─── Helpers ──────────────────────────────────────────────────────

const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const shuffled = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const fillTemplate = (template: string, niche: string, audience: string): string => {
  const nicheWord = capitalize(niche.trim() || "Content Creation");
  const audienceWord = audience.trim() || "Beginners";
  const duration = pick(["5 minutes", "10 minutes", "this video"]);

  return template
    .replace(/{niche}/gi, nicheWord)
    .replace(/{NICHE}/g, nicheWord.toUpperCase())
    .replace(/{audience}/gi, audienceWord)
    .replace(/{duration}/gi, duration);
};

// ─── Detect Category For Keywords ────────────────────────────────

const detectCategory = (niche: string): string => {
  const lower = niche.toLowerCase();
  if (/tech|coding|programming|ai|software|gadget|computer/.test(lower)) return "tech";
  if (/finance|money|invest|stock|earn|income|budget/.test(lower)) return "finance";
  if (/fitness|gym|workout|yoga|health|diet|weight/.test(lower)) return "fitness";
  if (/study|education|exam|learn|course|school|college/.test(lower)) return "education";
  if (/game|gaming|bgmi|pubg|free fire|esport/.test(lower)) return "gaming";
  if (/cook|recipe|food|kitchen|restaurant/.test(lower)) return "cooking";
  if (/travel|trip|vlog|tour|place|destination/.test(lower)) return "travel";
  if (/business|startup|entrepreneur|freelanc|dropship/.test(lower)) return "business";
  if (/lifestyle|motivation|routine|habit|self|personal/.test(lower)) return "lifestyle";
  return "general";
};

// ─── Main Generator ───────────────────────────────────────────────

export const generateIdeas = (
  niche: string,
  audience: string,
  videoType: string,
  language: string
): GeneratedOutput => {
  const prefix = videoTypePrefixes[videoType] || "";
  const suffix = languageSuffixes[language] || "";
  const category = detectCategory(niche);
  const nicheWords = niche.trim() || "Content Creation";

  // Generate 10 unique ideas
  const rawIdeas = shuffled(ideaTemplates).slice(0, 10);
  const ideas = rawIdeas.map((t) => {
    const base = fillTemplate(t, nicheWords, audience);
    return prefix ? `${prefix} ${base}${suffix}` : `${base}${suffix}`;
  });

  // Generate 10 catchy titles
  const allTitleTemplates = [...titleTemplates, ...ideaTemplates.slice(10)];
  const rawTitles = shuffled(allTitleTemplates).slice(0, 10);
  const titles = rawTitles.map((t) => {
    const base = fillTemplate(t, nicheWords, audience);
    return base + suffix;
  });

  // Generate 5 thumbnail texts
  const rawThumbs = shuffled(thumbnailTemplates).slice(0, 5);
  const thumbnailTexts = rawThumbs.map((t) =>
    fillTemplate(t, nicheWords, audience)
  );

  // Generate 5 hook lines
  const rawHooks = shuffled(hookTemplates).slice(0, 5);
  const hookLines = rawHooks.map((t) =>
    fillTemplate(t, nicheWords, audience)
  );

  // SEO Keywords
  const domainKeywords = keywordBanks[category] || keywordBanks.general;
  const generalKeywords = keywordBanks.general;
  const nicheKeywords = [
    `${nicheWords} tips 2025`,
    `${nicheWords} for beginners`,
    `best ${nicheWords} channel`,
    `${nicheWords} tutorial Hindi`,
    `${nicheWords} in India`,
  ];
  const allKeywords = shuffled([...domainKeywords, ...generalKeywords, ...nicheKeywords]);
  const seoKeywords = Array.from(new Set(allKeywords)).slice(0, 12);

  // Scores – influenced by video type and language
  const baseViral = 60 + Math.floor(Math.random() * 30);
  const baseDiff = 25 + Math.floor(Math.random() * 40);

  const viralBonus = videoType === "Shorts" ? 12 : videoType === "Tutorial" ? 8 : 0;
  const langBonus = language === "Hinglish" ? 10 : language === "Hindi" ? 7 : 0;

  const viralPotentialScore = Math.min(99, baseViral + viralBonus + langBonus);
  const difficultyScore = Math.max(10, Math.min(90, baseDiff));

  return {
    ideas,
    titles,
    thumbnailTexts,
    hookLines,
    seoKeywords,
    difficultyScore,
    viralPotentialScore,
  };
};

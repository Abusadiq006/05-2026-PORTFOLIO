export const HERO_DATA = {
    accent: "FARMER ABUSADIQ / FULL-STACK PORTFOLIO",
    mainTitle: "Building Reliable Products With Motion, Clarity, and Clean Architecture",
    subTitle: "Full-stack software engineer focused on resilient APIs, secure integrations, and polished interfaces that feel fast, useful, and memorable.",
    metrics: [
        { label: "Frontend Engines", value: "Next.js / React / Vue" },
        { label: "Backend Core", value: "Node.js / Nest.js / Express" },
        { label: "Data Integrity", value: "Supabase / Mongo / Firebase" }
    ]
}

export const PROJECTS = [
    {
    id: 1,
    title: "BridgePay Dashboard",
    category: "Fintech Architecture",
    description: "A wedding vendor payment and budget management platform with multi-party payout workflows, real-time ledger tracking, and clean dashboard interactions.",
    frontend: ["Next.js", "TailwindCSS", "React", "Framer Motion"],
    backend: ["Node.js", "Express.js", "Supabase Auth"],
    testing: "Postman Verified",
    liveUrl: "https://bridgepay-dashboard.vercel.app",
    githubUrl: "https://github.com/Abusadiq006/bridge-pay-dashboard",
    image: "/project-bridgepay.svg"
  },
  {
    id: 2,
    title: "FarmApp Ecosystem",
    category: "Agritech Platform",
    description: "A full-stack agricultural production management system with payment integrations, harvest tracking, and supply-chain sales workflows.",
    frontend: ["React.js", "TailwindCSS", "HTML5"],
    backend: ["Node.js", "Express.js", "MongoDB"],
    testing: "Insomnia Verified",
    liveUrl: "https://farmapp.vercel.app",
    githubUrl: "https://github.com/Abusadiq006/farmapp",
    image: "/project-farmapp.svg"
  }
]

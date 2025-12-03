import React from 'react';
import { Link } from 'react-router-dom';

const Matching: React.FC = () => {
  const companies = [
    {
      id: "innovate-inc",
      name: "Innovate Inc.",
      industry: "SaaS Development",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6pwBV0sKt7kgVsjRehRqpQ5icR6Q11NWJxonPN8ows0WvwkUE3zHKSDnPA6BOn6nZ6-8r8M3XaFopUkxNvYHsJqW3GDyDG1_4BSlwRE3zxYfF0v450Cf3KwMh9GXsFmtHkj5aWEugP1BTFRF8yR5axtcnlM0-J5b2vJUlKrylPwILjZw2KMtxmIPWPto1nnqtIlepsV61OUjmC0FDe8Hgd6G8ZK3uKKzEmemztSns4L6fdpOKQyeO3wbCNCjxM7MkDJH-1tB0x8w",
      score: 88,
      reason: {
         issueMatch: "92%",
         knowhow: "85%",
         financial: "A+"
      },
      synergy: "Strong synergy in product philosophy and target customer base.",
      strengths: ["AI-driven Analytics", "Enterprise SaaS Focus", "Global Market Expansion"]
    },
    {
      id: "quantumleap",
      name: "QuantumLeap Co.",
      industry: "AI & ML Solutions",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDC1IhKMbiEbpXwfTCVd7kKuSGyv0k7WTvtA678-XoMV7-c2JkkNxY66XDk8yuxMfa03TlFvXEZudcZEycnfK1tZ5wu5UoTAEgHEM_a5w0n8D65PdktX1wMvbSDPPx3KqKjtZ4ToFMgbmIPFwm6CpRm-Wq7tF_g3uFu01pN8tddAuAgIOFQqTLwN5lOosHDh3EhmgJM0d6CIU5ZEG_SMjmN9fpwVtdlTBVg87MscWMZJUpGyLHFxPpQdNOuvwyyrNbHzTKDU6OyCXk",
      score: 82,
      reason: {
         issueMatch: "88%",
         knowhow: "79%",
         financial: "A"
      },
      synergy: "High potential for technical integration and shared market goals.",
      strengths: ["Cutting-edge ML models", "Fintech Industry Expertise", "Scalable API infrastructure"]
    },
    {
      id: "futuretech",
      name: "FutureTech Solutions",
      industry: "Cloud Infrastructure",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB69TajbCZLZN9Y-OUVDYDjS6wnSILs2qOMBomEJ69pia19cmj6cUfjzZZQwpbUeeuoqFg7eitxAY47J-rBOqRcasRrd0kbldKOe54Gcdk8gk66ZpNYKhSnnct08FlLlbfiYxUDEqI0Sez3eknLFdPybWTnntPZ32vMWTqy4Il9FVFSqegYIWXYLTOFdhpi6HMhCpj_znSbwsNuSCEeDxFwyieUDqU2hwUwH7YPDiSpsfuFNmB4gaJRM5ku23e365K8QD-CmaErqmA",
      score: 75,
      reason: {
         issueMatch: "80%",
         knowhow: "72%",
         financial: "B+"
      },
      synergy: "Complementary tech stack; potential for a robust partnership.",
      strengths: ["High-Availability Clusters", "Cybersecurity Excellence", "Sustainable Data Centers"]
    }
  ];

  return (
    <div className="flex-1 p-8 overflow-y-auto h-full">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-text-light dark:text-white text-2xl font-bold tracking-tight">AI Recommended Companies</h2>
          <div className="flex items-center gap-2">
            <button className="flex size-9 items-center justify-center rounded-full border border-border-light dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
            </button>
            <button className="flex size-9 items-center justify-center rounded-full border border-border-light dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
               <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-6 gap-6 custom-scrollbar snap-x">
          {companies.map((company) => (
            <div key={company.id} className="snap-center flex w-96 shrink-0 flex-col gap-4 rounded-xl bg-white dark:bg-gray-900 p-5 shadow-sm border border-transparent hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <Link to={`/company/${company.id}`} className="flex items-center gap-4">
                <img className="size-12 rounded-lg object-cover" src={company.logo} alt={company.name} />
                <div className="flex flex-col">
                  <p className="text-text-light dark:text-white text-base font-semibold">{company.name}</p>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm">{company.industry}</p>
                </div>
              </Link>
              
              <div className="flex flex-col gap-3 rounded-lg p-3 bg-gradient-to-tr from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
                <p className="text-xs font-semibold text-blue-800 dark:text-blue-200 mb-1">AI Recommendation Reason</p>
                <div className="space-y-1 text-xs text-blue-600 dark:text-blue-300">
                    <div className="flex justify-between"><span>Issue Match:</span><span className="font-semibold">{company.reason.issueMatch}</span></div>
                    <div className="flex justify-between"><span>Knowhow:</span><span className="font-semibold">{company.reason.knowhow}</span></div>
                    <div className="flex justify-between"><span>Financial Score:</span><span className="font-semibold">{company.reason.financial}</span></div>
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-300 mt-2 pt-2 border-t border-blue-200 dark:border-blue-800/30">
                  <span className="font-semibold">Synergy:</span> {company.synergy}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-text-light dark:text-white text-sm font-medium">Strengths & Common Points:</p>
                <ul className="space-y-2 text-sm text-subtext-light dark:text-subtext-dark">
                    {company.strengths.map((s, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-base text-green-500">check_circle</span>
                            {s}
                        </li>
                    ))}
                </ul>
              </div>
              
              <div className="mt-auto flex items-end justify-between pt-4">
                 <div className="flex flex-col items-center">
                    <div className="relative size-12 flex items-center justify-center">
                        <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                            <circle className="text-gray-200 dark:text-gray-700" cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="3"></circle>
                            <circle className="text-primary" cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeDasharray={`${company.score}, 100`} strokeLinecap="round" strokeWidth="3"></circle>
                        </svg>
                        <span className="absolute text-sm font-semibold text-text-light dark:text-white">{company.score}%</span>
                    </div>
                    <p className="text-xs text-subtext-light dark:text-subtext-dark mt-1">Similarity</p>
                 </div>
                 <div className="flex items-center gap-2">
                    <button className="flex size-10 items-center justify-center rounded-lg border border-border-light dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-subtext-light dark:text-gray-400">
                        <span className="material-symbols-outlined">favorite</span>
                    </button>
                    <button className="flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white hover:bg-primary/90">Send Offer</button>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Matching;
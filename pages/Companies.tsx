import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../types';

const Companies: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  // モックデータ - 登録企業一覧
  const companies = [
    {
      id: "innovate-inc",
      name: "Innovate Inc.",
      industry: "SaaS Development",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6pwBV0sKt7kgVsjRehRqpQ5icR6Q11NWJxonPN8ows0WvwkUE3zHKSDnPA6BOn6nZ6-8r8M3XaFopUkxNvYHsJqW3GDyDG1_4BSlwRE3zxYfF0v450Cf3KwMh9GXsFmtHkj5aWEugP1BTFRF8yR5axtcnlM0-J5b2vJUlKrylPwILjZw2KMtxmIPWPto1nnqtIlepsV61OUjmC0FDe8Hgd6G8ZK3uKKzEmemztSns4L6fdpOKQyeO3wbCNCjxM7MkDJH-1tB0x8w",
      matchScore: 88,
      registeredDate: "2023-10-15",
      status: "Active"
    },
    {
      id: "quantumleap",
      name: "QuantumLeap Co.",
      industry: "AI & ML Solutions",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDC1IhKMbiEbpXwfTCVd7kKuSGyv0k7WTvtA678-XoMV7-c2JkkNxY66XDk8yuxMfa03TlFvXEZudcZEycnfK1tZ5wu5UoTAEgHEM_a5w0n8D65PdktX1wMvbSDPPx3KqKjtZ4ToFMgbmIPFwm6CpRm-Wq7tF_g3uFu01pN8tddAuAgIOFQqTLwN5lOosHDh3EhmgJM0d6CIU5ZEG_SMjmN9fpwVtdlTBVg87MscWMZJUpGyLHFxPpQdNOuvwyyrNbHzTKDU6OyCXk",
      matchScore: 82,
      registeredDate: "2023-10-20",
      status: "Active"
    },
    {
      id: "futuretech",
      name: "FutureTech Solutions",
      industry: "Cloud Infrastructure",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB69TajbCZLZN9Y-OUVDYDjS6wnSILs2qOMBomEJ69pia19cmj6cUfjzZZQwpbUeeuoqFg7eitxAY47J-rBOqRcasRrd0kbldKOe54Gcdk8gk66ZpNYKhSnnct08FlLlbfiYxUDEqI0Sez3eknLFdPybWTnntPZ32vMWTqy4Il9FVFSqegYIWXYLTOFdhpi6HMhCpj_znSbwsNuSCEeDxFwyieUDqU2hwUwH7YPDiSpsfuFNmB4gaJRM5ku23e365K8QD-CmaErqmA",
      matchScore: 75,
      registeredDate: "2023-10-25",
      status: "Active"
    },
    {
      id: "stripe",
      name: "Stripe",
      industry: "Fintech",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0oH0AIaWHkxE3NGB0mA3r_HnD6SBRxoYLiqKDPqR1d06QlBN_gu27fvzerFJ2HxsI4toHMPRvq-vaubclHJAMS9crIAFZqcImuGP0F5Q-jxgeIKiuCESnxAI30w8sQcS0PsMe4P2jH8oM2v_m3DJ5GW9sCBfMTWODktiFk5i8-Ppa-XzWBgW6XTFsHd4cPQbwD70eNz261_rSpEbCwpNU31fmZ9pzUdlWmLGKML1XjMfXSs01CtABsVWN8V-SflLFwQ5sgROZ_BY",
      matchScore: 92,
      registeredDate: "2023-09-10",
      status: "Active"
    },
    {
      id: "notion",
      name: "Notion",
      industry: "Productivity Software",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIEfiPT5NiQmDIoJXAGqGrDIU1h5HvyUYXxNnZgg-vN9lfEjmkiHyb0_0OJQVhG_kPE3LXafQU91g1mAVYrgE32Qy4hIU4aPF_fsu2iy2fZVQsqqPyMjNPuK6RCpsvIZR9G4srOZAt_s39ahykYNbX29K01OY7xdaW0w4yFrdWFBaIiIG7E0jqRkbnYF6x9L6URFD5bwSqSPsk6bReY330ykGzgmfxQG2l9Urpet5lzzkIbOU5SipYUcQYtsJHbYjgqJeFH0uQnAQ",
      matchScore: 85,
      registeredDate: "2023-09-15",
      status: "Active"
    },
    {
      id: "salesforce",
      name: "Salesforce",
      industry: "CRM Platform",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMTif1Y_lAvpMQD5YSJpkcD-GZu1us8G2NvpM-AYSZBAFpKCAlZ0Cyqx6Yu8j6MVgBWFoa3MqHp4Jm0XsRuoCcr20BrApbbo1Am0S4vPZYyjWZwdsxQMrULZhJWKlQJRVe7icztkHGl83QNFIPC3W68OrdgOIVN881cqd08wa9Q2A-nO6ZP11D66Ur4sjndxyJdr98ni0gx--z8QED3r6ooCmZzz7sj0RMVjI8tQYa8m7nGu7QcM2ue0x5Nz7TPDczzzqCiKOZFo0",
      matchScore: 90,
      registeredDate: "2023-08-20",
      status: "Active"
    },
    {
      id: "google",
      name: "Google",
      industry: "AI & Search Tech",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEAsH5I4fMSwt7Tgwce_cVI11UENp5TvrPeZn91ISJTGKuP06TTZqkWd69KGKfBCQ2onsoBzRpmnyZwveej_8qlPPOkKlRa-UmuPJfXz60d7zmW1jBjCiiaWhqG6FJRPxjfpOYg9s62OINlPKQmIsdSCQE6qifAa4jMaT-bPxS1b9o6QUdtJWlHTTXBUfu4DNsHv0yeI-0XPvBn0ZqrRG8UgDvNV2qj7T482D-4W-8CgL-if4vkG-olqSLaMmWX9VrOGkgxscP9pA",
      matchScore: 88,
      registeredDate: "2023-08-25",
      status: "Active"
    },
    {
      id: "nextgen",
      name: "NextGen Solutions",
      industry: "Digital Marketing",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuADpc6gNapbe-GOouFbHLRcEDb7qz3JKbDNcREZRvknjxuqZyW4B1exFWqVRTieSWM-7xhhBNMfV_AO1MA2N6sn6aQvmS45vwe4YLjpaSnIXypH3cuDP53vWhsc4Qm4Z1KxQ6EYN8HidJEzcZKz7IvuvjaDCPtBF83wYq_mogQnTLbx2GQxoAD0clUcoEWLgvfnfpuSbXdlmGnBXQVH_B2zTcl1YsLzbLxp2NDhD4tRlo4R9mZryPKLdzPnXfVhKaKEKUnw8Ab8X-A",
      matchScore: 78,
      registeredDate: "2023-11-01",
      status: "Active"
    }
  ];

  // 業種の一意なリストを取得
  const industries = ['all', ...Array.from(new Set(companies.map(c => c.industry)))];

  // フィルタリング
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.industry.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || company.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="flex-1 p-8 overflow-y-auto h-full">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-2">
            登録企業一覧
          </h1>
          <p className="text-subtext-light dark:text-subtext-dark text-base">
            システムに登録されている企業の一覧です
          </p>
        </header>

        {/* Search and Filter */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-subtext-light dark:text-subtext-dark">
              <span className="material-symbols-outlined">search</span>
            </span>
            <input
              type="text"
              placeholder="企業名または業種で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-border-light dark:border-gray-700 text-text-light dark:text-white placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          <div className="sm:w-64">
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-border-light dark:border-gray-700 text-text-light dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary"
            >
              <option value="all">すべての業種</option>
              {industries.filter(i => i !== 'all').map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-subtext-light dark:text-subtext-dark">
            {filteredCompanies.length} 件の企業が見つかりました
          </p>
        </div>

        {/* Companies Grid */}
        {filteredCompanies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <Link
                key={company.id}
                to={`/company/${company.id}`}
                className="flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-900 p-6 border border-border-light dark:border-gray-800 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Company Header */}
                <div className="flex items-center gap-4">
                  <img
                    className="size-14 rounded-lg object-cover border border-border-light dark:border-gray-700"
                    src={company.logo}
                    alt={company.name}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-text-light dark:text-white text-lg font-semibold truncate">
                      {company.name}
                    </h3>
                    <p className="text-subtext-light dark:text-subtext-dark text-sm truncate">
                      {company.industry}
                    </p>
                  </div>
                </div>

                {/* Match Score */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-subtext-light dark:text-subtext-dark">
                      マッチスコア
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative size-10 flex items-center justify-center">
                      <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                        <circle
                          className="text-gray-200 dark:text-gray-700"
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                        <circle
                          className="text-primary"
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="currentColor"
                          strokeDasharray={`${company.matchScore}, 100`}
                          strokeLinecap="round"
                          strokeWidth="3"
                        />
                      </svg>
                      <span className="absolute text-xs font-semibold text-text-light dark:text-white">
                        {company.matchScore}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status and Date */}
                <div className="flex items-center justify-between pt-2 border-t border-border-light dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        company.status === 'Active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {company.status}
                    </span>
                  </div>
                  <p className="text-xs text-subtext-light dark:text-subtext-dark">
                    登録日: {company.registeredDate}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <span className="material-symbols-outlined text-6xl text-subtext-light dark:text-subtext-dark mb-4">
              search_off
            </span>
            <p className="text-lg font-medium text-text-light dark:text-white mb-2">
              企業が見つかりませんでした
            </p>
            <p className="text-sm text-subtext-light dark:text-subtext-dark">
              検索条件を変更してお試しください
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Companies;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RoutePath } from '../../types';

const AdminCompanies: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // モックデータ
  const companies = [
    {
      id: 'innovate',
      name: '株式会社イノベート',
      industry: 'IT / ソフトウェア',
      description: '中小企業向けに特化した業務効率化SaaSの開発と提供。',
      strengths: '直感的なUI/UXデザインと、手厚いカスタマーサポート。',
      issues: '新規顧客獲得のためのマーケティング戦略の立案と実行。',
      registeredDate: '2023-10-15',
    },
    {
      id: 'nextgen',
      name: 'NextGen Solutions',
      industry: 'AI & ML Solutions',
      description: 'AI技術を活用したビジネスソリューションの提供。',
      strengths: '最先端の機械学習技術と豊富な実績。',
      issues: 'グローバル市場への展開支援。',
      registeredDate: '2023-10-20',
    },
  ];

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 p-6 lg:p-10 overflow-y-auto h-full">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center size-8 rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">
              企業管理
            </h1>
          </div>
          <p className="text-subtext-light dark:text-subtext-dark text-base">登録企業の一覧と管理</p>
        </header>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-subtext-light dark:text-subtext-dark">
              <span className="material-symbols-outlined">search</span>
            </span>
            <input
              type="text"
              placeholder="企業名で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-border-light dark:border-border-dark text-text-light dark:text-white placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        {/* Companies List */}
        <div className="space-y-4">
          {filteredCompanies.map((company) => (
            <Link
              key={company.id}
              to={`/admin/companies/${company.id}`}
              className="block p-6 bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-light dark:text-white mb-2">
                    {company.name}
                  </h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark mb-1">
                    {company.industry}
                  </p>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark">
                    登録日: {company.registeredDate}
                  </p>
                </div>
                <span className="material-symbols-outlined text-subtext-light dark:text-subtext-dark">
                  chevron_right
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCompanies;


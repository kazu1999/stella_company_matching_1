import React, { useState } from 'react';

const AdminContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'list' | 'report' | 'seo'>('list');

  const articles = [
    {
      id: 1,
      title: 'B2Bマーケティング自動化の未来',
      status: '公開済み',
      statusColor: 'green',
      creationDate: '2023-10-26',
      lastUpdated: '2023-10-27',
    },
    {
      id: 2,
      title: 'AIを活用したリード獲得戦略',
      status: '下書き',
      statusColor: 'orange',
      creationDate: '2023-10-25',
      lastUpdated: '2023-10-26',
    },
    {
      id: 3,
      title: '2024年のSaaSトレンドトップ5',
      status: '非公開',
      statusColor: 'gray',
      creationDate: '2023-10-24',
      lastUpdated: '2023-10-24',
    },
    {
      id: 4,
      title: '効果的な顧客オンボーディングガイド',
      status: '公開済み',
      statusColor: 'green',
      creationDate: '2023-10-22',
      lastUpdated: '2023-10-23',
    },
  ];

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusClass = (color: string) => {
    const classes = {
      green: 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300',
      orange: 'bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300',
      gray: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300',
    };
    return classes[color as keyof typeof classes] || classes.gray;
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto h-full">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div className="flex flex-col gap-1">
            <p className="text-text-light dark:text-white text-3xl font-bold leading-tight">
              AI記事管理
            </p>
            <p className="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">
              AI生成記事の管理、編集、公開を行います。
            </p>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide shadow-sm hover:bg-primary/90">
            <span className="material-symbols-outlined text-xl">add_circle</span>
            <span className="truncate">新規記事作成</span>
          </button>
        </div>

        {/* SearchBar */}
        <div className="mb-6">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-subtext-light dark:text-subtext-dark flex bg-white dark:bg-gray-900/50 items-center justify-center pl-4 rounded-l-lg border border-border-light dark:border-border-dark border-r-0">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-light dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-white dark:bg-gray-900/50 focus:border-primary/50 h-full placeholder:text-subtext-light dark:placeholder:text-subtext-dark px-4 border-l-0 text-base font-normal leading-normal"
                placeholder="記事タイトルまたはキーワードで検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </label>
        </div>

        <div className="bg-white dark:bg-gray-900/50 rounded-xl shadow-sm">
          {/* Tabs */}
          <div className="pb-3 pt-2">
            <div className="flex border-b border-border-light dark:border-border-dark px-6 gap-8">
              <button
                onClick={() => setActiveTab('list')}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === 'list'
                    ? 'border-b-primary text-primary'
                    : 'border-b-transparent text-subtext-light dark:text-subtext-dark hover:text-text-light dark:hover:text-white'
                }`}
              >
                <p className="text-sm font-bold leading-normal">記事一覧</p>
              </button>
              <button
                onClick={() => setActiveTab('report')}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === 'report'
                    ? 'border-b-primary text-primary'
                    : 'border-b-transparent text-subtext-light dark:text-subtext-dark hover:text-text-light dark:hover:text-white'
                }`}
              >
                <p className="text-sm font-bold leading-normal">月次レポート設定</p>
              </button>
              <button
                onClick={() => setActiveTab('seo')}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === 'seo'
                    ? 'border-b-primary text-primary'
                    : 'border-b-transparent text-subtext-light dark:text-subtext-dark hover:text-text-light dark:hover:text-white'
                }`}
              >
                <p className="text-sm font-bold leading-normal">SEOテンプレート</p>
              </button>
            </div>
          </div>

          {/* Table */}
          {activeTab === 'list' && (
            <div className="px-6 py-4">
              <div className="flex overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border-light dark:border-border-dark">
                      <th className="px-4 py-3 text-left text-subtext-light dark:text-subtext-dark text-xs font-medium uppercase tracking-wider w-2/5">
                        記事タイトル
                      </th>
                      <th className="px-4 py-3 text-left text-subtext-light dark:text-subtext-dark text-xs font-medium uppercase tracking-wider w-1/5">
                        ステータス
                      </th>
                      <th className="px-4 py-3 text-left text-subtext-light dark:text-subtext-dark text-xs font-medium uppercase tracking-wider w-1/5">
                        作成日
                      </th>
                      <th className="px-4 py-3 text-left text-subtext-light dark:text-subtext-dark text-xs font-medium uppercase tracking-wider w-1/5">
                        最終更新日
                      </th>
                      <th className="px-4 py-3 text-right text-subtext-light dark:text-subtext-dark text-xs font-medium uppercase tracking-wider">
                        アクション
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredArticles.map((article) => (
                      <tr key={article.id} className="border-b border-border-light dark:border-border-dark/50">
                        <td className="h-[72px] px-4 py-2 text-text-light dark:text-white text-sm font-medium">
                          {article.title}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-sm">
                          <div
                            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${getStatusClass(
                              article.statusColor
                            )}`}
                          >
                            <span className="h-2 w-2 rounded-full bg-current"></span>
                            {article.status}
                          </div>
                        </td>
                        <td className="h-[72px] px-4 py-2 text-subtext-light dark:text-subtext-dark text-sm">
                          {article.creationDate}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-subtext-light dark:text-subtext-dark text-sm">
                          {article.lastUpdated}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-right">
                          <div className="flex justify-end gap-2">
                            <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-subtext-light dark:text-subtext-dark hover:text-text-light dark:hover:text-white">
                              <span className="material-symbols-outlined text-xl">edit</span>
                            </button>
                            <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-subtext-light dark:text-subtext-dark hover:text-text-light dark:hover:text-white">
                              <span className="material-symbols-outlined text-xl">visibility</span>
                            </button>
                            <button className="p-2 rounded-md hover:bg-red-100/50 dark:hover:bg-red-900/30 text-subtext-light dark:text-subtext-dark hover:text-red-600 dark:hover:text-red-400">
                              <span className="material-symbols-outlined text-xl">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'report' && (
            <div className="px-6 py-4">
              <p className="text-subtext-light dark:text-subtext-dark">月次レポート設定</p>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="px-6 py-4">
              <p className="text-subtext-light dark:text-subtext-dark">SEOテンプレート</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminContent;


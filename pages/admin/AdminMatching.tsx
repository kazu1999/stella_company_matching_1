import React, { useState } from 'react';

const AdminMatching: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMatch, setSelectedMatch] = useState<number | null>(0);

  const matches = [
    {
      id: 1,
      date: '2023-10-27 14:30',
      companies: ['Innovate Inc.', 'Quantum Solutions'],
      score: 92,
      status: '手動推薦',
      statusColor: 'green',
      lastAction: '2023-10-27 15:00',
      company1Logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIA423jr9r2zxGchsHvig_H2bp9TQ0syPMbdsfFw7-J8ym-NkEqL_k1eWft9fe_dOXXyzQ6Ufknv4xv5nvTotUIl1zo1C2TaQ2NKNDyMaa4cgKKhBagYx4X9iWMeHkF0BjWQDvKq9rcPmlGlLp0iVyx53mHm4gMY9FuraycOZ-87JCOO5b3T64sU9TJmuwL_uAQ6sBtAjzCPxR4Q1fMAsGtXbqV_bJub7YIdojS17oPde8j9YI1DzrfSmVLigk42r6xi7teYnd5Hg',
      company1Desc: 'AI駆動の物流ソリューションを開拓',
      company2Logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb6hfkxeZqM4mnYPYzH7i8c-Ylz-agFfvXCqOZ2Pp7k9zUk_OGVS0D4q-OGLuta4t-TGXvgG9kmPCPX3wUWru1vJAOH0_y6NPmgXcyn9CU2VEAc5jxoLxeqSZAyRtcqAqybuAXg46LcbEMxj7ebR9rVXgFx80fR2Mq7ShDe8_2vpVbG05PVPnwSebRT6vYwuXV0qjX2GkIswkALddFiqEb6lcFt-PUbZrNDyq5zMrE03Lxco7F5lQ35xrL_YyESygXUT_FnuGrmRs',
      company2Desc: '次世代量子コンピューティングハードウェア',
    },
    {
      id: 2,
      date: '2023-10-26 11:05',
      companies: ['Future Tech', 'Visionary Labs'],
      score: 88,
      status: '自動推薦',
      statusColor: 'gray',
      lastAction: '2023-10-26 11:05',
      company1Logo: '',
      company1Desc: '',
      company2Logo: '',
      company2Desc: '',
    },
    {
      id: 3,
      date: '2023-10-25 09:12',
      companies: ['Synergy Corp', 'Alpha Dynamics'],
      score: 75,
      status: '停止中',
      statusColor: 'red',
      lastAction: '2023-10-25 10:00',
      company1Logo: '',
      company1Desc: '',
      company2Logo: '',
      company2Desc: '',
    },
  ];

  const filteredMatches = matches.filter((match) =>
    match.companies.some((company) => company.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getStatusClass = (color: string) => {
    const classes = {
      green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
      red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    };
    return classes[color as keyof typeof classes] || classes.gray;
  };

  const getScoreClass = (score: number) => {
    if (score >= 90) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    if (score >= 80) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto h-full">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-wrap justify-between gap-3">
            <div className="flex flex-col gap-3">
              <h1 className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                マッチング管理
              </h1>
              <p className="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">
                マッチング履歴の表示、AIロジックのパラメータ調整、手動での推薦や停止を行います。
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-between items-center gap-4 bg-white dark:bg-gray-900 p-2 rounded-xl border border-border-light dark:border-border-dark">
            <div className="flex items-center gap-2 flex-wrap">
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-background-light dark:bg-background-dark px-4">
                <p className="text-sm font-medium leading-normal text-text-light dark:text-white">期間: 全て</p>
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-background-light dark:bg-background-dark px-4">
                <p className="text-sm font-medium leading-normal text-text-light dark:text-white">スコア: 全て</p>
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-background-light dark:bg-background-dark px-4">
                <p className="text-sm font-medium leading-normal text-text-light dark:text-white">ステータス: 全て</p>
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
              <label className="flex flex-col min-w-40 h-10 w-full sm:w-auto flex-1">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <span className="flex items-center justify-center pl-3 pr-2 bg-background-light dark:bg-background-dark rounded-l-lg material-symbols-outlined text-subtext-light dark:text-subtext-dark">
                    search
                  </span>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-sm placeholder:text-subtext-light dark:placeholder:text-subtext-dark border-none bg-background-light dark:bg-background-dark focus:ring-0"
                    placeholder="企業名で検索..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </label>
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-subtext-light dark:text-subtext-dark rounded-lg hover:bg-background-light dark:hover:bg-background-dark">
                <span className="material-symbols-outlined">download</span>
              </button>
              <button className="p-2 text-subtext-light dark:text-subtext-dark rounded-lg hover:bg-background-light dark:hover:bg-background-dark">
                <span className="material-symbols-outlined">refresh</span>
              </button>
            </div>
          </div>

          {/* Matches Table */}
          <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-border-light dark:border-border-dark">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase text-subtext-light dark:text-subtext-dark bg-background-light dark:bg-background-dark">
                  <tr>
                    <th className="px-6 py-3 rounded-l-lg" scope="col">
                      日時
                    </th>
                    <th className="px-6 py-3" scope="col">
                      企業
                    </th>
                    <th className="px-6 py-3 text-center" scope="col">
                      AIスコア
                    </th>
                    <th className="px-6 py-3 text-center" scope="col">
                      ステータス
                    </th>
                    <th className="px-6 py-3 rounded-r-lg" scope="col">
                      最終アクション
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMatches.map((match, index) => (
                    <tr
                      key={match.id}
                      onClick={() => setSelectedMatch(index)}
                      className={`border-b border-border-light dark:border-border-dark bg-white dark:bg-gray-900 cursor-pointer ${
                        selectedMatch === index
                          ? 'bg-primary/10 dark:bg-primary/20'
                          : 'hover:bg-primary/5 dark:hover:bg-primary/10'
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-text-light dark:text-white">{match.date}</td>
                      <td className="px-6 py-4 font-medium text-text-light dark:text-white">
                        {match.companies.join(' & ')}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getScoreClass(match.score)}`}
                        >
                          {match.score}%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getStatusClass(
                            match.statusColor
                          )}`}
                        >
                          {match.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-text-light dark:text-white">
                        {match.lastAction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column - Match Details */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
          <div className="sticky top-8 flex flex-col gap-6">
            {selectedMatch !== null && filteredMatches[selectedMatch] && (
              <>
                <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-t-xl border-b border-border-light dark:border-border-dark">
                    <h2 className="text-lg font-bold text-text-light dark:text-white">マッチング詳細</h2>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {filteredMatches[selectedMatch].company1Logo && (
                      <>
                        <div className="flex items-center gap-4">
                          <img
                            className="w-12 h-12 rounded-lg"
                            src={filteredMatches[selectedMatch].company1Logo}
                            alt="Company logo"
                          />
                          <div className="flex-1">
                            <h3 className="font-bold text-text-light dark:text-white">
                              {filteredMatches[selectedMatch].companies[0]}
                            </h3>
                            <p className="text-sm text-subtext-light dark:text-subtext-dark">
                              {filteredMatches[selectedMatch].company1Desc}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <img
                            className="w-12 h-12 rounded-lg"
                            src={filteredMatches[selectedMatch].company2Logo}
                            alt="Company logo"
                          />
                          <div className="flex-1">
                            <h3 className="font-bold text-text-light dark:text-white">
                              {filteredMatches[selectedMatch].companies[1]}
                            </h3>
                            <p className="text-sm text-subtext-light dark:text-subtext-dark">
                              {filteredMatches[selectedMatch].company2Desc}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark">
                  <div className="p-4 border-b border-border-light dark:border-border-dark">
                    <h2 className="text-lg font-bold text-text-light dark:text-white">AIマッチングロジック設定</h2>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-text-light dark:text-white">
                          事業シナジー
                        </label>
                        <input
                          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                          type="range"
                          defaultValue={80}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-text-light dark:text-white">
                          技術的補完性
                        </label>
                        <input
                          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                          type="range"
                          defaultValue={95}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMatching;


import React, { useState } from 'react';

const AdminOffers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [periodFilter, setPeriodFilter] = useState('all');

  const offers = [
    {
      id: 'A5B2C3',
      senderCompany: '株式会社テックリード',
      receiverUser: '田中 雄大',
      date: '2023-10-27 10:30',
      status: '進行中',
      statusColor: 'blue',
    },
    {
      id: 'D4E5F6',
      senderCompany: 'ネクストステップ合同会社',
      receiverUser: '佐藤 愛美',
      date: '2023-10-26 15:00',
      status: '完了',
      statusColor: 'green',
    },
    {
      id: 'G7H8I9',
      senderCompany: 'イノベート・ソリューションズ',
      receiverUser: '鈴木 誠',
      date: '2023-10-25 18:45',
      status: '停止中',
      statusColor: 'red',
    },
    {
      id: 'J1K2L3',
      senderCompany: 'グローバルコネクト株式会社',
      receiverUser: '高橋 直樹',
      date: '2023-10-24 09:12',
      status: 'キャンセル',
      statusColor: 'gray',
    },
  ];

  const filteredOffers = offers.filter((offer) => {
    const matchesSearch =
      offer.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.senderCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offer.receiverUser.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || offer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusClass = (color: string) => {
    const classes = {
      blue: 'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300',
      green: 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-300',
      red: 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-300',
      gray: 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300',
    };
    return classes[color as keyof typeof classes] || classes.gray;
  };

  return (
    <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto h-full">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading & Search */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <h1 className="text-text-light dark:text-white text-3xl font-bold tracking-tight">
            オファー履歴管理
          </h1>
          <div className="w-full sm:w-auto sm:max-w-xs">
            <label className="flex flex-col h-11 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-subtext-light dark:text-subtext-dark flex border border-r-0 border-border-light dark:border-border-dark bg-white dark:bg-gray-800 items-center justify-center pl-3 rounded-l-lg">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-white dark:bg-gray-800 h-full placeholder:text-subtext-light dark:placeholder:text-subtext-dark px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal"
                  placeholder="ID, 企業名等で検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </label>
          </div>
        </div>

        {/* Filter & Action Bar */}
        <div className="flex flex-wrap justify-between items-center gap-3 mb-4 p-3 bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark">
          <div className="flex gap-2 flex-wrap">
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-800 px-3">
              <span className="material-symbols-outlined text-base">sell</span>
              <p className="text-text-light dark:text-white text-sm font-medium leading-normal">
                ステータス: {statusFilter === 'all' ? 'すべて' : statusFilter}
              </p>
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-800 px-3">
              <span className="material-symbols-outlined text-base">calendar_month</span>
              <p className="text-text-light dark:text-white text-sm font-medium leading-normal">
                期間: {periodFilter === 'all' ? '全期間' : periodFilter}
              </p>
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
          </div>
          <button className="flex items-center justify-center rounded-lg h-10 bg-primary text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] px-4 hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined text-xl fill-icon">download</span>
            <span className="truncate">CSVエクスポート</span>
          </button>
        </div>

        {/* Offer History Table */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-subtext-light dark:text-subtext-dark">
              <thead className="text-xs text-text-light dark:text-white uppercase bg-gray-50 dark:bg-gray-800/50">
                <tr>
                  <th className="px-6 py-3" scope="col">
                    オファーID
                  </th>
                  <th className="px-6 py-3" scope="col">
                    送信企業
                  </th>
                  <th className="px-6 py-3" scope="col">
                    受信ユーザー
                  </th>
                  <th className="px-6 py-3" scope="col">
                    オファー日時
                  </th>
                  <th className="px-6 py-3" scope="col">
                    ステータス
                  </th>
                  <th className="px-6 py-3 text-right" scope="col">
                    アクション
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredOffers.map((offer) => (
                  <tr
                    key={offer.id}
                    className="bg-white dark:bg-gray-900 border-b dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <td className="px-6 py-4 font-mono text-text-light dark:text-white">#{offer.id}</td>
                    <td className="px-6 py-4 font-medium text-text-light dark:text-white">
                      {offer.senderCompany}
                    </td>
                    <td className="px-6 py-4 font-medium text-text-light dark:text-white">
                      {offer.receiverUser}
                    </td>
                    <td className="px-6 py-4 text-text-light dark:text-white">{offer.date}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium ${getStatusClass(
                          offer.statusColor
                        )}`}
                      >
                        {offer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-subtext-light dark:text-subtext-dark">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <nav aria-label="Table navigation" className="flex items-center justify-between p-4">
            <span className="text-sm font-normal text-subtext-light dark:text-subtext-dark">
              <span className="font-semibold text-text-light dark:text-white">1-10</span> /{' '}
              <span className="font-semibold text-text-light dark:text-white">100</span> 件
            </span>
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <button className="px-3 h-8 ml-0 leading-tight text-subtext-light dark:text-subtext-dark bg-white dark:bg-gray-800 border border-border-light dark:border-border-dark rounded-l-lg hover:bg-gray-100 hover:text-text-light dark:hover:bg-gray-700 dark:hover:text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
              </li>
              <li>
                <button className="px-3 h-8 leading-tight text-subtext-light dark:text-subtext-dark bg-white dark:bg-gray-800 border border-border-light dark:border-border-dark hover:bg-gray-100 hover:text-text-light dark:hover:bg-gray-700 dark:hover:text-white flex items-center justify-center">
                  1
                </button>
              </li>
              <li>
                <button className="px-3 h-8 leading-tight text-primary bg-primary/10 border border-primary/50 hover:bg-primary/20 hover:text-primary-700 dark:border-primary/50 dark:text-white dark:hover:bg-primary/30 dark:hover:text-white flex items-center justify-center">
                  2
                </button>
              </li>
              <li>
                <button className="px-3 h-8 leading-tight text-subtext-light dark:text-subtext-dark bg-white dark:bg-gray-800 border border-border-light dark:border-border-dark rounded-r-lg hover:bg-gray-100 hover:text-text-light dark:hover:bg-gray-700 dark:hover:text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminOffers;


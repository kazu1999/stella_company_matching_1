import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AdminDashboard: React.FC = () => {
  const [announcement, setAnnouncement] = useState({
    title: '',
    content: '',
    priority: 'normal', // normal, high
  });

  const handleSendAnnouncement = () => {
    if (!announcement.title || !announcement.content) {
      alert('タイトルと本文を入力してください');
      return;
    }

    const newAnnouncement = {
      id: Date.now(),
      title: announcement.title,
      content: announcement.content,
      priority: announcement.priority,
      date: new Date().toLocaleDateString('ja-JP'),
    };

    // ローカルストレージに保存（既存のお知らせに追加）
    const storedAnnouncements = localStorage.getItem('system_announcements');
    const announcements = storedAnnouncements ? JSON.parse(storedAnnouncements) : [];
    const updatedAnnouncements = [newAnnouncement, ...announcements];
    
    localStorage.setItem('system_announcements', JSON.stringify(updatedAnnouncements));

    alert('お知らせを配信しました');
    setAnnouncement({ title: '', content: '', priority: 'normal' });
    
    // イベントを発火して、別タブなどで開いている場合にも反映できるようにする（簡易的）
    window.dispatchEvent(new Event('storage'));
  };

  const chartData = [
    { name: '1日', count: 12 },
    { name: '5日', count: 18 },
    { name: '10日', count: 15 },
    { name: '15日', count: 25 },
    { name: '20日', count: 22 },
    { name: '25日', count: 30 },
    { name: '30日', count: 28 },
  ];

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between gap-4 p-6 bg-white dark:bg-gray-900 border-b border-border-light dark:border-border-dark">
        <p className="text-text-light dark:text-white text-3xl font-black leading-tight tracking-[-0.03em]">
          ダッシュボード
        </p>
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          {/* SearchBar */}
          <label className="flex flex-col h-11 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-subtext-light dark:text-subtext-dark flex bg-background-light dark:bg-background-dark items-center justify-center pl-4 rounded-l-lg border-y border-l border-border-light dark:border-border-dark">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-light dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary focus:ring-inset border-y border-r border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-full placeholder:text-subtext-light dark:placeholder:text-subtext-dark px-4 text-base font-normal leading-normal"
                placeholder="検索..."
              />
            </div>
          </label>
          {/* ToolBar */}
          <button className="p-2.5 rounded-lg text-subtext-light dark:text-subtext-dark border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-white/5">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      {/* Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark">
                <p className="text-subtext-light dark:text-subtext-dark text-base font-medium leading-normal">
                  登録企業総数
                </p>
                <p className="text-text-light dark:text-white tracking-tight text-3xl font-bold leading-tight">
                  1,234
                </p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-green-500 text-base">arrow_upward</span>
                  <p className="text-green-500 text-sm font-medium leading-normal">+5.2%</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark">
                <p className="text-subtext-light dark:text-subtext-dark text-base font-medium leading-normal">
                  月間アクティブユーザー数
                </p>
                <p className="text-text-light dark:text-white tracking-tight text-3xl font-bold leading-tight">
                  5,678
                </p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-green-500 text-base">arrow_upward</span>
                  <p className="text-green-500 text-sm font-medium leading-normal">+1.8%</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark">
                <p className="text-subtext-light dark:text-subtext-dark text-base font-medium leading-normal">
                  累計マッチング成立数
                </p>
                <p className="text-text-light dark:text-white tracking-tight text-3xl font-bold leading-tight">
                  10,482
                </p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-green-500 text-base">arrow_upward</span>
                  <p className="text-green-500 text-sm font-medium leading-normal">+12.5%</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark">
                <p className="text-subtext-light dark:text-subtext-dark text-base font-medium leading-normal">
                  累計オファー送信数
                </p>
                <p className="text-text-light dark:text-white tracking-tight text-3xl font-bold leading-tight">
                  25,100
                </p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-green-500 text-base">arrow_upward</span>
                  <p className="text-green-500 text-sm font-medium leading-normal">+8.0%</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark">
                <p className="text-subtext-light dark:text-subtext-dark text-base font-medium leading-normal">
                  レポート生成数
                </p>
                <p className="text-text-light dark:text-white tracking-tight text-3xl font-bold leading-tight">
                  859
                </p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-red-500 text-base">arrow_downward</span>
                  <p className="text-red-500 text-sm font-medium leading-normal">-2.1%</p>
                </div>
              </div>
            </div>

            {/* Data Visualization Chart */}
            <div className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-text-light dark:text-white">
                  マッチング数の推移 (過去30日間)
                </h2>
                <div className="flex gap-1 p-1 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
                  <button className="px-3 py-1 text-sm font-medium rounded-md bg-white dark:bg-gray-900 text-text-light dark:text-white">
                    日次
                  </button>
                  <button className="px-3 py-1 text-sm font-medium rounded-md text-subtext-light dark:text-subtext-dark">
                    週次
                  </button>
                </div>
              </div>
              <div className="w-full h-80 bg-background-light dark:bg-background-dark rounded-lg flex items-center justify-center p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#135bec" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#135bec" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="count" stroke="#135bec" fillOpacity={1} fill="url(#colorCount)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            {/* Announcement Form */}
            <div className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark">
              <h2 className="text-lg font-bold text-text-light dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">campaign</span>
                お知らせ配信
              </h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-light dark:text-white mb-1">タイトル</label>
                  <input
                    type="text"
                    value={announcement.title}
                    onChange={(e) => setAnnouncement({...announcement, title: e.target.value})}
                    className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 text-sm px-3 py-2"
                    placeholder="例: システムメンテナンスのお知らせ"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-light dark:text-white mb-1">本文</label>
                  <textarea
                    value={announcement.content}
                    onChange={(e) => setAnnouncement({...announcement, content: e.target.value})}
                    rows={4}
                    className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 text-sm px-3 py-2"
                    placeholder="お知らせの内容を入力してください"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-light dark:text-white mb-1">重要度</label>
                  <select
                    value={announcement.priority}
                    onChange={(e) => setAnnouncement({...announcement, priority: e.target.value})}
                    className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 text-sm px-3 py-2"
                  >
                    <option value="normal">通常</option>
                    <option value="high">重要</option>
                  </select>
                </div>
                <button
                  onClick={handleSendAnnouncement}
                  className="w-full py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  配信する
                </button>
              </div>
            </div>

            {/* Activity Log */}
            <div className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark">
              <h2 className="text-lg font-bold text-text-light dark:text-white">最近のアクティビティログ</h2>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">add_business</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-text-light dark:text-white">
                      <b>株式会社NextGen</b> が新規登録しました
                    </p>
                    <p className="text-xs text-subtext-light dark:text-subtext-dark">2023-10-27 10:30 AM</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">manage_accounts</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-text-light dark:text-white">
                      管理者 <b>Taro Yamada</b> がユーザー情報を更新
                    </p>
                    <p className="text-xs text-subtext-light dark:text-subtext-dark">2023-10-27 09:15 AM</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">assessment</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-text-light dark:text-white">月次レポートが自動生成されました</p>
                    <p className="text-xs text-subtext-light dark:text-subtext-dark">2023-10-27 08:00 AM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;


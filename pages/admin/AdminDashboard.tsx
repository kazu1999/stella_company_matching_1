import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between gap-4 p-6 bg-white dark:bg-gray-900 border-b border-border-light dark:border-border-dark">
        <p className="text-text-light dark:text-white text-3xl font-black leading-tight tracking-[-0.03em]">
          Dashboard
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
                placeholder="Search everything..."
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
                    Daily
                  </button>
                  <button className="px-3 py-1 text-sm font-medium rounded-md text-subtext-light dark:text-subtext-dark">
                    Weekly
                  </button>
                </div>
              </div>
              <div className="w-full h-80 bg-background-light dark:bg-background-dark rounded-lg flex items-center justify-center">
                <div
                  className="bg-center bg-no-repeat aspect-[2.5/1] bg-contain w-full h-full"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDT7imKXfCZr-UUc_P77M4kimFOmMlX7iWYRCu8wB9oy123raZATnhtt92ZzBl19PxF6fzMDpW6TiekwmkpNaEEUQbJDKyMmf6DTv6ewbfVZQeYv2rOcuV4mw_ZzLALbmXCiPyuhZAYodWP52RHk21m1xoNFHy9K_3OUJH-NA_BlsNsHkJbEwn9qkgt7aIBSlUp8VRqCisel4siqvoGHFP2eKH_17dylncSC8WuSO_FMupqlPLvYOrvyzsG3RIf4yJH-N1xkf2X2zc')",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            {/* Alerts & Notifications */}
            <div className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark">
              <h2 className="text-lg font-bold text-text-light dark:text-white">
                システムアラート & お知らせ
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/20">
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-red-500">error</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-red-500">System Alert</p>
                    <p className="text-sm text-text-light dark:text-white">
                      データベースの負荷が80%に達しました。パフォーマンス低下の可能性があります。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-blue-500">campaign</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-blue-500">Announcement</p>
                    <p className="text-sm text-text-light dark:text-white">
                      新しいレポート機能がリリースされました。詳細はドキュメントをご確認ください。
                    </p>
                  </div>
                </div>
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


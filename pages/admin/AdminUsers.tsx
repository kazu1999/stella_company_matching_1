import React, { useState } from 'react';

const AdminUsers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    {
      id: 1,
      name: '田中 太郎',
      email: 'tanaka@example.com',
      company: '株式会社イノベート',
      role: '企業ユーザー',
      status: 'Active',
      registeredDate: '2023-10-15',
    },
    {
      id: 2,
      name: '佐藤 花子',
      email: 'sato@example.com',
      company: 'NextGen Solutions',
      role: '企業ユーザー',
      status: 'Active',
      registeredDate: '2023-10-20',
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 p-6 lg:p-10 overflow-y-auto h-full">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <h1 className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-2">
            ユーザー管理
          </h1>
          <p className="text-subtext-light dark:text-subtext-dark text-base">登録ユーザーの一覧と管理</p>
        </header>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-subtext-light dark:text-subtext-dark">
              <span className="material-symbols-outlined">search</span>
            </span>
            <input
              type="text"
              placeholder="ユーザー名、メールアドレス、企業名で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-border-light dark:border-border-dark text-text-light dark:text-white placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        {/* Users List */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase text-subtext-light dark:text-subtext-dark bg-background-light dark:bg-background-dark">
                <tr>
                  <th className="px-6 py-3" scope="col">
                    ユーザー名
                  </th>
                  <th className="px-6 py-3" scope="col">
                    メールアドレス
                  </th>
                  <th className="px-6 py-3" scope="col">
                    企業名
                  </th>
                  <th className="px-6 py-3" scope="col">
                    ロール
                  </th>
                  <th className="px-6 py-3" scope="col">
                    ステータス
                  </th>
                  <th className="px-6 py-3" scope="col">
                    登録日
                  </th>
                  <th className="px-6 py-3 text-right" scope="col">
                    アクション
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="bg-white dark:bg-gray-900 border-b dark:border-border-dark hover:bg-background-light/50 dark:hover:bg-background-dark/50"
                  >
                    <td className="px-6 py-4 font-medium text-text-light dark:text-white">{user.name}</td>
                    <td className="px-6 py-4 text-text-light dark:text-white">{user.email}</td>
                    <td className="px-6 py-4 text-text-light dark:text-white">{user.company}</td>
                    <td className="px-6 py-4 text-text-light dark:text-white">{user.role}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-text-light dark:text-white">{user.registeredDate}</td>
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
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;


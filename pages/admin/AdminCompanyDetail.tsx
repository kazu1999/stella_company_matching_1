import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AdminCompanyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'info' | 'ai' | 'messages' | 'matching'>('info');

  const tabs = [
    { id: 'info' as const, label: '企業情報' },
    { id: 'ai' as const, label: 'AI課題抽出' },
    { id: 'messages' as const, label: 'メッセージやり取り' },
    { id: 'matching' as const, label: 'マッチング状況' },
  ];

  // モックデータ
  const company = {
    id: id || 'innovate',
    name: '株式会社イノベート',
    industry: 'IT / ソフトウェア',
    description: '中小企業向けに特化した業務効率化SaaSの開発と提供。クラウドベースの会計、人事、顧客管理システムを統合し、企業のバックオフィス業務をデジタル化します。',
    strengths: '直感的なUI/UXデザインと、手厚いカスタマーサポート。導入から運用までを徹底的にサポートし、ITに不慣れな企業でもスムーズなDXを実現します。',
    issues: '新規顧客獲得のためのマーケティング戦略の立案と実行。特にデジタルマーケティングのノウハウが不足しており、リード獲得に苦戦しています。',
  };

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
              {company.name}
            </h1>
          </div>
          <p className="text-subtext-light dark:text-subtext-dark text-base">企業詳細</p>
        </header>

        <div className="w-full">
          {/* Tabs */}
          <div className="border-b border-border-light dark:border-border-dark mb-6">
            <div className="flex items-center gap-x-8" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  aria-selected={activeTab === tab.id}
                  className={`px-1 py-3 text-sm font-medium leading-normal border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'text-primary border-primary font-bold'
                      : 'text-subtext-light dark:text-subtext-dark border-transparent hover:border-border-light dark:hover:border-border-dark'
                  }`}
                  role="tab"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Panels */}
          <div role="tabpanel">
            {/* 企業情報タブ */}
            {activeTab === 'info' && (
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark">
                <div className="p-6 border-b border-border-light dark:border-border-dark">
                  <h2 className="text-lg font-bold text-text-light dark:text-white">企業情報</h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm mt-1">
                    企業の基本情報と事業内容です。
                  </p>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
                      <div className="md:col-span-1">
                        <label className="text-sm font-medium text-text-light dark:text-white">企業名</label>
                      </div>
                      <div className="md:col-span-2">
                        <input
                          className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          type="text"
                          defaultValue={company.name}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
                      <div className="md:col-span-1">
                        <label className="text-sm font-medium text-text-light dark:text-white">業種</label>
                      </div>
                      <div className="md:col-span-2">
                        <select className="form-select w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary">
                          <option>IT / ソフトウェア</option>
                          <option>製造業</option>
                          <option>コンサルティング</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
                      <div className="md:col-span-1">
                        <label className="text-sm font-medium text-text-light dark:text-white">事業内容</label>
                      </div>
                      <div className="md:col-span-2">
                        <textarea
                          className="form-textarea w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          rows={4}
                          defaultValue={company.description}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
                      <div className="md:col-span-1">
                        <label className="text-sm font-medium text-text-light dark:text-white">自社の強み</label>
                      </div>
                      <div className="md:col-span-2">
                        <textarea
                          className="form-textarea w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          rows={4}
                          defaultValue={company.strengths}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
                      <div className="md:col-span-1">
                        <label className="text-sm font-medium text-text-light dark:text-white">解決したい課題</label>
                      </div>
                      <div className="md:col-span-2">
                        <textarea
                          className="form-textarea w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          rows={4}
                          defaultValue={company.issues}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-border-light dark:border-border-dark flex justify-end">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors whitespace-nowrap">
                    <span className="material-symbols-outlined text-base">save</span>
                    <span>変更を保存</span>
                  </button>
                </div>
              </div>
            )}

            {/* AI課題抽出タブ */}
            {activeTab === 'ai' && (
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-lg font-bold text-text-light dark:text-white mb-1">
                        AIによる課題抽出と解決策
                      </h2>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">
                        AIが企業情報から抽出した潜在的な課題と、その解決策の提案です。
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-background-light dark:bg-background-dark rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 size-8 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                            <span className="material-symbols-outlined text-base">lightbulb</span>
                          </div>
                          <h3 className="font-bold text-text-light dark:text-white">
                            課題：デジタルマーケティング人材の不足
                          </h3>
                        </div>
                        <p className="mt-2 ml-11 text-sm text-subtext-light dark:text-subtext-dark">
                          リード獲得におけるデジタルマーケティングの専門知識を持つ人材が社内に不足しており、効果的な戦略立案が困難な状況です。
                        </p>
                      </div>
                      <div className="p-4 bg-background-light dark:bg-background-dark rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 size-8 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                            <span className="material-symbols-outlined text-base">rocket_launch</span>
                          </div>
                          <h3 className="font-bold text-text-light dark:text-white">
                            解決策：専門コンサルティング企業の活用
                          </h3>
                        </div>
                        <p className="mt-2 ml-11 text-sm text-subtext-light dark:text-subtext-dark">
                          Webサイト改善、SEO対策、広告運用までを包括的にサポートできるデジタルマーケティングの専門家との連携を提案します。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-1 space-y-6">
                    <div>
                      <h2 className="text-lg font-bold text-text-light dark:text-white mb-1">おすすめマッチング企業</h2>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">
                        上記の課題解決に貢献できる可能性が高い企業です。
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border border-border-light dark:border-border-dark hover:shadow-lg hover:border-primary transition-all duration-300">
                        <h3 className="font-bold text-text-light dark:text-white">グローバルソリューションズ</h3>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark mt-1">
                          BtoB SaaS特化のマーケティング支援で実績多数。データ駆動型のアプローチでリード獲得を最大化。
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-1 text-yellow-500">
                            <span className="material-symbols-outlined text-base fill-icon">star</span>
                            <span className="text-sm font-bold text-text-light dark:text-white">910</span>
                          </div>
                          <a className="text-primary text-sm font-bold hover:underline" href="#">
                            詳細を見る
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* メッセージやり取りタブ */}
            {activeTab === 'messages' && (
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark h-[700px] flex flex-col">
                <div className="p-4 border-b border-border-light dark:border-border-dark flex-shrink-0">
                  <h2 className="text-lg font-bold text-text-light dark:text-white">メッセージ</h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm mt-1">
                    {company.name}とのメッセージ履歴です。
                  </p>
                </div>
                <div className="flex-grow p-6 overflow-y-auto space-y-6">
                  <div className="flex items-start gap-3">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPbw4PiwaxMLRgZ30kyavIIBW7V7xsWQRpRJIA3yxRJAeMB89vCSedSN45Sf9wxgEpN6bcUmnnl9KeQpr66WWaa9A23PzkjT_Q2crw40pqeEq2QrjfHBXv9nXZ7zBn2WTTTDJ8FDktz5_p9FS9hs62y7-9SWBtxeT4UvrsG7nyvfgt-a1_yddLf6VhdoiDyDm_lUh9Pn_RO3mgsu2LMMbfk91Jqbrzy0aEmaYpecBedfySlsjvsrBBd6_3h-Ah2e5jh_kSrO7v7QA")',
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <p className="font-bold text-text-light dark:text-white">管理者</p>
                        <p className="text-xs text-subtext-light dark:text-subtext-dark">2023-10-27 10:30</p>
                      </div>
                      <div className="bg-background-light dark:bg-background-dark p-3 rounded-lg rounded-tl-none">
                        <p className="text-sm text-text-light dark:text-white">
                          田中様、お世話になっております。Stella Matching Serviceの管理者です。ご登録いただいた内容について、いくつか確認させていただきたい点がございます。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-border-light dark:border-border-dark flex-shrink-0">
                  <div className="relative">
                    <textarea
                      className="form-textarea w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary pr-24"
                      placeholder="メッセージを入力..."
                      rows={3}
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors whitespace-nowrap">
                      <span>送信</span>
                      <span className="material-symbols-outlined text-base">send</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* マッチング状況タブ */}
            {activeTab === 'matching' && (
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark">
                <div className="p-6 border-b border-border-light dark:border-border-dark">
                  <h2 className="text-lg font-bold text-text-light dark:text-white">マッチング状況</h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm mt-1">
                    この企業とのマッチング履歴と現在のステータスです。
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-subtext-light dark:text-subtext-dark uppercase bg-background-light dark:bg-background-dark">
                      <tr>
                        <th className="px-6 py-3" scope="col">マッチング先企業</th>
                        <th className="px-6 py-3" scope="col">マッチング日</th>
                        <th className="px-6 py-3" scope="col">ステータス</th>
                        <th className="px-6 py-3" scope="col">担当者</th>
                        <th className="px-6 py-3" scope="col">アクション</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-gray-900 border-b dark:border-border-dark hover:bg-background-light/50 dark:hover:bg-background-dark/50">
                        <td className="px-6 py-4 font-bold text-text-light dark:text-white">グローバルソリューションズ</td>
                        <td className="px-6 py-4 text-text-light dark:text-white">2023-11-05</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                            <span className="w-2 h-2 mr-1.5 bg-green-500 rounded-full"></span>
                            マッチング成立
                          </span>
                        </td>
                        <td className="px-6 py-4 text-text-light dark:text-white">佐藤 健</td>
                        <td className="px-6 py-4">
                          <a className="font-medium text-primary hover:underline" href="#">
                            詳細表示
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCompanyDetail;


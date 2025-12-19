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
    founded: '2015年',
    location: '東京都渋谷区',
    url: 'https://innovate-inc.jp',
    description: '中小企業向けに特化した業務効率化SaaSの開発と提供。クラウドベースの会計、人事、顧客管理システムを統合し、企業のバックオフィス業務をデジタル化します。',
    strengths: ['UI/UXデザイン', 'カスタマーサポート', 'アジャイル開発', 'データ分析'],
    weaknesses: ['マーケティング人材不足', '営業組織の未熟さ'],
    concerns: ['リード獲得', '知名度向上', '採用難'],
    financials: {
      revenue: '5.2億円',
      grossMargin: '68%',
      operatingProfit: '0.8億円'
    },
    // AI分析結果のモック
    aiAnalysis: {
      summary: '技術力とプロダクト品質に強みを持つ一方で、マーケティングと営業体制に課題を抱えています。製品力は高いため、販売チャネルの拡大とブランディング強化が成長の鍵となります。',
      surfaceIssues: ['リード獲得数が目標未達', 'WebサイトからのCVRが低い'],
      structuralIssues: ['マーケティング専任担当者の不在', '営業と開発の連携不足'],
      deepIssues: ['技術志向が強く顧客視点が不足', '組織全体での数値目標へのコミット不足'],
      solutions: ['マーケティングオートメーションの導入', 'アウトサイドセールスの強化', 'ブランディング戦略の再構築'],
      solutionProcesses: [
        {
          solution: 'マーケティングオートメーションの導入',
          steps: ['現状分析', 'ツール選定', 'シナリオ設計', '運用開始'],
          timeline: '3ヶ月',
          priority: 'high'
        }
      ]
    }
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
                    企業の基本情報、財務データ、および属性タグです。
                  </p>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {/* 基本情報 */}
                    <h3 className="text-base font-semibold text-text-light dark:text-white border-b border-border-light dark:border-border-dark pb-2 mb-4">基本情報</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-text-light dark:text-white block mb-1">企業名</label>
                        <input
                          className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white"
                          type="text"
                          defaultValue={company.name}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-text-light dark:text-white block mb-1">業種</label>
                        <select className="form-select w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white">
                          <option>IT / ソフトウェア</option>
                          <option>製造業</option>
                          <option>コンサルティング</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-text-light dark:text-white block mb-1">所在地</label>
                        <input
                          className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white"
                          type="text"
                          defaultValue={company.location}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-text-light dark:text-white block mb-1">設立年</label>
                        <input
                          className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white"
                          type="text"
                          defaultValue={company.founded}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-sm font-medium text-text-light dark:text-white block mb-1">URL</label>
                        <input
                          className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white"
                          type="text"
                          defaultValue={company.url}
                        />
                      </div>
                    </div>

                    {/* 事業詳細 */}
                    <div className="mt-8">
                      <label className="text-sm font-medium text-text-light dark:text-white block mb-1">事業詳細</label>
                      <textarea
                        className="form-textarea w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white"
                        rows={4}
                        defaultValue={company.description}
                      />
                    </div>

                    {/* 財務データ */}
                    <h3 className="text-base font-semibold text-text-light dark:text-white border-b border-border-light dark:border-border-dark pb-2 mb-4 mt-8">財務データ</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="text-sm font-medium text-text-light dark:text-white block mb-1">売上高</label>
                        <input
                          className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white"
                          type="text"
                          defaultValue={company.financials.revenue}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-text-light dark:text-white block mb-1">粗利率</label>
                        <input
                          className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white"
                          type="text"
                          defaultValue={company.financials.grossMargin}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-text-light dark:text-white block mb-1">営業利益</label>
                        <input
                          className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white"
                          type="text"
                          defaultValue={company.financials.operatingProfit}
                        />
                      </div>
                    </div>

                    {/* タグ情報 */}
                    <h3 className="text-base font-semibold text-text-light dark:text-white border-b border-border-light dark:border-border-dark pb-2 mb-4 mt-8">属性・タグ</h3>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label className="text-sm font-medium text-text-light dark:text-white block mb-1">強み (カンマ区切り)</label>
                        <input
                          className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white"
                          type="text"
                          defaultValue={company.strengths.join(', ')}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-text-light dark:text-white block mb-1">弱み (カンマ区切り)</label>
                        <input
                          className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white"
                          type="text"
                          defaultValue={company.weaknesses.join(', ')}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-text-light dark:text-white block mb-1">悩み (カンマ区切り)</label>
                        <input
                          className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light dark:text-white"
                          type="text"
                          defaultValue={company.concerns.join(', ')}
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
                        AI分析レポート
                      </h2>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark mb-4">
                        {company.aiAnalysis.summary}
                      </p>
                    </div>

                    <div className="space-y-6">
                      {/* 表層課題 */}
                      <div>
                        <h3 className="text-base font-bold text-text-light dark:text-white mb-2 flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-orange-400"></span> 表層課題
                        </h3>
                        <ul className="list-disc list-inside text-sm text-text-light dark:text-white space-y-1 ml-2">
                          {company.aiAnalysis.surfaceIssues.map((issue, idx) => (
                            <li key={idx}>{issue}</li>
                          ))}
                        </ul>
                      </div>

                      {/* 構造課題 */}
                      <div>
                        <h3 className="text-base font-bold text-text-light dark:text-white mb-2 flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-orange-500"></span> 構造課題
                        </h3>
                        <ul className="list-disc list-inside text-sm text-text-light dark:text-white space-y-1 ml-2">
                          {company.aiAnalysis.structuralIssues.map((issue, idx) => (
                            <li key={idx}>{issue}</li>
                          ))}
                        </ul>
                      </div>

                      {/* 深層課題 */}
                      <div>
                        <h3 className="text-base font-bold text-text-light dark:text-white mb-2 flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-red-500"></span> 深層課題
                        </h3>
                        <ul className="list-disc list-inside text-sm text-text-light dark:text-white space-y-1 ml-2">
                          {company.aiAnalysis.deepIssues.map((issue, idx) => (
                            <li key={idx}>{issue}</li>
                          ))}
                        </ul>
                      </div>

                      {/* 解決提案 */}
                      <div className="mt-6 pt-6 border-t border-border-light dark:border-border-dark">
                         <h3 className="text-base font-bold text-text-light dark:text-white mb-4 flex items-center gap-2">
                           <span className="material-symbols-outlined text-green-500">lightbulb</span> 解決提案
                        </h3>
                        <div className="space-y-4">
                          {company.aiAnalysis.solutionProcesses.map((process, idx) => (
                             <div key={idx} className="bg-background-light dark:bg-background-dark p-4 rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-bold text-text-light dark:text-white">{process.solution}</h4>
                                  <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded font-medium">優先度: 高</span>
                                </div>
                                <div className="text-sm text-subtext-light dark:text-subtext-dark mb-2">期間: {process.timeline}</div>
                                <ol className="list-decimal list-inside text-sm text-text-light dark:text-white space-y-1">
                                  {process.steps.map((step, sIdx) => (
                                    <li key={sIdx}>{step}</li>
                                  ))}
                                </ol>
                             </div>
                          ))}
                        </div>
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
                  {/* 企業側のメッセージ（左側） */}
                  <div className="flex items-start gap-3">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfGPUnI6CWn0-aDcAifWFb3ZhvBjvyasotWQmrokF8qfBfPD78btVXQBikkM2aQreEwX-i5TRv7jKAABBEzrWBgSsBRyVJIcrtsmpgHD4ZhmSMJ3dmzFtSSXRUIC5wzdodhB7wMWH-YBrfd6qpgTVfbqxj3ysxV5vL_2zZ5hwlV8x3XV81BUC-c2PeaBeOP75xM1kMjijJ7K6Eab81iRKfXkH2hOFCFP665Lj_KqT65RShGCpwIMj1IKZfCdMWXItjl9nGhcwRx7s")',
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <p className="font-bold text-text-light dark:text-white">田中 太郎</p>
                        <p className="text-xs text-subtext-light dark:text-subtext-dark">2023-10-27 09:15</p>
                      </div>
                      <div className="bg-background-light dark:bg-background-dark p-3 rounded-lg rounded-tl-none">
                        <p className="text-sm text-text-light dark:text-white">
                          初めまして。株式会社イノベートの田中と申します。よろしくお願いいたします。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 管理者のメッセージ（右側） */}
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPbw4PiwaxMLRgZ30kyavIIBW7V7xsWQRpRJIA3yxRJAeMB89vCSedSN45Sf9wxgEpN6bcUmnnl9KeQpr66WWaa9A23PzkjT_Q2crw40pqeEq2QrjfHBXv9nXZ7zBn2WTTTDJ8FDktz5_p9FS9hs62y7-9SWBtxeT4UvrsG7nyvfgt-a1_yddLf6VhdoiDyDm_lUh9Pn_RO3mgsu2LMMbfk91Jqbrzy0aEmaYpecBedfySlsjvsrBBd6_3h-Ah2e5jh_kSrO7v7QA")',
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1 justify-end">
                        <p className="font-bold text-text-light dark:text-white">管理者</p>
                        <p className="text-xs text-subtext-light dark:text-subtext-dark">2023-10-27 10:30</p>
                      </div>
                      <div className="bg-primary p-3 rounded-lg rounded-tr-none">
                        <p className="text-sm text-white">
                          田中様、お世話になっております。Stella Matching Serviceの管理者です。ご登録いただいた内容について、いくつか確認させていただきたい点がございます。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 企業側の返信（左側） */}
                  <div className="flex items-start gap-3">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfGPUnI6CWn0-aDcAifWFb3ZhvBjvyasotWQmrokF8qfBfPD78btVXQBikkM2aQreEwX-i5TRv7jKAABBEzrWBgSsBRyVJIcrtsmpgHD4ZhmSMJ3dmzFtSSXRUIC5wzdodhB7wMWH-YBrfd6qpgTVfbqxj3ysxV5vL_2zZ5hwlV8x3XV81BUC-c2PeaBeOP75xM1kMjijJ7K6Eab81iRKfXkH2hOFCFP665Lj_KqT65RShGCpwIMj1IKZfCdMWXItjl9nGhcwRx7s")',
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <p className="font-bold text-text-light dark:text-white">田中 太郎</p>
                        <p className="text-xs text-subtext-light dark:text-subtext-dark">2023-10-27 11:15</p>
                      </div>
                      <div className="bg-background-light dark:bg-background-dark p-3 rounded-lg rounded-tl-none">
                        <p className="text-sm text-text-light dark:text-white">
                          ご連絡ありがとうございます。株式会社イノベートの田中です。どのような点でしょうか？
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 管理者の返信（右側） */}
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPbw4PiwaxMLRgZ30kyavIIBW7V7xsWQRpRJIA3yxRJAeMB89vCSedSN45Sf9wxgEpN6bcUmnnl9KeQpr66WWaa9A23PzkjT_Q2crw40pqeEq2QrjfHBXv9nXZ7zBn2WTTTDJ8FDktz5_p9FS9hs62y7-9SWBtxeT4UvrsG7nyvfgt-a1_yddLf6VhdoiDyDm_lUh9Pn_RO3mgsu2LMMbfk91Jqbrzy0aEmaYpecBedfySlsjvsrBBd6_3h-Ah2e5jh_kSrO7v7QA")',
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1 justify-end">
                        <p className="font-bold text-text-light dark:text-white">管理者</p>
                        <p className="text-xs text-subtext-light dark:text-subtext-dark">2023-10-27 11:20</p>
                      </div>
                      <div className="bg-primary p-3 rounded-lg rounded-tr-none">
                        <p className="text-sm text-white">
                          「解決したい課題」について、より具体的な目標（例：リード数を月50件増やすなど）を記載いただけますと、AIによるマッチング精度がさらに向上します。もし可能でしたら、追記いただけますと幸いです。
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


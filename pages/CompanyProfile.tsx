import React from 'react';

const CompanyProfile: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto h-full p-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12">
          <h1 className="text-text-light dark:text-white text-3xl font-bold tracking-tight">
            企業プロフィール設定
          </h1>
          <p className="text-subtext-light dark:text-subtext-dark mt-2 text-base">
            最適なマッチングのために情報を入力してください。
          </p>
        </header>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
          <div className="flex-1 flex flex-col gap-10">
            <section className="rounded-xl border border-border-light dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6">
              <h2 className="text-text-light dark:text-white text-lg font-semibold">
                基本情報
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="flex flex-col">
                    <p className="text-text-light dark:text-text-dark text-sm font-medium pb-2">
                      企業名
                    </p>
                    <input
                      className="form-input w-full rounded-lg bg-transparent border border-border-light dark:border-gray-700 h-11 px-3 text-sm focus:border-primary focus:ring-0"
                      placeholder="株式会社Stella"
                    />
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <label className="flex flex-col">
                    <p className="text-text-light dark:text-text-dark text-sm font-medium pb-2">
                      ウェブサイトURL
                    </p>
                    <input
                      className="form-input w-full rounded-lg bg-transparent border border-border-light dark:border-gray-700 h-11 px-3 text-sm focus:border-primary focus:ring-0"
                      placeholder="https://example.com"
                    />
                  </label>
                </div>
                <div>
                  <label className="flex flex-col">
                    <p className="text-text-light dark:text-text-dark text-sm font-medium pb-2">
                      所在地
                    </p>
                    <input
                      className="form-input w-full rounded-lg bg-transparent border border-border-light dark:border-gray-700 h-11 px-3 text-sm focus:border-primary focus:ring-0"
                      placeholder="東京都渋谷区"
                    />
                  </label>
                </div>
                <div>
                  <label className="flex flex-col">
                    <p className="text-text-light dark:text-text-dark text-sm font-medium pb-2">
                      設立年
                    </p>
                    <input
                      className="form-input w-full rounded-lg bg-transparent border border-border-light dark:border-gray-700 h-11 px-3 text-sm focus:border-primary focus:ring-0"
                      placeholder="2023"
                    />
                  </label>
                </div>
              </div>
            </section>
            
            <section className="rounded-xl border border-border-light dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6">
                 <h2 className="text-text-light dark:text-white text-lg font-semibold">
                    財務データ
                 </h2>
                 <div className="mt-6 flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <p className="text-text-light dark:text-text-dark text-sm font-medium">期間</p>
                        <div className="inline-flex rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
                             <button className="rounded-md bg-white px-3 py-1 text-sm font-medium text-primary shadow-sm dark:bg-slate-700">年間</button>
                             <button className="rounded-md px-3 py-1 text-sm font-medium text-subtext-light hover:bg-white/50 dark:text-subtext-dark dark:hover:bg-slate-700/50">四半期</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                         <div>
                            <label className="flex flex-col">
                                <p className="text-text-light dark:text-text-dark text-sm font-medium pb-2">売上</p>
                                <div className="relative">
                                    <input className="form-input w-full rounded-lg border border-border-light bg-transparent py-2.5 pl-3 pr-12 text-sm focus:border-primary dark:border-gray-700" placeholder="100,000" type="text"/>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"><span className="text-sm text-subtext-light dark:text-subtext-dark">百万円</span></div>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label className="flex flex-col">
                                <p className="text-text-light dark:text-text-dark text-sm font-medium pb-2">粗利率</p>
                                <div className="relative">
                                    <input className="form-input w-full rounded-lg border border-border-light bg-transparent py-2.5 pl-3 pr-8 text-sm focus:border-primary dark:border-gray-700" placeholder="60" type="text"/>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"><span className="text-sm text-subtext-light dark:text-subtext-dark">%</span></div>
                                </div>
                            </label>
                        </div>
                    </div>
                 </div>
                 
                 <div className="h-px w-full bg-border-light dark:bg-border-dark my-8"></div>
                 
                 <div>
                    <h3 className="text-text-light dark:text-white text-base font-semibold">財務ファイル</h3>
                    <div className="mt-4 rounded-xl border border-border-light bg-slate-50/50 p-4 dark:border-gray-800 dark:bg-gray-800/20">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-text-light dark:text-text-dark">財務諸表をアップロード</p>
                                <p className="mt-1 text-xs text-subtext-light dark:text-subtext-dark">PDF、Excel（最大10MB）</p>
                            </div>
                            <button className="flex items-center gap-2 rounded-lg border border-border-light bg-white px-3 py-2 text-sm font-semibold text-text-light hover:bg-slate-100 dark:border-gray-700 dark:bg-gray-800 dark:text-text-dark dark:hover:bg-gray-700" type="button">
                                <span className="material-symbols-outlined text-base">upload</span><span>アップロード</span>
                            </button>
                        </div>
                         <div className="mt-4 flex items-start gap-2 rounded-lg bg-blue-50/70 p-3 dark:bg-blue-900/20">
                            <span className="material-symbols-outlined mt-0.5 text-base text-blue-500 dark:text-blue-400">spark</span>
                            <p className="text-xs text-subtext-light dark:text-subtext-dark">ファイルをアップロードすると、AI分析の精度が向上し、より良いマッチングが可能になります。</p>
                        </div>
                    </div>
                 </div>
            </section>
            
            <section className="rounded-xl border border-border-light dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6">
                <h2 className="text-text-light dark:text-white text-lg font-semibold">事業詳細</h2>
                <div className="mt-6 flex flex-col gap-6">
                    <label className="flex flex-col">
                        <p className="text-text-light dark:text-text-dark text-sm font-medium pb-2">事業内容</p>
                         <textarea className="form-textarea w-full min-h-32 rounded-lg bg-transparent border border-border-light dark:border-gray-700 p-3 text-sm focus:border-primary focus:ring-0" placeholder="事業、製品、サービスについて詳しく説明してください。"></textarea>
                    </label>
                </div>
            </section>

          </div>
          
          <aside className="w-full lg:w-72 lg:sticky lg:top-8 lg:self-start">
             <div className="rounded-xl p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border border-border-light dark:border-gray-800">
                 <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
                    <h3 className="font-semibold text-text-light dark:text-white">AIインサイト</h3>
                 </div>
                 <div className="mt-4 flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-sm text-green-500 mt-1">check_circle</span>
                         <p className="text-xs text-subtext-light dark:text-subtext-dark">入力内容に基づき、<strong className="font-medium text-text-light dark:text-white">SaaS業界</strong>との高い親和性が予測されます。</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <span className="material-symbols-outlined text-sm text-amber-500 mt-1">lightbulb</span>
                         <p className="text-xs text-subtext-light dark:text-subtext-dark">課題をより具体的に記述すると、マッチング精度が<strong className="font-medium text-text-light dark:text-white">25%</strong>向上します。</p>
                    </div>
                 </div>
             </div>
          </aside>
        </div>
         <footer className="mt-12 flex justify-end gap-3 border-t border-border-light dark:border-gray-800 py-6">
            <button className="rounded-lg border border-border-light px-4 py-2 text-sm font-semibold text-text-light hover:bg-slate-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">キャンセル</button>
            <button className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary/90">プロフィールを保存</button>
        </footer>
      </div>
    </div>
  );
};

export default CompanyProfile;
import React, { useState } from 'react';

const ArticleGenerator: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const handleGenerate = () => {
    setStep(2);
    // Simulate generation delay
    setTimeout(() => {
        setStep(3);
    }, 2000);
  };

  return (
    <div className="flex-1 p-6 lg:p-10 h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-between gap-3 mb-8">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              AI記事生成
            </p>
            <p className="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">
              テキストまたは音声ファイルをアップロードすると、AIがSEO最適化された記事を生成します。
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-10">
          {/* Step 1: Configuration */}
          {step === 1 && (
              <div className="bg-white dark:bg-gray-900 border border-border-light dark:border-gray-800 rounded-xl">
                <div className="p-6">
                  <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-border-light dark:border-gray-700 px-6 py-14">
                    <div className="flex max-w-[480px] flex-col items-center gap-2">
                      <p className="text-text-light dark:text-white text-lg font-bold leading-tight text-center">
                        記事の元となるファイルをアップロード
                      </p>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal text-center">
                        ここにファイルをドラッグ&ドロップするか、クリックして選択してください。対応形式: .txt, .mp3, .wav
                      </p>
                    </div>
                    <button className="rounded-lg bg-slate-100 dark:bg-gray-800 text-text-light dark:text-white text-sm font-bold px-4 py-2 hover:bg-slate-200 dark:hover:bg-gray-700">
                      ファイルを選択
                    </button>
                  </div>
                </div>
                <h2 className="text-text-light dark:text-white text-xl font-bold px-6 pb-3 pt-2 border-t border-border-light dark:border-gray-800">
                  生成オプション
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 pt-3">
                  <label className="flex flex-col">
                    <p className="text-text-light dark:text-white text-sm font-medium pb-2">記事のトーン</p>
                    <select className="form-select w-full rounded-lg border border-border-light dark:border-gray-700 bg-transparent h-11 px-3 dark:text-white">
                      <option>プロフェッショナル</option>
                      <option>カジュアル</option>
                      <option>情報提供型</option>
                    </select>
                  </label>
                  <label className="flex flex-col">
                    <p className="text-text-light dark:text-white text-sm font-medium pb-2">ターゲットキーワード</p>
                    <input className="form-input w-full rounded-lg border border-border-light dark:border-gray-700 bg-transparent h-11 px-3 dark:text-white" placeholder="例: ビジネスにおけるAI"/>
                  </label>
                </div>
                <div className="border-t border-border-light dark:border-gray-800 p-6 flex justify-end">
                  <button onClick={handleGenerate} className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-white font-bold hover:bg-primary/90">
                    <span className="material-symbols-outlined">auto_awesome</span>
                    記事を生成
                  </button>
                </div>
              </div>
          )}

          {/* Step 2: Progress */}
          {step === 2 && (
            <div className="bg-white dark:bg-gray-900 border border-border-light dark:border-gray-800 rounded-xl p-12">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-gray-700"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary border-l-transparent animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-primary font-bold text-xl">2/3</div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-text-light dark:text-white text-xl font-bold">記事を生成中...</p>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm">ステップ2: アウトライン作成中</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Result */}
          {step === 3 && (
             <div>
                <h2 className="text-text-light dark:text-white text-2xl font-bold mb-4">生成された記事</h2>
                <div className="bg-white dark:bg-gray-900 border border-border-light dark:border-gray-800 rounded-xl overflow-hidden">
                   <div className="p-8">
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
                         <div className="flex-grow">
                             <h3 className="text-2xl font-bold text-text-light dark:text-white mb-2">現代ビジネスにおけるAIの変革力</h3>
                             <p className="text-subtext-light dark:text-subtext-dark">人工知能が業界をどのように再構築しているかについての詳細な考察。</p>
                         </div>
                         <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg flex flex-col items-center justify-center min-w-[100px]">
                             <p className="text-primary text-sm font-medium">SEOスコア</p>
                             <p className="text-primary text-4xl font-bold">88</p>
                         </div>
                      </div>
                      <article className="prose prose-slate dark:prose-invert max-w-none text-subtext-light dark:text-gray-300">
                          <p>人工知能（AI）はもはやSFの世界の概念ではなく、グローバルなビジネス環境に大きな変化をもたらす実在の力となっています。サプライチェーンの最適化から顧客体験のパーソナライゼーションまで、AIを活用したソリューションにより、企業はより効率的に運営できるようになっています。</p>
                          <h4 className="text-lg font-bold text-text-light dark:text-white mt-4 mb-2">データ分析の強化</h4>
                          <p>AIの最も深い影響の一つは、人間には不可能な速度と規模で大量のデータを処理・分析する能力です。機械学習アルゴリズムは、パターンを特定し、トレンドを予測し、貴重な洞察を発見することができます。</p>
                      </article>
                   </div>
                   <div className="border-t border-border-light dark:border-gray-800 p-4 bg-slate-50 dark:bg-gray-800/50 flex justify-end gap-2">
                       <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-700 border border-border-light dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-white">
                           <span className="material-symbols-outlined text-base">content_copy</span> コピー
                       </button>
                       <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-700 border border-border-light dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-white">
                           <span className="material-symbols-outlined text-base">refresh</span> 再生成
                       </button>
                   </div>
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleGenerator;
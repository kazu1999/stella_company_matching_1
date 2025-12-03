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
              AI Article Generator
            </p>
            <p className="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">
              Upload a text or audio file and AI will generate an SEO-optimized article.
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
                        Upload the source file for your article
                      </p>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal text-center">
                        Drag & drop a file here or click to select. Supported: .txt, .mp3, .wav
                      </p>
                    </div>
                    <button className="rounded-lg bg-slate-100 dark:bg-gray-800 text-text-light dark:text-white text-sm font-bold px-4 py-2 hover:bg-slate-200 dark:hover:bg-gray-700">
                      Select File
                    </button>
                  </div>
                </div>
                <h2 className="text-text-light dark:text-white text-xl font-bold px-6 pb-3 pt-2 border-t border-border-light dark:border-gray-800">
                  Generation Options
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 pt-3">
                  <label className="flex flex-col">
                    <p className="text-text-light dark:text-white text-sm font-medium pb-2">Article Tone</p>
                    <select className="form-select w-full rounded-lg border border-border-light dark:border-gray-700 bg-transparent h-11 px-3 dark:text-white">
                      <option>Professional</option>
                      <option>Casual</option>
                      <option>Informative</option>
                    </select>
                  </label>
                  <label className="flex flex-col">
                    <p className="text-text-light dark:text-white text-sm font-medium pb-2">Target Keyword</p>
                    <input className="form-input w-full rounded-lg border border-border-light dark:border-gray-700 bg-transparent h-11 px-3 dark:text-white" placeholder="e.g. AI in Business"/>
                  </label>
                </div>
                <div className="border-t border-border-light dark:border-gray-800 p-6 flex justify-end">
                  <button onClick={handleGenerate} className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-white font-bold hover:bg-primary/90">
                    <span className="material-symbols-outlined">auto_awesome</span>
                    Generate Article
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
                  <p className="text-text-light dark:text-white text-xl font-bold">Generating your article...</p>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm">Step 2: Creating outline</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Result */}
          {step === 3 && (
             <div>
                <h2 className="text-text-light dark:text-white text-2xl font-bold mb-4">Generated Article</h2>
                <div className="bg-white dark:bg-gray-900 border border-border-light dark:border-gray-800 rounded-xl overflow-hidden">
                   <div className="p-8">
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
                         <div className="flex-grow">
                             <h3 className="text-2xl font-bold text-text-light dark:text-white mb-2">The Transformative Power of AI in Modern Business</h3>
                             <p className="text-subtext-light dark:text-subtext-dark">An in-depth look at how artificial intelligence is reshaping industries.</p>
                         </div>
                         <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg flex flex-col items-center justify-center min-w-[100px]">
                             <p className="text-primary text-sm font-medium">SEO Score</p>
                             <p className="text-primary text-4xl font-bold">88</p>
                         </div>
                      </div>
                      <article className="prose prose-slate dark:prose-invert max-w-none text-subtext-light dark:text-gray-300">
                          <p>Artificial Intelligence (AI) is no longer a concept confined to science fiction; it is a tangible force driving significant change across the global business landscape. From optimizing supply chains to personalizing customer experiences, AI-powered solutions are enabling companies to operate more efficiently.</p>
                          <h4 className="text-lg font-bold text-text-light dark:text-white mt-4 mb-2">Enhanced Data Analysis</h4>
                          <p>One of the most profound impacts of AI is its ability to process and analyze vast amounts of data at a speed and scale impossible for humans. Machine learning algorithms can identify patterns, predict trends, and unearth valuable insights.</p>
                      </article>
                   </div>
                   <div className="border-t border-border-light dark:border-gray-800 p-4 bg-slate-50 dark:bg-gray-800/50 flex justify-end gap-2">
                       <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-700 border border-border-light dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-white">
                           <span className="material-symbols-outlined text-base">content_copy</span> Copy
                       </button>
                       <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-700 border border-border-light dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-white">
                           <span className="material-symbols-outlined text-base">refresh</span> Regenerate
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
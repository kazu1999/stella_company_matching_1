import React from 'react';

const CompanyProfile: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto h-full p-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12">
          <h1 className="text-text-light dark:text-white text-3xl font-bold tracking-tight">
            Company Profile Settings
          </h1>
          <p className="text-subtext-light dark:text-subtext-dark mt-2 text-base">
            Please enter your information for optimal matching.
          </p>
        </header>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
          <div className="flex-1 flex flex-col gap-10">
            <section className="rounded-xl border border-border-light dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6">
              <h2 className="text-text-light dark:text-white text-lg font-semibold">
                Basic Information
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="flex flex-col">
                    <p className="text-text-light dark:text-text-dark text-sm font-medium pb-2">
                      Company Name
                    </p>
                    <input
                      className="form-input w-full rounded-lg bg-transparent border border-border-light dark:border-gray-700 h-11 px-3 text-sm focus:border-primary focus:ring-0"
                      placeholder="Stella Inc."
                    />
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <label className="flex flex-col">
                    <p className="text-text-light dark:text-text-dark text-sm font-medium pb-2">
                      Website URL
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
                      Location
                    </p>
                    <input
                      className="form-input w-full rounded-lg bg-transparent border border-border-light dark:border-gray-700 h-11 px-3 text-sm focus:border-primary focus:ring-0"
                      placeholder="Tokyo, Shibuya"
                    />
                  </label>
                </div>
                <div>
                  <label className="flex flex-col">
                    <p className="text-text-light dark:text-text-dark text-sm font-medium pb-2">
                      Founded Year
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
                    Financial Data
                 </h2>
                 <div className="mt-6 flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <p className="text-text-light dark:text-text-dark text-sm font-medium">Period</p>
                        <div className="inline-flex rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
                             <button className="rounded-md bg-white px-3 py-1 text-sm font-medium text-primary shadow-sm dark:bg-slate-700">Annual</button>
                             <button className="rounded-md px-3 py-1 text-sm font-medium text-subtext-light hover:bg-white/50 dark:text-subtext-dark dark:hover:bg-slate-700/50">Quarterly</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                         <div>
                            <label className="flex flex-col">
                                <p className="text-text-light dark:text-text-dark text-sm font-medium pb-2">Revenue</p>
                                <div className="relative">
                                    <input className="form-input w-full rounded-lg border border-border-light bg-transparent py-2.5 pl-3 pr-12 text-sm focus:border-primary dark:border-gray-700" placeholder="100,000" type="text"/>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"><span className="text-sm text-subtext-light dark:text-subtext-dark">M JPY</span></div>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label className="flex flex-col">
                                <p className="text-text-light dark:text-text-dark text-sm font-medium pb-2">Gross Margin</p>
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
                    <h3 className="text-text-light dark:text-white text-base font-semibold">Financial Files</h3>
                    <div className="mt-4 rounded-xl border border-border-light bg-slate-50/50 p-4 dark:border-gray-800 dark:bg-gray-800/20">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-text-light dark:text-text-dark">Upload Financial Statements</p>
                                <p className="mt-1 text-xs text-subtext-light dark:text-subtext-dark">PDF, Excel (Max 10MB)</p>
                            </div>
                            <button className="flex items-center gap-2 rounded-lg border border-border-light bg-white px-3 py-2 text-sm font-semibold text-text-light hover:bg-slate-100 dark:border-gray-700 dark:bg-gray-800 dark:text-text-dark dark:hover:bg-gray-700" type="button">
                                <span className="material-symbols-outlined text-base">upload</span><span>Upload</span>
                            </button>
                        </div>
                         <div className="mt-4 flex items-start gap-2 rounded-lg bg-blue-50/70 p-3 dark:bg-blue-900/20">
                            <span className="material-symbols-outlined mt-0.5 text-base text-blue-500 dark:text-blue-400">spark</span>
                            <p className="text-xs text-subtext-light dark:text-subtext-dark">Uploading files improves AI analysis accuracy for better matching.</p>
                        </div>
                    </div>
                 </div>
            </section>
            
            <section className="rounded-xl border border-border-light dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6">
                <h2 className="text-text-light dark:text-white text-lg font-semibold">Business Details & Issues</h2>
                <div className="mt-6 flex flex-col gap-6">
                    <label className="flex flex-col">
                        <p className="text-text-light dark:text-text-dark text-sm font-medium pb-2">Business Description</p>
                         <textarea className="form-textarea w-full min-h-32 rounded-lg bg-transparent border border-border-light dark:border-gray-700 p-3 text-sm focus:border-primary focus:ring-0" placeholder="Describe your business, products, and services in detail."></textarea>
                    </label>
                    <div>
                         <p className="text-text-light dark:text-text-dark text-sm font-medium pb-2">Current Issues</p>
                         <div className="rounded-lg border border-border-light dark:border-gray-700">
                             <div className="flex flex-nowrap overflow-x-auto border-b border-border-light dark:border-gray-700 p-2 gap-2 custom-scrollbar">
                                {['New Customer Acquisition', 'Global Expansion', 'Operational Efficiency', 'Hiring', 'Fundraising', 'Marketing'].map(tag => (
                                     <button key={tag} className="flex-shrink-0 whitespace-nowrap rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-subtext-light hover:bg-slate-200 dark:bg-gray-800 dark:text-subtext-dark dark:hover:bg-gray-700">{tag}</button>
                                ))}
                             </div>
                             <textarea className="form-textarea w-full rounded-b-lg border-0 bg-transparent p-3 text-sm focus:ring-0" placeholder="Describe the specific issues related to the selected tags..." rows={4}></textarea>
                         </div>
                    </div>
                </div>
            </section>

          </div>
          
          <aside className="w-full lg:w-72 lg:sticky lg:top-8 lg:self-start">
             <div className="rounded-xl p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border border-border-light dark:border-gray-800">
                 <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
                    <h3 className="font-semibold text-text-light dark:text-white">AI Insight</h3>
                 </div>
                 <div className="mt-4 flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-sm text-green-500 mt-1">check_circle</span>
                         <p className="text-xs text-subtext-light dark:text-subtext-dark">Based on inputs, high affinity with <strong className="font-medium text-text-light dark:text-white">SaaS Industry</strong> is predicted.</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <span className="material-symbols-outlined text-sm text-amber-500 mt-1">lightbulb</span>
                         <p className="text-xs text-subtext-light dark:text-subtext-dark">Describing issues more specifically can improve matching accuracy by <strong className="font-medium text-text-light dark:text-white">25%</strong>.</p>
                    </div>
                 </div>
             </div>
          </aside>
        </div>
         <footer className="mt-12 flex justify-end gap-3 border-t border-border-light dark:border-gray-800 py-6">
            <button className="rounded-lg border border-border-light px-4 py-2 text-sm font-semibold text-text-light hover:bg-slate-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">Cancel</button>
            <button className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary/90">Save Profile</button>
        </footer>
      </div>
    </div>
  );
};

export default CompanyProfile;
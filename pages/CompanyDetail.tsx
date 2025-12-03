import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '6mo ago', score: 65 },
  { name: '5mo ago', score: 59 },
  { name: '4mo ago', score: 72 },
  { name: '3mo ago', score: 75 },
  { name: '2mo ago', score: 78 },
  { name: '1mo ago', score: 82 },
  { name: 'Current', score: 85 },
];

const CompanyDetail: React.FC = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto h-full">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-subtext-light dark:text-subtext-dark text-sm">Company Search</span>
          <span className="text-subtext-light dark:text-subtext-dark text-sm">/</span>
          <span className="text-subtext-light dark:text-subtext-dark text-sm">Results</span>
          <span className="text-subtext-light dark:text-subtext-dark text-sm">/</span>
          <span className="text-text-light dark:text-white text-sm font-medium">ABC Inc.</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Header Card */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 h-48 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEeJkb31GThquW8AlJhj_5Ex1r61itAmglmaGti4LtKmVcHePGMpdl8-Dv9JmCwCcMDNXMrgy-akdWra-hWTdImK5tGJ8fnteFu6kl5gNO1jB5SMJ8NQc-8aobP4X4EyhWlCl3Py4X66WJhWqxbx4uea0GWXUN2OHt5enyU3LO5kLWL6hymAZx0XK3eOSVissP_0NJC77jV9bPf8KUFbWBWQ6VxH6rBQBC_2m4rx0sbbRcGcGCnt1WKxwZ98k5Sb4DSOdIIVloZc8")' }}></div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm">ABC Inc.</p>
                      <h1 className="text-2xl font-bold text-text-light dark:text-white mt-1">Leading the world with future technology.</h1>
                    </div>
                    <div className="text-center">
                        <p className="text-xs font-bold text-subtext-light dark:text-subtext-dark">Cultive Score</p>
                        <p className="text-2xl font-bold text-primary">85<span className="text-sm">%</span></p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-subtext-light dark:text-subtext-dark">
                    <p><span className="font-medium text-text-light dark:text-white">Founded:</span> April 1, 2015</p>
                    <p><span className="font-medium text-text-light dark:text-white">Location:</span> 1-1-1 Marunouchi, Chiyoda-ku, Tokyo</p>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90">
                         <span className="material-symbols-outlined text-base">picture_as_pdf</span>
                         Upload Financials
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-text-light dark:text-white rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
                         <span className="material-symbols-outlined text-base">article</span>
                         View AI Articles
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chart Section */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-text-light dark:text-white mb-4">Cultive Score Trend</h3>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="name" tick={{fontSize: 12, fill: '#9CA3AF'}} axisLine={false} tickLine={false} />
                            <YAxis domain={[0, 100]} tick={{fontSize: 12, fill: '#9CA3AF'}} axisLine={false} tickLine={false} />
                            <Tooltip contentStyle={{backgroundColor: '#1F2937', color: '#fff', borderRadius: '8px', border: 'none'}} itemStyle={{color: '#fff'}} />
                            <Line type="monotone" dataKey="score" stroke="#135bec" strokeWidth={3} dot={{r: 4, fill: '#135bec', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6}} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* AI Analysis */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">auto_awesome</span>
                    </div>
                    <h3 className="text-lg font-bold text-text-light dark:text-white">AI Financial Highlights</h3>
                 </div>
                 <ul className="space-y-3 list-disc list-inside text-text-light dark:text-gray-300">
                    <li><span className="font-semibold">Growth:</span> 150% YoY revenue increase, suggesting a rapid growth phase.</li>
                    <li><span className="font-semibold">Profitability:</span> Operating margin improved by 5%, exceeding industry average.</li>
                    <li><span className="font-semibold">Stability:</span> High equity ratio, establishing a stable foundation resilient to external changes.</li>
                 </ul>
            </div>
            
             {/* Tags */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                 <h3 className="text-lg font-bold text-text-light dark:text-white mb-4">Tags</h3>
                 <div className="flex flex-col gap-4">
                    <div>
                        <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark mb-2">Industry</p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">IT / SaaS</span>
                            <span className="px-3 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">AI Development</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark mb-2">Strengths</p>
                        <div className="flex gap-2">
                             <span className="px-3 py-1 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm">Technical Prowess</span>
                             <span className="px-3 py-1 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm">Rapid Growth</span>
                             <span className="px-3 py-1 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm">Global Expansion</span>
                        </div>
                    </div>
                 </div>
            </div>

          </div>
          
          <div className="lg:col-span-1 flex flex-col gap-6">
             <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                <h4 className="text-base font-medium text-subtext-light dark:text-subtext-dark mb-3">Interest Level</h4>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 font-bold">
                    <span className="material-symbols-outlined">local_fire_department</span> High
                </div>
             </div>
             
             <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm flex flex-col gap-4">
                <h4 className="text-base font-medium text-subtext-light dark:text-subtext-dark">Contact Person</h4>
                <div className="flex items-center gap-3">
                     <div className="size-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9aL-mrSM5n0K0sdNQCrIxWbEO4gGCNTbMCs6kAPzIHaGRc5p3OuMr69GBrERiPn62BkJUjERXnmi3IJ0vMrGKP_0uuBpEQR5mdRiLJq_ZIC79U6KYbf34d7GOZKu4VZWRznqtC24VE2kqk_X7cxQaPayRd6yhWa2ZWXrN9nB7QuUBp3M-QuFIqVfSJnrpNJ5xkqxD1ajDUpjjgp3fF2wCtSrCFPIfmhRk0FHFOFPLYVLnrKQmIUaRLNprZpdCIP4ORgLV6b_mBpU")' }}></div>
                     <div>
                        <p className="font-medium text-text-light dark:text-white">Taro Yamada</p>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark">Head of Business Dev</p>
                     </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                    <span className="material-symbols-outlined">send</span> Send Message
                </button>
                 <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-text-light dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                    <span className="material-symbols-outlined">bookmark_add</span> Add to Favorites
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
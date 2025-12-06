import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const rankingData = [
  { rank: 1, name: "Innovatech Solutions", score: 95, likes: 1204, views: "8.5k", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeKqVqAYOlwzfjOipQl-byLX5F_Jh57sE9cten5EhoiNAw7eOvBEfHyrtHKAxnXOmKaTyBJP57GyN7nvvOSAZfaXFenRHXRRt-t-Tlx-M26rhXVqrncbn-lSkXN7-CIJaC55UBlDoP6xFmJMOrG-QITgDNsQpWAe07oGxL7B3tCKDJNcEHUEA65USjdrvn78OZKTBKKtdf7kCtGo63L6MEGurUd02j3Is9k92XMWN2Hx-05lQ8XLSj6uJEoUx_LwxttARVv0tgvzE" },
  { rank: 2, name: "Quantum Leap Inc.", score: 92, likes: 980, views: "7.2k", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbYz7_5B0_LIbTxtMCaEo6XNiy9saUS0jsiZO6a_BiDRrBS3BD0WOSYHAghj8bY317gmHi1KTn9TayLX80OKFp-SFgugGsqqgefczJp6AAAHMOFM_ReVa4wWM6hRtf5HaFRMZnMGVgTDa0PTIZQ8GY5I4rAzMwlEF_9jQBH_yP9QH4ZexahUhBGtmjnenTFuXpi8368klR2qBp9LN_K11geWNm5KnEdwMHrbV_22kmeC1nsb3B1EqyZxCjsj56WNY9GPLVDpZzA30" },
  { rank: 3, name: "Future Dynamics", score: 88, likes: 850, views: "6.8k", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3GTNmba-wCQWqq1494CVEA0gAWUSJFWsPOyMjyRpkh5-4MZsoi1wxPn1cwdRdDr_GRTC1OMR0m3RZGWH5kkNBTOK_U0cI2sQzM4OZkmydrGGU3zeIWXjxPFhbYrtjuqnGOmq5thGhLb1kEsjw04Dc0WPOQqeKREI1wB3NoL4_SpA8vUsneFds7BlUGpXnKkA3Zh3MlnmD29daNvNHPQ31MP1qRY2TQTZst3GyYC2gpv_S9Fer2ATlSmsqzHb9tVwW6U6PFc1PUaE" },
  { rank: 4, name: "Synergy Corp", score: 85, likes: 760, views: "6.1k", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkSnfnplesWl_xjgf139d8OR032BwMK7s6nVzQbJcN4QQBl920GOCB4J6QUxxORf5MJcUiTYIqoUT7IfgowOXW0wugKCHTdwGBV4LU1OPKUBj1tDw-iLkNnDyW6SvV5uETz2hvHX-uECSUrVs80bXCDtivEjHV3W_-rTQ9hkUqze0edYGqSKlgUUPV5PTCSIJrFbic7B8vCinRHItb_VoNv2j9o6qZI7cQVDpy3Qjp6HBfl6dYJeS0XUQEvI-8jjryvgELEYs9oSc" },
  { rank: 5, name: "Apex Innovations", score: 81, likes: 710, views: "5.5k", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgrClXzqfQFogZa9_fC_v2es6O7C3XorgTKBtL198GrD_wDNcYnmcHLTZQTwzUD86Qdiu1CUn_yKwvz7KYni9Qlap9D-qeIEnWzKp_EolulcuMKyPYVM715Zya_VzLAnNY4bt9wpnO-cS_YfsoY0bBFiWnBBBTTZTnvCBf9ZoWTFLa8Pqx6pUS2q0WiFlW9bDAhqhoNtCRQ3Jq3xVqwktRkQGuFzpMo-0TgSG7h0v-R6LEtuwbVWJ5yz66dkH43jqcGaZ3MDHzi-8" },
];

const chartData = [
  { name: '2019', score: 60 },
  { name: '2020', score: 75 },
  { name: '2021', score: 68 },
  { name: '2022', score: 85 },
  { name: '2023', score: 80 },
  { name: '2024', score: 95 },
];

const Ranking: React.FC = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto h-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <header className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-text-light dark:text-white">企業ランキング</h1>
            <p className="text-subtext-light dark:text-subtext-dark mt-1">Cultive Scoreとエンゲージメント指標に基づく評価です。</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-border-light dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
             <span className="material-symbols-outlined">calendar_today</span> 期間でフィルター
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-8">
             <div className="bg-white dark:bg-background-dark border border-border-light dark:border-gray-800 rounded-xl overflow-hidden">
                <table className="w-full">
                   <thead className="bg-gray-50 dark:bg-white/5">
                      <tr>
                         <th className="px-6 py-4 text-left text-xs font-medium text-subtext-light dark:text-subtext-dark uppercase">順位</th>
                         <th className="px-6 py-4 text-left text-xs font-medium text-subtext-light dark:text-subtext-dark uppercase">企業名</th>
                         <th className="px-6 py-4 text-left text-xs font-medium text-subtext-light dark:text-subtext-dark uppercase">Cultive Score</th>
                         <th className="px-6 py-4 text-left text-xs font-medium text-subtext-light dark:text-subtext-dark uppercase hidden sm:table-cell">いいね</th>
                         <th className="px-6 py-4 text-left text-xs font-medium text-subtext-light dark:text-subtext-dark uppercase hidden md:table-cell">閲覧数</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-border-light dark:divide-gray-800">
                      {rankingData.map((item) => (
                        <tr key={item.rank} className="hover:bg-primary/5 dark:hover:bg-primary/10 cursor-pointer">
                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-subtext-light dark:text-subtext-dark">{item.rank}</td>
                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-light dark:text-white flex items-center gap-3">
                              <img src={item.img} className="size-8 rounded-full" alt={item.name} />
                              {item.name}
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-3">
                                 <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-primary h-full rounded-full" style={{ width: `${item.score}%` }}></div>
                                 </div>
                                 <span className="text-sm font-semibold text-text-light dark:text-white">{item.score}</span>
                              </div>
                           </td>
                           <td className="px-6 py-4 whitespace-nowrap text-sm text-subtext-light dark:text-subtext-dark hidden sm:table-cell">{item.likes}</td>
                           <td className="px-6 py-4 whitespace-nowrap text-sm text-subtext-light dark:text-subtext-dark hidden md:table-cell">{item.views}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
             
             <div className="p-6 bg-white dark:bg-background-dark border border-border-light dark:border-gray-800 rounded-xl">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <span className="material-symbols-outlined text-3xl">military_tech</span>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-text-light dark:text-white">Cultive Scoreについて</h2>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark">企業の活動をスコア化し、マッチング精度を向上させます。リアルタイムで更新されます。</p>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                        { label: "いいね", val: "+5" },
                        { label: "オファー", val: "+10" },
                        { label: "情報更新", val: "+5" },
                        { label: "記事", val: "+10" }
                    ].map((s, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-white/5 rounded-lg p-3 text-center">
                            <p className="text-sm font-medium text-text-light dark:text-white">{s.label}</p>
                            <p className="text-lg font-bold text-primary">{s.val}</p>
                        </div>
                    ))}
                 </div>
             </div>
          </div>
          
          <div className="lg:col-span-1">
             <div className="sticky top-8 bg-white dark:bg-background-dark border border-border-light dark:border-gray-800 rounded-xl p-6">
                 <h3 className="font-semibold text-text-light dark:text-white mb-1">スコア推移</h3>
                 <p className="text-sm text-subtext-light dark:text-subtext-dark mb-4">Innovatech Solutions</p>
                 <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="name" tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                            <YAxis domain={[0, 100]} hide />
                            <Tooltip contentStyle={{backgroundColor: '#1F2937', color: '#fff', border: 'none'}} />
                            <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={2} dot={{r: 3}} />
                        </LineChart>
                    </ResponsiveContainer>
                 </div>
                 <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="text-sm text-subtext-light dark:text-subtext-dark">リアルタイム更新</span>
                    <span className="text-green-500 font-bold flex items-center text-sm"><span className="material-symbols-outlined text-sm">arrow_upward</span> 5.2%</span>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
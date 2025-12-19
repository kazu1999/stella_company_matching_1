import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CompanyDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // モックデータ：実際はAPIから取得
  // プロフィールや自社登録で入力される情報を反映
  const company = {
    id: id || '1',
    name: '株式会社Stella',
    catchphrase: 'AI技術で未来を創造する、SaaSスタートアップ',
    score: 85,
    founded: '2023年4月',
    location: '東京都渋谷区',
    url: 'https://stella-inc.jp',
    industry: 'IT / SaaS',
    description: `
      当社は、中小企業のDXを推進するSaaSプロダクト「Stella Cloud」を開発・運営しています。
      AIを活用した業務効率化機能が特徴で、リリースから1年で導入社数1,000社を突破しました。
      現在は、更なる機能拡張とグローバル展開を見据え、シリーズAの資金調達を実施中です。
    `,
    financials: {
      revenue: '1.5億円',
      grossMargin: '65%',
      growthRate: '150%',
    },
    strengths: ['AI技術力', 'データ分析', '開発スピード', 'UXデザイン'],
    weaknesses: ['営業組織の構築', 'マーケティング予算', '知名度'],
    concerns: ['新規顧客獲得', 'エンジニア採用', '資金調達'],
    contactPerson: {
      name: '山田 太郎',
      position: '代表取締役 CEO',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9aL-mrSM5n0K0sdNQCrIxWbEO4gGCNTbMCs6kAPzIHaGRc5p3OuMr69GBrERiPn62BkJUjERXnmi3IJ0vMrGKP_0uuBpEQR5mdRiLJq_ZIC79U6KYbf34d7GOZKu4VZWRznqtC24VE2kqk_X7cxQaPayRd6yhWa2ZWXrN9nB7QuUBp3M-QuFIqVfSJnrpNJ5xkqxD1ajDUpjjgp3fF2wCtSrCFPIfmhRk0FHFOFPLYVLnrKQmIUaRLNprZpdCIP4ORgLV6b_mBpU',
    },
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEeJkb31GThquW8AlJhj_5Ex1r61itAmglmaGti4LtKmVcHePGMpdl8-Dv9JmCwCcMDNXMrgy-akdWra-hWTdImK5tGJ8fnteFu6kl5gNO1jB5SMJ8NQc-8aobP4X4EyhWlCl3Py4X66WJhWqxbx4uea0GWXUN2OHt5enyU3LO5kLWL6hymAZx0XK3eOSVissP_0NJC77jV9bPf8KUFbWBWQ6VxH6rBQBC_2m4rx0sbbRcGcGCnt1WKxwZ98k5Sb4DSOdIIVloZc8'
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto h-full">
      <div className="mx-auto max-w-7xl">
        {/* パンくずリスト */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-subtext-light dark:text-subtext-dark text-sm cursor-pointer hover:text-primary" onClick={() => navigate('/companies')}>企業一覧</span>
          <span className="text-subtext-light dark:text-subtext-dark text-sm">/</span>
          <span className="text-text-light dark:text-white text-sm font-medium">{company.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* ヘッダーカード */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-border-light dark:border-gray-800">
              <div className="flex flex-col md:flex-row gap-6">
                <div 
                  className="w-full md:w-1/3 h-48 bg-cover bg-center rounded-lg flex-shrink-0" 
                  style={{ backgroundImage: `url("${company.coverImage}")` }}
                ></div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm mb-1">{company.industry}</p>
                      <h1 className="text-2xl font-bold text-text-light dark:text-white leading-tight">{company.catchphrase}</h1>
                      <p className="text-lg font-medium text-text-light dark:text-white mt-1">{company.name}</p>
                    </div>
                    <div className="text-center bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
                        <p className="text-xs font-bold text-subtext-light dark:text-subtext-dark whitespace-nowrap">Cultive Score</p>
                        <p className="text-2xl font-bold text-primary">{company.score}<span className="text-sm">%</span></p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-subtext-light dark:text-subtext-dark mt-2">
                    <p className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">calendar_month</span>
                      <span className="font-medium text-text-light dark:text-white">設立:</span> {company.founded}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">location_on</span>
                      <span className="font-medium text-text-light dark:text-white">所在地:</span> {company.location}
                    </p>
                    <p className="col-span-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">language</span>
                      <a href={company.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline truncate">
                        {company.url}
                      </a>
                    </p>
                  </div>

                  <div className="flex gap-3 mt-auto pt-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-text-light dark:text-white rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                         <span className="material-symbols-outlined text-base">description</span>
                         財務データ
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-text-light dark:text-white rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                         <span className="material-symbols-outlined text-base">article</span>
                         AI記事一覧
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 事業詳細 */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-border-light dark:border-gray-800">
                <h3 className="text-lg font-bold text-text-light dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">business_center</span>
                  事業詳細
                </h3>
                <p className="text-text-light dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {company.description}
                </p>
            </div>

            {/* 財務ハイライト & AI分析 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-border-light dark:border-gray-800">
                  <h3 className="text-lg font-bold text-text-light dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500">trending_up</span>
                    財務ハイライト
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-2">
                      <span className="text-subtext-light dark:text-subtext-dark">年間売上</span>
                      <span className="font-bold text-text-light dark:text-white text-lg">{company.financials.revenue}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-2">
                      <span className="text-subtext-light dark:text-subtext-dark">粗利率</span>
                      <span className="font-bold text-text-light dark:text-white text-lg">{company.financials.grossMargin}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-subtext-light dark:text-subtext-dark">成長率 (YoY)</span>
                      <span className="font-bold text-green-500 text-lg">+{company.financials.growthRate}</span>
                    </div>
                  </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-border-light dark:border-gray-800">
                  <h3 className="text-lg font-bold text-text-light dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-purple-500">auto_awesome</span>
                    AI分析レポート
                  </h3>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg">
                    <p className="text-sm text-text-light dark:text-gray-300 leading-relaxed">
                      <span className="font-bold text-purple-700 dark:text-purple-400">成長フェーズのテック企業</span><br/>
                      高い技術力と急成長する売上が特徴です。営業・マーケティング面の強化が課題となっており、これらの支援を提供できる企業とのシナジーが高いと予測されます。
                    </p>
                  </div>
              </div>
            </div>
            
             {/* タグ情報 */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-border-light dark:border-gray-800">
                 <h3 className="text-lg font-bold text-text-light dark:text-white mb-4">企業属性・タグ</h3>
                 <div className="space-y-6">
                    <div>
                        <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>強み
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {company.strengths.map(tag => (
                              <span key={tag} className="px-3 py-1 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>弱み・課題
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {company.weaknesses.map(tag => (
                              <span key={tag} className="px-3 py-1 bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 rounded-full text-sm">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>現在抱えている悩み
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {company.concerns.map(tag => (
                              <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">{tag}</span>
                            ))}
                        </div>
                    </div>
                 </div>
            </div>

          </div>
          
          {/* サイドバー */}
          <div className="lg:col-span-1 flex flex-col gap-6">
             {/* 担当者情報 */}
             <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-border-light dark:border-gray-800 flex flex-col gap-4">
                <h4 className="text-base font-bold text-text-light dark:text-white">担当者</h4>
                <div className="flex items-center gap-3">
                     <div 
                       className="size-12 rounded-full bg-cover bg-center border border-gray-200 dark:border-gray-700" 
                       style={{ backgroundImage: `url("${company.contactPerson.image}")` }}
                     ></div>
                     <div>
                        <p className="font-bold text-text-light dark:text-white">{company.contactPerson.name}</p>
                        <p className="text-xs text-subtext-light dark:text-subtext-dark">{company.contactPerson.position}</p>
                     </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <button className="col-span-2 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
                      <span className="material-symbols-outlined text-lg">send</span> メッセージ
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-border-light dark:border-gray-700 bg-white dark:bg-gray-800 text-text-light dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium">
                      <span className="material-symbols-outlined text-lg">bookmark_add</span> 保存
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-border-light dark:border-gray-700 bg-white dark:bg-gray-800 text-text-light dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium">
                      <span className="material-symbols-outlined text-lg">share</span> 共有
                  </button>
                </div>
             </div>

             {/* 興味レベル */}
             <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-border-light dark:border-gray-800">
                <h4 className="text-base font-bold text-text-light dark:text-white mb-3">AIマッチング分析</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium text-subtext-light dark:text-subtext-dark">全体的な親和性</span>
                      <span className="text-xs font-bold text-primary">高い</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium text-subtext-light dark:text-subtext-dark">技術シナジー</span>
                      <span className="text-xs font-bold text-blue-500">非常に高い</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium text-subtext-light dark:text-subtext-dark">課題解決力</span>
                      <span className="text-xs font-bold text-green-500">高い</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>
             </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
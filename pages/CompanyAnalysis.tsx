import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

interface CompanyData {
  industry: string;
  strengths: string[];
  strengthsInput: string;
  weaknesses: string[];
  weaknessesInput: string;
  concerns: string[];
  concernsInput: string;
}

interface SolutionProcess {
  solution: string;
  steps: string[];
  timeline: string;
  priority: 'high' | 'medium' | 'low';
}

interface MatchedCompany {
  id: string;
  name: string;
  industry: string;
  logo: string;
  matchScore: number;
  description: string;
  matchingReason: string;
  strengths: string[];
  canSolveIssues: string[];
}

interface AnalysisResult {
  summary: string;
  surfaceIssues: string[];
  structuralIssues: string[];
  deepIssues: string[];
  solutions: string[];
  solutionProcesses: SolutionProcess[];
  matchedCompanies: MatchedCompany[];
}

const CompanyAnalysis: React.FC = () => {
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    // 登録された企業情報を取得（実際の実装ではAPIから取得）
    // モックデータとしてローカルストレージから取得する想定
    const savedData = localStorage.getItem('companyRegistrationData');
    if (savedData) {
      setCompanyData(JSON.parse(savedData));
    } else {
      // デモ用のモックデータ
      setCompanyData({
        industry: 'SaaS',
        strengths: ['技術力が高い', '優秀な人材が揃っている'],
        strengthsInput: 'AI技術に強みがあり、データ分析のノウハウが豊富',
        weaknesses: ['マーケティング力が弱い', '顧客基盤が小さい'],
        weaknessesInput: '新規顧客獲得に課題がある',
        concerns: ['新規顧客獲得', '業務効率化'],
        concernsInput: '月間リード数を50件以上増やしたい',
      });
    }
  }, []);

  const handleAnalyze = async () => {
    if (!companyData) {
      alert('企業情報が登録されていません。先に自社登録を行ってください。');
      navigate(RoutePath.CompanyRegistration);
      return;
    }

    setIsAnalyzing(true);

    // AI分析のシミュレーション（実際の実装ではGemini APIを使用）
    setTimeout(() => {
      const result: AnalysisResult = generateAnalysis(companyData);
      setAnalysisResult(result);
      setIsAnalyzing(false);
    }, 3000);
  };

  const generateMatchedCompanies = (
    allIssues: string[],
    concerns: string[],
    weaknesses: string[]
  ): MatchedCompany[] => {
    // モックデータ：課題解決に貢献できる企業
    const availableCompanies: Omit<MatchedCompany, 'matchScore' | 'matchingReason' | 'canSolveIssues'>[] = [
      {
        id: 'marketing-pro',
        name: 'Marketing Pro',
        industry: 'マーケティング支援',
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6pwBV0sKt7kgVsjRehRqpQ5icR6Q11NWJxonPN8ows0WvwkUE3zHKSDnPA6BOn6nZ6-8r8M3XaFopUkxNvYHsJqW3GDyDG1_4BSlwRE3zxYfF0v450Cf3KwMh9GXsFmtHkj5aWEugP1BTFRF8yR5axtcnlM0-J5b2vJUlKrylPwILjZw2KMtxmIPWPto1nnqtIlepsV61OUjmC0FDe8Hgd6G8ZK3uKKzEmemztSns4L6fdpOKQyeO3wbCNCjxM7MkDJH-1tB0x8w',
        description: 'BtoB企業向けマーケティングオートメーションとリード獲得支援を提供',
        strengths: ['マーケティングオートメーション', 'リード獲得', 'コンテンツマーケティング'],
      },
      {
        id: 'dx-solutions',
        name: 'DX Solutions',
        industry: 'DX・業務効率化',
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC1IhKMbiEbpXwfTCVd7kKuSGyv0k7WTvtA678-XoMV7-c2JkkNxY66XDk8yuxMfa03TlFvXEZudcZEycnfK1tZ5wu5UoTAEgHEM_a5w0n8D65PdktX1wMvbSDPPx3KqKjtZ4ToFMgbmIPFwm6CpRm-Wq7tF_g3uFu01pN8tddAuAgIOFQqTLwN5lOosHDh3EhmgJM0d6CIU5ZEG_SMjmN9fpwVtdlTBVg87MscWMZJUpGyLHFxPpQdNOuvwyyrNbHzTKDU6OyCXk',
        description: 'RPAとワークフロー管理ツールによる業務効率化を支援',
        strengths: ['RPA導入', '業務プロセス改善', 'システム化'],
      },
      {
        id: 'hr-partners',
        name: 'HR Partners',
        industry: '採用・人材育成',
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB69TajbCZLZN9Y-OUVDYDjS6wnSILs2qOMBomEJ69pia19cmj6cUfjzZZQwpbUeeuoqFg7eitxAY47J-rBOqRcasRrd0kbldKOe54Gcdk8gk66ZpNYKhSnnct08FlLlbfiYxUDEqI0Sez3eknLFdPybWTnntPZ32vMWTqy4Il9FVFSqegYIWXYLTOFdhpi6HMhCpj_znSbwsNuSCEeDxFwyieUDqU2hwUwH7YPDiSpsfuFNmB4gaJRM5ku23e365K8QD-CmaErqmA',
        description: '採用プロセスの体系化と人材育成プログラムを提供',
        strengths: ['採用支援', '人材育成', '組織開発'],
      },
      {
        id: 'finance-advisors',
        name: 'Finance Advisors',
        industry: '財務・会計支援',
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQdLUckXTI9O1xwIN41Dgz-K0886PiEjSYKjkWl79oT7VUE7-96oM-FViah6iE8NhaJxV2vYXndL08hbydnK-hTIf4IGyJY4g1nYRKbnq-gzyD7CYR7d5ZnuXvCQDoYZx1UZOGqZdzZfk2IhhVhCTLpy2Yd3kJ8PURnTJCjBQr3uA5typTsAik3CnXZ1NQUOrXTsEicAuSeL0m8s572-p0qKr5FHvHaHVKQUm7fRcd0NE9tsxOLzSuVOOh_2tNpFMfQdIcMwVG_GY',
        description: '財務ダッシュボード構築と予実管理の支援を提供',
        strengths: ['財務管理', '予実管理', '資金繰り支援'],
      },
      {
        id: 'brand-strategy',
        name: 'Brand Strategy Co.',
        industry: 'ブランディング・マーケティング',
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6pwBV0sKt7kgVsjRehRqpQ5icR6Q11NWJxonPN8ows0WvwkUE3zHKSDnPA6BOn6nZ6-8r8M3XaFopUkxNvYHsJqW3GDyDG1_4BSlwRE3zxYfF0v450Cf3KwMh9GXsFmtHkj5aWEugP1BTFRF8yR5axtcnlM0-J5b2vJUlKrylPwILjZw2KMtxmIPWPto1nnqtIlepsV61OUjmC0FDe8Hgd6G8ZK3uKKzEmemztSns4L6fdpOKQyeO3wbCNCjxM7MkDJH-1tB0x8w',
        description: 'ブランドメッセージの明確化とマーケティング戦略の策定を支援',
        strengths: ['ブランディング', 'マーケティング戦略', 'コンテンツ制作'],
      },
    ];

    // 課題に基づいてマッチング
    const matched: MatchedCompany[] = [];

    // マーケティング・顧客獲得関連の課題がある場合
    if (
      allIssues.some(i => i.includes('顧客') || i.includes('マーケ') || i.includes('リード')) ||
      concerns.some(c => c.includes('顧客') || c.includes('マーケ'))
    ) {
      matched.push({
        ...availableCompanies[0],
        matchScore: 92,
        matchingReason: '新規顧客獲得とマーケティングオートメーションの課題解決に強みがあります',
        canSolveIssues: ['新規顧客獲得数が目標に達していない', 'マーケティング施策の効果が測定できていない'],
      });
    }

    // 業務効率化・DX関連の課題がある場合
    if (
      allIssues.some(i => i.includes('効率化') || i.includes('DX') || i.includes('業務') || i.includes('属人')) ||
      concerns.some(c => c.includes('効率化') || c.includes('DX'))
    ) {
      matched.push({
        ...availableCompanies[1],
        matchScore: 88,
        matchingReason: '業務プロセスの標準化とシステム化による効率化を支援します',
        canSolveIssues: ['業務が属人化', '業務プロセスが標準化されていない'],
      });
    }

    // 採用・人材関連の課題がある場合
    if (
      allIssues.some(i => i.includes('採用') || i.includes('人材') || i.includes('育成')) ||
      concerns.some(c => c.includes('採用') || c.includes('人材')) ||
      weaknesses.some(w => w.includes('人材') || w.includes('採用'))
    ) {
      matched.push({
        ...availableCompanies[2],
        matchScore: 85,
        matchingReason: '採用プロセスの体系化と人材育成体制の構築を支援します',
        canSolveIssues: ['応募が来ない', '採用プロセスが体系化されていない'],
      });
    }

    // 財務関連の課題がある場合
    if (
      allIssues.some(i => i.includes('財務') || i.includes('資金') || i.includes('予実')) ||
      concerns.some(c => c.includes('資金') || c.includes('財務'))
    ) {
      matched.push({
        ...availableCompanies[3],
        matchScore: 90,
        matchingReason: '財務管理と予実管理の徹底により、資金繰りと投資判断を支援します',
        canSolveIssues: ['財務ダッシュボードがない', '月次予実管理が未整備'],
      });
    }

    // ブランディング・マーケティング関連の課題がある場合
    if (
      allIssues.some(i => i.includes('ブランド') || i.includes('認知')) ||
      weaknesses.some(w => w.includes('ブランド') || w.includes('マーケティング'))
    ) {
      matched.push({
        ...availableCompanies[4],
        matchScore: 87,
        matchingReason: 'ブランドメッセージの明確化と一貫性のあるマーケティング戦略を支援します',
        canSolveIssues: ['ブランドメッセージが弱い', 'マーケティング戦略が不明確'],
      });
    }

    // マッチスコアでソート（高い順）
    return matched.sort((a, b) => b.matchScore - a.matchScore).slice(0, 5);
  };

  const generateAnalysis = (data: CompanyData): AnalysisResult => {
    const industry = data.industry;
    const strengths = [...data.strengths, data.strengthsInput].filter(s => s.trim());
    const weaknesses = [...data.weaknesses, data.weaknessesInput].filter(w => w.trim());
    const concerns = [...data.concerns, data.concernsInput].filter(c => c.trim());

    // 企業状況の要約
    const summary = `${industry}業界において、${strengths.join('、')}という強みを持っています。一方で、${weaknesses.join('、')}という課題があり、${concerns.join('、')}について悩んでいます。これらの情報から、企業の成長には技術力と人材の強みを活かしながら、マーケティングと顧客基盤の拡大が重要な課題となっています。`;

    // 表層課題（表面的で直接的な課題）
    const surfaceIssues = [
      concerns.includes('新規顧客獲得') || concerns.some(c => c.includes('顧客')) 
        ? '新規顧客獲得数が目標に達していない'
        : null,
      weaknesses.some(w => w.includes('マーケティング') || w.includes('営業'))
        ? 'マーケティング施策の効果が測定できていない'
        : null,
      concerns.some(c => c.includes('効率化') || c.includes('DX'))
        ? '業務プロセスが属人化しており、効率が悪い'
        : null,
      weaknesses.some(w => w.includes('人材') || w.includes('採用'))
        ? '必要なスキルを持つ人材の採用が困難'
        : null,
    ].filter(issue => issue !== null) as string[];

    // 構造課題（組織やシステムの構造的な問題）
    const structuralIssues = [
      weaknesses.some(w => w.includes('マーケティング') || w.includes('営業'))
        ? '営業とマーケティングの連携が取れていない。リード獲得から成約までのプロセスが最適化されていない'
        : null,
      concerns.some(c => c.includes('効率化') || c.includes('DX'))
        ? '業務フローが標準化されておらず、属人化している。システム化・自動化が進んでいない'
        : null,
      weaknesses.some(w => w.includes('人材') || w.includes('採用'))
        ? '採用プロセスが体系化されておらず、評価基準が不明確。組織的な人材育成の仕組みがない'
        : null,
      concerns.some(c => c.includes('顧客') || c.includes('リピート'))
        ? '顧客データが分散しており、一元管理されていない。顧客との関係性を継続的に管理する仕組みがない'
        : null,
    ].filter(issue => issue !== null) as string[];

    // 深層課題（根本的な経営課題や文化・価値観の問題）
    const deepIssues = [
      weaknesses.some(w => w.includes('マーケティング') || w.includes('営業')) || concerns.some(c => c.includes('顧客'))
        ? '顧客価値の提供方法が明確でない。市場における自社のポジショニングが曖昧で、差別化戦略が確立されていない'
        : null,
      concerns.some(c => c.includes('効率化') || c.includes('DX')) || weaknesses.some(w => w.includes('業務'))
        ? 'データドリブンな意思決定文化が根付いていない。KPI管理やPDCAサイクルが機能していない'
        : null,
      weaknesses.some(w => w.includes('人材') || w.includes('採用')) || concerns.some(c => c.includes('採用'))
        ? '組織のビジョンやミッションが明確でなく、従業員の方向性が統一されていない。組織文化の構築が不十分'
        : null,
      concerns.some(c => c.includes('資金') || c.includes('財務'))
        ? '財務戦略と事業戦略の連携が取れていない。長期的な資金計画と投資判断の基準が不明確'
        : null,
    ].filter(issue => issue !== null) as string[];

    // 解決提案
    const solutions = [
      concerns.some(c => c.includes('顧客') || c.includes('マーケ'))
        ? 'マーケティングオートメーションツールの導入と、リード獲得から成約までのフローの最適化。顧客セグメント別のアプローチ戦略の策定'
        : null,
      concerns.some(c => c.includes('効率化') || c.includes('DX'))
        ? '業務プロセスの標準化とシステム化。RPAやワークフロー管理ツールの導入による業務効率化'
        : null,
      weaknesses.some(w => w.includes('人材') || w.includes('採用')) || concerns.some(c => c.includes('採用'))
        ? '採用プロセスの体系化と評価基準の明確化。OJTと研修プログラムの整備による人材育成体制の構築'
        : null,
      concerns.some(c => c.includes('資金') || c.includes('財務'))
        ? '財務ダッシュボードの構築と月次予実管理の徹底。資金繰り表の作成と投資判断基準の明確化'
        : null,
      weaknesses.some(w => w.includes('マーケティング') || w.includes('ブランド'))
        ? 'ブランドメッセージの明確化と一貫性のあるマーケティング戦略の策定。コンテンツマーケティングとSEO対策の強化'
        : null,
    ].filter(solution => solution !== null) as string[];

    // 解決プロセス
    const solutionProcesses: SolutionProcess[] = [];
    
    if (concerns.some(c => c.includes('顧客') || c.includes('マーケ'))) {
      solutionProcesses.push({
        solution: 'マーケティングオートメーションツールの導入と、リード獲得から成約までのフローの最適化',
        steps: [
          '現状のマーケティング活動とリード獲得プロセスを可視化',
          'マーケティングオートメーションツール（HubSpot、Marketo等）の選定と導入',
          'リード獲得から成約までのフローを設計・最適化',
          '顧客セグメント別のアプローチ戦略を策定',
          'KPI設定と効果測定の仕組みを構築',
          '継続的な改善サイクルを確立',
        ],
        timeline: '3-6ヶ月',
        priority: 'high',
      });
    }
    
    if (concerns.some(c => c.includes('効率化') || c.includes('DX'))) {
      solutionProcesses.push({
        solution: '業務プロセスの標準化とシステム化',
        steps: [
          '現状の業務プロセスを洗い出し、ボトルネックを特定',
          '標準化すべき業務プロセスを優先順位付け',
          'RPAやワークフロー管理ツールの選定',
          'パイロットプロジェクトで効果検証',
          '全社展開と運用体制の構築',
          '継続的な改善と最適化',
        ],
        timeline: '6-12ヶ月',
        priority: 'high',
      });
    }
    
    if (weaknesses.some(w => w.includes('人材') || w.includes('採用')) || concerns.some(c => c.includes('採用'))) {
      solutionProcesses.push({
        solution: '採用プロセスの体系化と人材育成体制の構築',
        steps: [
          '採用要件と評価基準を明確化',
          '採用プロセスの標準化と面接評価シートの作成',
          '採用計画を事業計画と連動',
          'OJTプログラムと研修カリキュラムの設計',
          '入社オンボーディングプロセスの整備',
          '評価制度とキャリアパスの明確化',
        ],
        timeline: '3-6ヶ月',
        priority: 'medium',
      });
    }
    
    if (concerns.some(c => c.includes('資金') || c.includes('財務'))) {
      solutionProcesses.push({
        solution: '財務ダッシュボードの構築と月次予実管理の徹底',
        steps: [
          '財務データの収集と整理',
          '財務ダッシュボードの設計と構築',
          '月次予実管理のプロセスを確立',
          '資金繰り表の作成と3-6ヶ月先の予測',
          '投資判断基準の明確化',
          '経営会議での定期的な財務レビュー',
        ],
        timeline: '1-3ヶ月',
        priority: 'high',
      });
    }
    
    if (weaknesses.some(w => w.includes('マーケティング') || w.includes('ブランド'))) {
      solutionProcesses.push({
        solution: 'ブランドメッセージの明確化とマーケティング戦略の策定',
        steps: [
          '自社の強みと差別化ポイントを明確化',
          'ターゲット顧客のペルソナ設定',
          'ブランドメッセージとトーンの統一',
          'コンテンツマーケティング戦略の策定',
          'SEO対策とオウンドメディアの構築',
          '効果測定と改善サイクルの確立',
        ],
        timeline: '3-6ヶ月',
        priority: 'medium',
      });
    }

    // マッチング企業の生成（課題解決に貢献できる企業）
    const matchedCompanies = generateMatchedCompanies(
      [...surfaceIssues, ...structuralIssues, ...deepIssues],
      concerns,
      weaknesses
    );

    return {
      summary,
      surfaceIssues: surfaceIssues.length > 0 ? surfaceIssues : ['課題の特定には追加情報が必要です'],
      structuralIssues: structuralIssues.length > 0 ? structuralIssues : ['構造的な課題の分析には追加情報が必要です'],
      deepIssues: deepIssues.length > 0 ? deepIssues : ['深層的な課題の分析には追加情報が必要です'],
      solutions: solutions.length > 0 ? solutions : ['解決策の提案には追加情報が必要です'],
      solutionProcesses: solutionProcesses.length > 0 ? solutionProcesses : [],
      matchedCompanies,
    };
  };

  if (!companyData) {
    return (
      <div className="flex-1 overflow-y-auto h-full p-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-gray-800 p-6 text-center">
            <p className="text-text-light dark:text-white mb-4">企業情報が登録されていません。</p>
            <button
              onClick={() => navigate(RoutePath.CompanyRegistration)}
              className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors font-semibold"
            >
              自社登録へ
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto h-full p-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-text-light dark:text-white text-3xl font-bold tracking-tight">
            AI分析・マッチング
          </h1>
          <p className="text-subtext-light dark:text-subtext-dark mt-2 text-base">
            登録された企業情報を元に、AIが企業状況を分析します。
          </p>
        </header>

        {/* 登録情報の表示 */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-gray-800 p-6 mb-6">
          <h2 className="text-lg font-semibold text-text-light dark:text-white mb-4">登録情報</h2>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-medium text-subtext-light dark:text-subtext-dark">業種:</span>
              <span className="ml-2 text-text-light dark:text-white">{companyData.industry}</span>
            </div>
            <div>
              <span className="font-medium text-subtext-light dark:text-subtext-dark">強み:</span>
              <div className="ml-2 mt-1">
                {companyData.strengths.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {companyData.strengths.map((strength, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs"
                      >
                        {strength}
                      </span>
                    ))}
                  </div>
                )}
                {companyData.strengthsInput && (
                  <p className="text-text-light dark:text-white">{companyData.strengthsInput}</p>
                )}
              </div>
            </div>
            <div>
              <span className="font-medium text-subtext-light dark:text-subtext-dark">弱み:</span>
              <div className="ml-2 mt-1">
                {companyData.weaknesses.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {companyData.weaknesses.map((weakness, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs"
                      >
                        {weakness}
                      </span>
                    ))}
                  </div>
                )}
                {companyData.weaknessesInput && (
                  <p className="text-text-light dark:text-white">{companyData.weaknessesInput}</p>
                )}
              </div>
            </div>
            <div>
              <span className="font-medium text-subtext-light dark:text-subtext-dark">悩み:</span>
              <div className="ml-2 mt-1">
                {companyData.concerns.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {companyData.concerns.map((concern, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs"
                      >
                        {concern}
                      </span>
                    ))}
                  </div>
                )}
                {companyData.concernsInput && (
                  <p className="text-text-light dark:text-white">{companyData.concernsInput}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 分析実行ボタン */}
        {!analysisResult && (
          <div className="flex justify-end mb-6">
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <>
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  <span>AI分析中...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">auto_awesome</span>
                  <span>AI分析を実行</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* 分析結果 */}
        {analysisResult && (
          <div className="space-y-4">
            {/* 企業状況の要約 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-gray-800 p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary text-xl">description</span>
                <h2 className="text-lg font-bold text-text-light dark:text-white">企業状況の要約</h2>
              </div>
              <p className="text-sm text-text-light dark:text-white leading-relaxed">
                {analysisResult.summary}
              </p>
            </div>

            {/* 課題と解決提案を2カラムで表示 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* 課題 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-gray-800 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-orange-500 text-xl">warning</span>
                  <h2 className="text-lg font-bold text-text-light dark:text-white">課題</h2>
                </div>

                {/* 表層課題 */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-text-light dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                    表層課題
                  </h3>
                  <ul className="space-y-1.5">
                    {analysisResult.surfaceIssues.map((issue, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-text-light dark:text-white">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 構造課題 */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-text-light dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    構造課題
                  </h3>
                  <ul className="space-y-1.5">
                    {analysisResult.structuralIssues.map((issue, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-text-light dark:text-white">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 深層課題 */}
                <div>
                  <h3 className="text-sm font-semibold text-text-light dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    深層課題
                  </h3>
                  <ul className="space-y-1.5">
                    {analysisResult.deepIssues.map((issue, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-text-light dark:text-white">
                        <span className="text-red-500 mt-1">•</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 解決提案 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-gray-800 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-green-500 text-xl">lightbulb</span>
                  <h2 className="text-lg font-bold text-text-light dark:text-white">解決提案</h2>
                </div>
                
                {/* 解決提案一覧 */}
                <div className="mb-4">
                  <ul className="space-y-2">
                    {analysisResult.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2 p-2 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
                        <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                        <span className="text-xs text-text-light dark:text-white flex-1">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 解決プロセス（折りたたみ可能） */}
                {analysisResult.solutionProcesses.length > 0 && (
                  <details className="mt-4">
                    <summary className="text-sm font-semibold text-text-light dark:text-white cursor-pointer mb-2">
                      解決プロセスを見る
                    </summary>
                    <div className="space-y-3 mt-2">
                      {analysisResult.solutionProcesses.map((process, index) => (
                        <div key={index} className="border border-border-light dark:border-gray-700 rounded-lg p-3 bg-gray-50 dark:bg-gray-800/50">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-xs font-semibold text-text-light dark:text-white flex-1">
                              {process.solution}
                            </h4>
                            <div className="flex items-center gap-2 ml-2">
                              <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                                process.priority === 'high'
                                  ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                                  : process.priority === 'medium'
                                  ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                                  : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                              }`}>
                                {process.priority === 'high' ? '高' : process.priority === 'medium' ? '中' : '低'}
                              </span>
                              <span className="text-xs text-subtext-light dark:text-subtext-dark">
                                <span className="material-symbols-outlined text-xs align-middle">schedule</span>
                                {process.timeline}
                              </span>
                            </div>
                          </div>
                          <ol className="space-y-1.5 mt-2">
                            {process.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start gap-2 text-xs text-text-light dark:text-white">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                                  {stepIndex + 1}
                                </span>
                                <span className="flex-1">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            </div>

            {/* マッチング企業 */}
            {analysisResult.matchedCompanies.length > 0 && (
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-gray-800 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-blue-500 text-xl">handshake</span>
                  <h2 className="text-lg font-bold text-text-light dark:text-white">課題解決に貢献できる企業</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {analysisResult.matchedCompanies.map((company) => (
                    <div
                      key={company.id}
                      className="border border-border-light dark:border-gray-700 rounded-lg p-3 hover:border-primary transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-1">
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-semibold text-text-light dark:text-white truncate">
                                {company.name}
                              </h3>
                              <p className="text-xs text-subtext-light dark:text-subtext-dark">
                                {company.industry}
                              </p>
                            </div>
                            <div className="text-right ml-2 flex-shrink-0">
                              <div className="text-lg font-bold text-primary">
                                {company.matchScore}%
                              </div>
                            </div>
                          </div>
                          <p className="text-xs text-text-light dark:text-white mb-2 line-clamp-2">
                            {company.description}
                          </p>
                          <details className="mb-2">
                            <summary className="text-xs text-subtext-light dark:text-subtext-dark cursor-pointer hover:text-primary">
                              詳細を見る
                            </summary>
                            <div className="mt-2 space-y-2">
                              <div>
                                <p className="text-xs font-medium text-subtext-light dark:text-subtext-dark mb-1">
                                  マッチング理由
                                </p>
                                <p className="text-xs text-text-light dark:text-white">
                                  {company.matchingReason}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs font-medium text-subtext-light dark:text-subtext-dark mb-1">
                                  解決できる課題
                                </p>
                                <div className="flex flex-wrap gap-1">
                                  {company.canSolveIssues.map((issue, index) => (
                                    <span
                                      key={index}
                                      className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs"
                                    >
                                      {issue}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <p className="text-xs font-medium text-subtext-light dark:text-subtext-dark mb-1">
                                  強み
                                </p>
                                <div className="flex flex-wrap gap-1">
                                  {company.strengths.map((strength, index) => (
                                    <span
                                      key={index}
                                      className="px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs"
                                    >
                                      {strength}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </details>
                          <div className="flex gap-2 mt-2">
                            <button
                              onClick={() => navigate(`/company/${company.id}`)}
                              className="px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-xs font-semibold flex-1"
                            >
                              詳細
                            </button>
                            <button
                              onClick={() => navigate(`/chat?company=${company.id}`)}
                              className="px-3 py-1.5 rounded-lg border border-border-light dark:border-gray-700 bg-white dark:bg-gray-900 text-text-light dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-xs font-semibold flex-1"
                            >
                              チャット
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 再分析ボタン */}
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setAnalysisResult(null);
                  handleAnalyze();
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border-light dark:border-gray-700 bg-white dark:bg-gray-900 text-text-light dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold"
              >
                <span className="material-symbols-outlined">refresh</span>
                <span>再分析</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyAnalysis;


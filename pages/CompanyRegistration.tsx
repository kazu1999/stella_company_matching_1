import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

interface AISummary {
  industryTags: string[];
  strengthTags: string[];
  weaknessTags: string[];
  concernTags: string[];
  summary: string;
}

interface ConcernCategory {
  id: string;
  name: string;
  color: string;
  middleCategories: {
    id: string;
    name: string;
    smallCategories: string[];
  }[];
}

const CompanyRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    industry: { input: '', selected: '' },
    strengths: { input: '', selected: [] as string[] },
    weaknesses: { input: '', selected: [] as string[] },
    concerns: { input: '' },
  });
  const [concernSelection, setConcernSelection] = useState({
    majorCategory: '',
    middleCategory: '',
    selectedSmallCategories: [] as string[],
  });
  const [isRegistering, setIsRegistering] = useState(false);

  // よくある例のプルダウンオプション
  const industryOptions = [
    'SaaS',
    'Fintech',
    'E-commerce',
    'Healthcare',
    'Education',
    'Manufacturing',
    'Retail',
    'Real Estate',
    'Transportation',
    'その他',
  ];

  const strengthOptions = [
    '技術力が高い',
    '優秀な人材が揃っている',
    '資金調達ができている',
    'ブランド力がある',
    '顧客基盤が大きい',
    '独自のノウハウがある',
    'グローバル展開している',
    'その他',
  ];

  const weaknessOptions = [
    '技術力が不足している',
    '人材が不足している',
    '資金が不足している',
    'ブランド認知度が低い',
    '顧客基盤が小さい',
    'マーケティング力が弱い',
    '組織体制が整っていない',
    'その他',
  ];

  // 悩みの分類体系
  const concernCategories: ConcernCategory[] = [
    {
      id: 'finance',
      name: '財務・収益（キャッシュ）',
      color: 'red',
      middleCategories: [
        {
          id: 'revenue',
          name: '収益構造',
          smallCategories: ['売上の季節変動が大きい', '利益率が低い（粗利/営業利益）', '価格改定ができていない'],
        },
        {
          id: 'cost',
          name: 'コスト最適化',
          smallCategories: ['人件費率が高い', '固定費が肥大化', '固定費の見直しをしていない'],
        },
        {
          id: 'cashflow',
          name: '資金繰り',
          smallCategories: ['キャッシュ不足（運転資金）', '売掛管理が弱く黒字倒産リスク', '資金繰り表がない（3〜6ヶ月先）'],
        },
        {
          id: 'investment',
          name: '投資/資本政策',
          smallCategories: ['投資判断が感覚的', '金融機関/投資家向け資料がない'],
        },
        {
          id: 'cost-management',
          name: '原価管理',
          smallCategories: ['原価管理が属人化'],
        },
        {
          id: 'financial-metrics',
          name: '財務指標（ROE/ROA）',
          smallCategories: ['年度予算・月次予実が未整備', '会計ソフトで日次仕訳がされていない', '勘定科目内訳書が作れない', '決算早期化の仕組みなし', '税務期限管理が甘い', '補助金・助成金の調査不足'],
        },
      ],
    },
    {
      id: 'marketing',
      name: '集客・マーケティング',
      color: 'orange',
      middleCategories: [
        {
          id: 'awareness',
          name: '認知',
          smallCategories: ['新規集客が安定しない', 'MAP/食べログ依存', 'ブランドメッセージが弱い'],
        },
        {
          id: 'website',
          name: '公式サイト/LP',
          smallCategories: ['LP/サイトCVRが低い', 'SEO/オウンドメディアの計画がない'],
        },
        {
          id: 'repeat',
          name: 'リピート',
          smallCategories: ['リピート率が低い'],
        },
        {
          id: 'brand',
          name: 'ブランド',
          smallCategories: ['ロゴ・フォント・ブランドトーンが統一されていない', '提案資料・パンフの最新化ができていない'],
        },
        {
          id: 'sns',
          name: 'SNS運用',
          smallCategories: ['SNS運用が続かない'],
        },
        {
          id: 'reputation',
          name: '口コミ/評判',
          smallCategories: ['外部レビューの定期確認なし'],
        },
        {
          id: 'creative',
          name: 'クリエイティブ資産',
          smallCategories: [],
        },
        {
          id: 'lead',
          name: 'リード獲得',
          smallCategories: ['広告効果が測れない', '顧客層が広すぎて刺さらない', '主要チャネルのCVR/CPAを測定していない', '広告ROIが不明', 'セミナー/ウェビナーの運営なし', 'ナーチャリング設計がない'],
        },
      ],
    },
    {
      id: 'sales',
      name: '営業・顧客管理（LTV最大化）',
      color: 'yellow',
      middleCategories: [
        {
          id: 'deal-management',
          name: '商談管理',
          smallCategories: ['商談数が足りない', '営業パイプラインが属人的', '見える化ができない', '見積〜契約までが遅い', '売上予測の更新なし'],
        },
        {
          id: 'conversion',
          name: '受注率改善',
          smallCategories: ['受注率が低い', '値引き条件ルールなし', '提案書テンプレがない', '競合比較資料なし'],
        },
        {
          id: 'crm',
          name: 'CRM/顧客データ',
          smallCategories: ['CRM未整備', 'トップアカウントリストなし'],
        },
        {
          id: 'upsell',
          name: 'アップセル/クロスセル',
          smallCategories: ['アップセル設計がない'],
        },
        {
          id: 'churn',
          name: '離脱防止',
          smallCategories: ['既存顧客フォロー不足', '解約理由を拾えていない'],
        },
        {
          id: 'partner',
          name: 'パートナー/BD',
          smallCategories: ['紹介が生まれない', 'パートナーKPIがない', '営業プロセス（リード→受注）が未整備'],
        },
      ],
    },
    {
      id: 'hr',
      name: '採用・人材育成',
      color: 'green',
      middleCategories: [
        {
          id: 'recruitment',
          name: '採用',
          smallCategories: ['応募が来ない', '面接辞退率が高い', 'JD（職務定義）がない', '採用計画が事業計画と連動していない', '面接評価シートが統一されていない'],
        },
        {
          id: 'training',
          name: '教育/研修',
          smallCategories: ['若手が育たない', 'OJTが属人的', '入社オンボーディングが未整備', '研修計画がない'],
        },
        {
          id: 'evaluation',
          name: '評価制度',
          smallCategories: ['評価制度がない', '昇給・評価基準不明確'],
        },
        {
          id: 'labor',
          name: '労務/勤怠',
          smallCategories: ['労務管理の事故リスク', '労働時間/36協定の管理が甘い', '安全衛生（健康診断・ストレスチェック）不足'],
        },
        {
          id: 'engagement',
          name: 'エンゲージメント',
          smallCategories: ['マネージャーが育たない', '離職率が高い', 'コミュニケーション不全', '社員の方向性がバラバラ', '従業員満足度サーベイがない'],
        },
      ],
    },
    {
      id: 'dx',
      name: '業務効率・DX（省力化）',
      color: 'blue',
      middleCategories: [
        {
          id: 'automation',
          name: '自動化',
          smallCategories: ['手作業が多い（紙/Excel）'],
        },
        {
          id: 'workflow',
          name: '業務フロー',
          smallCategories: ['業務が属人化', '会議・資料作成が多い', '経理/労務プロセスが複雑', 'プロジェクト管理が機能しない', 'PDCAが回らない', '稟議/承認が電子化されていない'],
        },
        {
          id: 'it',
          name: 'IT導入',
          smallCategories: ['システム導入が進まない', 'SaaS管理がされていない'],
        },
        {
          id: 'information',
          name: '情報集約',
          smallCategories: ['情報が分散（チャット・口頭・紙）', 'データ入力の標準なし'],
        },
        {
          id: 'productivity',
          name: '生産性',
          smallCategories: ['在庫管理が曖昧', '権限管理が曖昧', 'KPIダッシュボードがない'],
        },
      ],
    },
    {
      id: 'organization',
      name: '組織・マネジメント',
      color: 'purple',
      middleCategories: [
        {
          id: 'strategy',
          name: '経営戦略',
          smallCategories: ['長期戦略が曖昧', 'MVVが浸透していない', '意思決定基準がぶれる', '事業KGI/KPIが未整理', '3年ビジョンが数値化されていない', '5〜10年北極星KGIがない', 'USP（差別化点）が言語化されていない', '市場定義が曖昧', '競合マップなし', 'プロダクトポートフォリオなし', '成長ドライバーが未定義'],
        },
        {
          id: 'management',
          name: 'マネジメント',
          smallCategories: ['組織が縦割り', '管理職が育たない'],
        },
        {
          id: 'culture',
          name: '文化/価値観',
          smallCategories: [],
        },
        {
          id: 'communication',
          name: 'コミュニケーション',
          smallCategories: [],
        },
        {
          id: 'governance',
          name: 'ガバナンス',
          smallCategories: ['反社チェックフローなし', '株主総会/取締役会議事録が整備されていない', '内部通報制度なし', '稟議・承認フロー未整備', '経営数値の共有がない', '議事録/決定事項のアーカイブなし', '経営会議の議題が固定化されていない', '権限規程なし', 'RACIで責任定義が不明確', '組織図が更新されていない'],
        },
        {
          id: 'org-design',
          name: '組織設計',
          smallCategories: [],
        },
      ],
    },
    {
      id: 'it-security',
      name: 'IT・セキュリティ',
      color: 'indigo',
      middleCategories: [
        {
          id: 'account',
          name: 'アカウント管理',
          smallCategories: ['SaaS一覧の管理がない', '退職者アカウントの停止フローなし', 'アクセス権限の最適化が不十分', '2FAが必須化されていない', '端末パスワード/2FAが必須化されていない'],
        },
        {
          id: 'data',
          name: 'データ活用',
          smallCategories: ['KPIダッシュボードなし', 'データマスタが整備されていない'],
        },
        {
          id: 'security',
          name: 'セキュリティ',
          smallCategories: ['情報セキュリティが属人的'],
        },
        {
          id: 'ai',
          name: 'AI活用',
          smallCategories: ['AI利用ポリシーがない', 'プロンプト・ナレッジが蓄積されていない'],
        },
        {
          id: 'backup',
          name: 'バックアップ',
          smallCategories: ['バックアップの運用なし', 'バックアップポリシーがない'],
        },
      ],
    },
    {
      id: 'legal',
      name: '法務・コンプライアンス',
      color: 'brown',
      middleCategories: [
        {
          id: 'contract',
          name: '契約',
          smallCategories: ['NDAテンプレなし', '基本契約/個別契約テンプレなし', '契約レビューの承認フローなし'],
        },
        {
          id: 'regulation',
          name: '規程',
          smallCategories: ['個人情報保護方針が未整備'],
        },
        {
          id: 'transaction',
          name: '取引管理',
          smallCategories: ['下請法/景表法の確認不足'],
        },
        {
          id: 'ip',
          name: '知財',
          smallCategories: ['商標・ドメインの管理が曖昧'],
        },
      ],
    },
    {
      id: 'product',
      name: 'プロダクト・サービス',
      color: 'pink',
      middleCategories: [
        {
          id: 'ux',
          name: 'UX/リサーチ',
          smallCategories: ['ベータユーザーからのFB経路なし', 'ユーザビリティテストなし'],
        },
        {
          id: 'quality',
          name: '品質',
          smallCategories: ['クレームフロー不在', '品質指標（納期/ミス率）未設定'],
        },
        {
          id: 'design',
          name: '設計',
          smallCategories: ['サービス提供手順書（SOP）なし', 'プラン体系が不明', '提供価値が説明できない', 'アップセル設計がない'],
        },
        {
          id: 'development',
          name: '開発',
          smallCategories: ['リリースサイクルが曖昧', 'バックログ管理がない'],
        },
      ],
    },
    {
      id: 'operation',
      name: 'オペレーション',
      color: 'teal',
      middleCategories: [
        {
          id: 'bpr',
          name: 'BPR（業務改善）',
          smallCategories: [],
        },
        {
          id: 'cs',
          name: 'CS対応',
          smallCategories: [],
        },
        {
          id: 'document',
          name: '文書管理',
          smallCategories: [],
        },
        {
          id: 'quality-management',
          name: '品質管理',
          smallCategories: [],
        },
      ],
    },
  ];

  const handleInputChange = (field: 'industry' | 'strengths' | 'weaknesses' | 'concerns', type: 'input' | 'selected', value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        [type]: value,
      },
    }));
  };

  const handleStrengthToggle = (strength: string) => {
    setFormData(prev => {
      const current = prev.strengths.selected;
      const isSelected = current.includes(strength);
      return {
        ...prev,
        strengths: {
          ...prev.strengths,
          selected: isSelected
            ? current.filter(s => s !== strength)
            : [...current, strength],
        },
      };
    });
  };

  const handleWeaknessToggle = (weakness: string) => {
    setFormData(prev => {
      const current = prev.weaknesses.selected;
      const isSelected = current.includes(weakness);
      return {
        ...prev,
        weaknesses: {
          ...prev.weaknesses,
          selected: isSelected
            ? current.filter(w => w !== weakness)
            : [...current, weakness],
        },
      };
    });
  };

  const handleConcernMajorCategoryChange = (categoryId: string) => {
    setConcernSelection({
      majorCategory: categoryId,
      middleCategory: '',
      selectedSmallCategories: [],
    });
  };

  const handleConcernMiddleCategoryChange = (middleCategoryId: string) => {
    setConcernSelection(prev => ({
      ...prev,
      middleCategory: middleCategoryId,
      selectedSmallCategories: [],
    }));
  };

  const handleConcernSmallCategoryToggle = (smallCategory: string) => {
    setConcernSelection(prev => {
      const isSelected = prev.selectedSmallCategories.includes(smallCategory);
      return {
        ...prev,
        selectedSmallCategories: isSelected
          ? prev.selectedSmallCategories.filter(c => c !== smallCategory)
          : [...prev.selectedSmallCategories, smallCategory],
      };
    });
  };

  const getSelectedConcernText = (): string => {
    const parts: string[] = [];
    
    // 分類選択の内容
    if (concernSelection.selectedSmallCategories.length > 0) {
      const major = concernCategories.find(c => c.id === concernSelection.majorCategory);
      const middle = major?.middleCategories.find(m => m.id === concernSelection.middleCategory);
      if (major && middle) {
        parts.push(`${major.name} > ${middle.name}: ${concernSelection.selectedSmallCategories.join(', ')}`);
      }
    }
    
    // 自然言語入力の内容
    if (formData.concerns.input.trim()) {
      parts.push(formData.concerns.input);
    }
    
    return parts.join('\n\n');
  };

  const handleRegister = async () => {
    setIsRegistering(true);

    // バリデーション
    const hasStrengths = formData.strengths.selected.length > 0 || formData.strengths.input.trim();
    const hasWeaknesses = formData.weaknesses.selected.length > 0 || formData.weaknesses.input.trim();
    const hasConcerns = concernSelection.selectedSmallCategories.length > 0 || formData.concerns.input.trim();
    
    if (!formData.industry.selected && !formData.industry.input) {
      alert('すべての項目を入力してください');
      setIsRegistering(false);
      return;
    }
    if (!hasStrengths || !hasWeaknesses || !hasConcerns) {
      alert('すべての項目を入力してください');
      setIsRegistering(false);
      return;
    }

    // 入力内容をまとめる
    const industry = formData.industry.selected || formData.industry.input;
    const strengths = formData.strengths.selected.length > 0
      ? formData.strengths.selected.join(', ')
      : formData.strengths.input;
    const weaknesses = formData.weaknesses.selected.length > 0
      ? formData.weaknesses.selected.join(', ')
      : formData.weaknesses.input;
    const concernsText = getSelectedConcernText();

    // 登録データをローカルストレージに保存（分析ページで使用）
    const registrationData = {
      industry: industry,
      strengths: formData.strengths.selected,
      strengthsInput: formData.strengths.input,
      weaknesses: formData.weaknesses.selected,
      weaknessesInput: formData.weaknesses.input,
      concerns: concernSelection.selectedSmallCategories,
      concernsInput: formData.concerns.input,
    };
    localStorage.setItem('companyRegistrationData', JSON.stringify(registrationData));

    // 登録処理（実際の実装ではAPIを呼び出す）
    // モック実装：登録処理をシミュレート
    setTimeout(() => {
      // ここでAPIを呼び出す
      // await fetch('/api/companies/register', { ... });
      
      alert('企業情報を登録しました！');
      setIsRegistering(false);
      navigate(RoutePath.Dashboard);
    }, 1000);
  };

  // タグ生成のヘルパー関数（モック実装）
  const generateIndustryTags = (industry: string): string[] => {
    const tags: string[] = [];
    if (industry.includes('SaaS') || industry.includes('saas')) tags.push('SaaS', 'BtoB');
    if (industry.includes('Fintech') || industry.includes('fintech')) tags.push('Fintech', '金融');
    if (industry.includes('E-commerce') || industry.includes('EC')) tags.push('E-commerce', 'BtoC');
    if (industry.includes('Healthcare') || industry.includes('ヘルスケア')) tags.push('Healthcare', '医療');
    if (tags.length === 0) tags.push(industry, 'テクノロジー');
    return tags;
  };

  const generateStrengthTags = (strengths: string): string[] => {
    const tags: string[] = [];
    
    // 選択された項目をタグに追加
    if (formData.strengths.selected.length > 0) {
      tags.push(...formData.strengths.selected);
    }
    
    // 自然言語入力からキーワードベースでタグ生成
    if (formData.strengths.input.trim()) {
      if (formData.strengths.input.includes('技術')) tags.push('技術力', 'エンジニアリング');
      if (formData.strengths.input.includes('人材')) tags.push('人材', '組織力');
      if (formData.strengths.input.includes('資金')) tags.push('資金力', '財務健全性');
      if (formData.strengths.input.includes('ブランド')) tags.push('ブランド力', 'マーケティング');
      if (formData.strengths.input.includes('顧客')) tags.push('顧客基盤', '営業力');
    }
    
    // タグが空の場合はデフォルトタグ
    if (tags.length === 0) tags.push('強み', '競争優位性');
    
    // 重複を除去
    return Array.from(new Set(tags));
  };

  const generateWeaknessTags = (weaknesses: string): string[] => {
    const tags: string[] = [];
    
    // 選択された項目をタグに追加
    if (formData.weaknesses.selected.length > 0) {
      tags.push(...formData.weaknesses.selected);
    }
    
    // 自然言語入力からキーワードベースでタグ生成
    if (formData.weaknesses.input.trim()) {
      if (formData.weaknesses.input.includes('技術')) tags.push('技術不足', 'DX課題');
      if (formData.weaknesses.input.includes('人材')) tags.push('人材不足', '採用課題');
      if (formData.weaknesses.input.includes('資金')) tags.push('資金不足', '財務課題');
      if (formData.weaknesses.input.includes('ブランド')) tags.push('認知度不足', 'マーケティング課題');
      if (formData.weaknesses.input.includes('顧客')) tags.push('顧客基盤不足', '営業課題');
    }
    
    // タグが空の場合はデフォルトタグ
    if (tags.length === 0) tags.push('改善領域', '成長課題');
    
    // 重複を除去
    return Array.from(new Set(tags));
  };

  const generateConcernTags = (concerns: string): string[] => {
    const tags: string[] = [];
    
    // 構造化された選択がある場合
    if (concernSelection.selectedSmallCategories.length > 0) {
      const major = concernCategories.find(c => c.id === concernSelection.majorCategory);
      const middle = major?.middleCategories.find(m => m.id === concernSelection.middleCategory);
      
      // 大分類名をタグに追加
      if (major) tags.push(major.name);
      
      // 中分類名をタグに追加
      if (middle) tags.push(middle.name);
      
      // 選択された小分類をタグに追加
      tags.push(...concernSelection.selectedSmallCategories);
    } else {
      // 自然言語入力の場合、キーワードベースでタグ生成
      if (concerns.includes('新規顧客') || concerns.includes('顧客獲得')) tags.push('新規顧客獲得', '営業', 'マーケティング');
      if (concerns.includes('グローバル') || concerns.includes('海外')) tags.push('グローバル展開', '国際化');
      if (concerns.includes('効率化') || concerns.includes('DX')) tags.push('業務効率化', 'DX', '自動化');
      if (concerns.includes('採用') || concerns.includes('人材')) tags.push('採用', '人材確保', 'HR');
      if (concerns.includes('資金') || concerns.includes('調達')) tags.push('資金調達', '財務', '投資');
      if (tags.length === 0) tags.push('成長', '経営課題');
    }
    
    return tags;
  };

  const generateSummary = (industry: string, strengths: string, weaknesses: string, concerns: string): string => {
    return `業種は${industry}で、強みとして${strengths}を持っています。一方で、${weaknesses}という課題があり、${concerns}について悩んでいます。これらの情報から、${industry}業界において${strengths}を活かしながら、${weaknesses}を補完できるパートナーとのマッチングが推奨されます。特に${concerns}の解決に特化した企業との連携により、相互の成長が期待できます。`;
  };


  return (
    <div className="flex-1 overflow-y-auto h-full p-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-text-light dark:text-white text-3xl font-bold tracking-tight">
            自社登録
          </h1>
          <p className="text-subtext-light dark:text-subtext-dark mt-2 text-base">
            業種・強み・弱み・悩みを入力してください。
            ※マッチングのために、入力している
            ※強みは、マッチングを受けて、他企業の悩みを解決するため
            ※悩みは、マッチングを受けて、他企業の強みを活かすため
            ※AIがマッチングする時に、データが大きくなりすぎないように、DBに保存するのは、AIを使って要約した内容か、AIによって生成したタグのみにする
          </p>
        </header>

        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-gray-800 p-6 mb-6">
          <div className="space-y-8">
            {/* 業種 */}
            <div>
              <label className="block text-sm font-semibold text-text-light dark:text-white mb-3">
                業種 <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                <select
                  value={formData.industry.selected}
                  onChange={(e) => handleInputChange('industry', 'selected', e.target.value)}
                  className="w-full rounded-lg border border-border-light dark:border-gray-700 bg-white dark:bg-gray-800 text-text-light dark:text-white px-4 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">よくある例から選択...</option>
                  {industryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-subtext-light dark:text-subtext-dark text-sm">または</span>
                  <input
                    type="text"
                    value={formData.industry.input}
                    onChange={(e) => handleInputChange('industry', 'input', e.target.value)}
                    placeholder="自然言語で入力（例: BtoB SaaS企業で、マーケティング支援サービスを提供）"
                    className="w-full rounded-lg border border-border-light dark:border-gray-700 bg-white dark:bg-gray-800 text-text-light dark:text-white px-4 py-2 pl-16 text-sm focus:border-primary focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
            </div>

            {/* 強み */}
            <div>
              <label className="block text-sm font-semibold text-text-light dark:text-white mb-3">
                強み <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                <div className="border border-border-light dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-800 max-h-48 overflow-y-auto">
                  {strengthOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.strengths.selected.includes(option)}
                        onChange={() => handleStrengthToggle(option)}
                        className="rounded border-border-light dark:border-gray-600 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-text-light dark:text-white">{option}</span>
                    </label>
                  ))}
                </div>
                {formData.strengths.selected.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.strengths.selected.map((selected) => (
                      <span
                        key={selected}
                        className="px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-medium"
                      >
                        {selected}
                      </span>
                    ))}
                  </div>
                )}
                <div className="relative">
                  <span className="absolute left-3 top-3 text-subtext-light dark:text-subtext-dark text-sm">追加で自然言語入力</span>
                  <textarea
                    value={formData.strengths.input}
                    onChange={(e) => handleInputChange('strengths', 'input', e.target.value)}
                    placeholder="（例: AI技術に強みがあり、データ分析のノウハウが豊富。エンジニアチームが優秀で、迅速な開発が可能）"
                    rows={3}
                    className="w-full rounded-lg border border-border-light dark:border-gray-700 bg-white dark:bg-gray-800 text-text-light dark:text-white px-4 py-2 pt-8 text-sm focus:border-primary focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* 弱み */}
            <div>
              <label className="block text-sm font-semibold text-text-light dark:text-white mb-3">
                弱み <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                <div className="border border-border-light dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-800 max-h-48 overflow-y-auto">
                  {weaknessOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.weaknesses.selected.includes(option)}
                        onChange={() => handleWeaknessToggle(option)}
                        className="rounded border-border-light dark:border-gray-600 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-text-light dark:text-white">{option}</span>
                    </label>
                  ))}
                </div>
                {formData.weaknesses.selected.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.weaknesses.selected.map((selected) => (
                      <span
                        key={selected}
                        className="px-2 py-1 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs font-medium"
                      >
                        {selected}
                      </span>
                    ))}
                  </div>
                )}
                <div className="relative">
                  <span className="absolute left-3 top-3 text-subtext-light dark:text-subtext-dark text-sm">追加で自然言語入力</span>
                  <textarea
                    value={formData.weaknesses.input}
                    onChange={(e) => handleInputChange('weaknesses', 'input', e.target.value)}
                    placeholder="（例: マーケティング力が弱く、新規顧客獲得に課題がある。営業チームが小さく、リード獲得の仕組みが整っていない）"
                    rows={3}
                    className="w-full rounded-lg border border-border-light dark:border-gray-700 bg-white dark:bg-gray-800 text-text-light dark:text-white px-4 py-2 pt-8 text-sm focus:border-primary focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* 悩み */}
            <div>
              <label className="block text-sm font-semibold text-text-light dark:text-white mb-3">
                悩み <span className="text-red-500">*</span>
              </label>
              
              <div className="space-y-4">
                {/* 分類選択 */}
                <div>
                  <p className="text-xs font-medium text-subtext-light dark:text-subtext-dark mb-2">
                    分類から選択
                  </p>
                  <div className="space-y-4">
                  {/* 大分類 */}
                  <div>
                    <label className="block text-xs font-medium text-subtext-light dark:text-subtext-dark mb-2">
                      大分類
                    </label>
                    <select
                      value={concernSelection.majorCategory}
                      onChange={(e) => handleConcernMajorCategoryChange(e.target.value)}
                      className="w-full rounded-lg border border-border-light dark:border-gray-700 bg-white dark:bg-gray-800 text-text-light dark:text-white px-4 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">大分類を選択...</option>
                      {concernCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 中分類 */}
                  {concernSelection.majorCategory && (
                    <div>
                      <label className="block text-xs font-medium text-subtext-light dark:text-subtext-dark mb-2">
                        中分類
                      </label>
                      <select
                        value={concernSelection.middleCategory}
                        onChange={(e) => handleConcernMiddleCategoryChange(e.target.value)}
                        className="w-full rounded-lg border border-border-light dark:border-gray-700 bg-white dark:bg-gray-800 text-text-light dark:text-white px-4 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">中分類を選択...</option>
                        {concernCategories
                          .find(c => c.id === concernSelection.majorCategory)
                          ?.middleCategories.map((middle) => (
                            <option key={middle.id} value={middle.id}>
                              {middle.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  )}

                  {/* 小分類（複数選択） */}
                  {concernSelection.middleCategory && (
                    <div>
                      <label className="block text-xs font-medium text-subtext-light dark:text-subtext-dark mb-2">
                        小分類（複数選択可）
                      </label>
                      <div className="max-h-60 overflow-y-auto border border-border-light dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-gray-800">
                        {concernCategories
                          .find(c => c.id === concernSelection.majorCategory)
                          ?.middleCategories.find(m => m.id === concernSelection.middleCategory)
                          ?.smallCategories.map((small) => (
                            <label
                              key={small}
                              className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={concernSelection.selectedSmallCategories.includes(small)}
                                onChange={() => handleConcernSmallCategoryToggle(small)}
                                className="rounded border-border-light dark:border-gray-600 text-primary focus:ring-primary"
                              />
                              <span className="text-sm text-text-light dark:text-white">{small}</span>
                            </label>
                          ))}
                      </div>
                      {concernSelection.selectedSmallCategories.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {concernSelection.selectedSmallCategories.map((selected) => (
                            <span
                              key={selected}
                              className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium"
                            >
                              {selected}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  </div>
                </div>

                {/* 自然言語入力 */}
                <div>
                  <p className="text-xs font-medium text-subtext-light dark:text-subtext-dark mb-2">
                    追加で自然言語入力
                  </p>
                  <textarea
                    value={formData.concerns.input}
                    onChange={(e) => handleInputChange('concerns', 'input', e.target.value)}
                    placeholder="（例: 新規顧客獲得に苦戦しており、月間リード数を50件以上増やしたい。特にBtoB企業へのアプローチ方法を改善したい）"
                    rows={4}
                    className="w-full rounded-lg border border-border-light dark:border-gray-700 bg-white dark:bg-gray-800 text-text-light dark:text-white px-4 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleRegister}
            disabled={isRegistering}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isRegistering ? (
              <>
                <span className="material-symbols-outlined animate-spin">refresh</span>
                <span>登録中...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">check_circle</span>
                <span>登録する</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistration;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RoutePath } from '../types';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    industry: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // バリデーション
    if (!formData.companyName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('すべての項目を入力してください');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('パスワードが一致しません');
      setLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError('パスワードは8文字以上で入力してください');
      setLoading(false);
      return;
    }

    // モック登録（実際のバックエンド実装時は置き換え）
    setTimeout(() => {
      // ローカルストレージに認証情報を保存
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userName', formData.companyName);
      
      setLoading(false);
      navigate(RoutePath.Dashboard);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark shadow-lg p-8">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-16"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQdLUckXTI9O1xwIN41Dgz-K0886PiEjSYKjkWl79oT7VUE7-96oM-FViah6iE8NhaJxV2vYXndL08hbydnK-hTIf4IGyJY4g1nYRKbnq-gzyD7CYR7d5ZnuXvCQDoYZx1UZOGqZdzZfk2IhhVhCTLpy2Yd3kJ8PURnTJCjBQr3uA5typTsAik3CnXZ1NQUOrXTsEicAuSeL0m8s572-p0qKr5FHvHaHVKQUm7fRcd0NE9tsxOLzSuVOOh_2tNpFMfQdIcMwVG_GY")',
                }}
              />
            </div>
            <h1 className="text-3xl font-black text-text-light dark:text-white mb-2">新規登録</h1>
            <p className="text-subtext-light dark:text-subtext-dark">Stella Matching Service</p>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-text-light dark:text-white mb-2">
                企業名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 text-text-light dark:text-white placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="株式会社サンプル"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-light dark:text-white mb-2">
                業種
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 text-text-light dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">選択してください</option>
                <option value="IT">IT / ソフトウェア</option>
                <option value="Finance">金融</option>
                <option value="Manufacturing">製造業</option>
                <option value="Consulting">コンサルティング</option>
                <option value="Marketing">マーケティング</option>
                <option value="HR">人事・採用</option>
                <option value="Other">その他</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-light dark:text-white mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 text-text-light dark:text-white placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="example@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-light dark:text-white mb-2">
                パスワード <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 text-text-light dark:text-white placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="8文字以上"
                required
              />
              <p className="mt-1 text-xs text-subtext-light dark:text-subtext-dark">
                8文字以上の英数字で入力してください
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-light dark:text-white mb-2">
                パスワード（確認） <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 text-text-light dark:text-white placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="パスワードを再入力"
                required
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            <div className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 rounded border-border-light dark:border-border-dark text-primary focus:ring-primary"
                required
              />
              <label className="ml-2 text-sm text-subtext-light dark:text-subtext-dark">
                <a href="#" className="text-primary hover:underline">
                  利用規約
                </a>
                および
                <a href="#" className="text-primary hover:underline">
                  プライバシーポリシー
                </a>
                に同意します
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  <span>登録中...</span>
                </>
              ) : (
                <>
                  <span>新規登録</span>
                  <span className="material-symbols-outlined">person_add</span>
                </>
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-subtext-light dark:text-subtext-dark">
              すでにアカウントをお持ちの方は{' '}
              <Link to={RoutePath.Login} className="text-primary font-semibold hover:underline">
                ログイン
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


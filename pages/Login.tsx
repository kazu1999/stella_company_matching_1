import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RoutePath } from '../types';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // 簡単なバリデーション
    if (!email || !password) {
      setError('メールアドレスとパスワードを入力してください');
      setLoading(false);
      return;
    }

    // モック認証（実際のバックエンド実装時は置き換え）
    setTimeout(() => {
      // 管理者判定
      const isAdmin = email === 'admin@stella.com' && password === 'stella';
      
      // ローカルストレージに認証情報を保存
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', email.split('@')[0]);
      localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
      
      setLoading(false);
      
      // 管理者の場合は管理者ダッシュボードへ、それ以外は通常のダッシュボードへ
      if (isAdmin) {
        navigate(RoutePath.AdminDashboard);
      } else {
        navigate(RoutePath.Dashboard);
      }
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
            <h1 className="text-3xl font-black text-text-light dark:text-white mb-2">Stella</h1>
            <p className="text-subtext-light dark:text-subtext-dark">Matching Service</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-light dark:text-white mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 text-text-light dark:text-white placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="example@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-light dark:text-white mb-2">
                パスワード
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 text-text-light dark:text-white placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-border-light dark:border-border-dark text-primary focus:ring-primary"
                />
                <span className="ml-2 text-sm text-subtext-light dark:text-subtext-dark">
                  ログイン状態を保持
                </span>
              </label>
              <a href="#" className="text-sm text-primary hover:underline">
                パスワードを忘れた場合
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  <span>ログイン中...</span>
                </>
              ) : (
                <>
                  <span>ログイン</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-subtext-light dark:text-subtext-dark">
              アカウントをお持ちでない方は{' '}
              <Link to={RoutePath.SignUp} className="text-primary font-semibold hover:underline">
                新規登録
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


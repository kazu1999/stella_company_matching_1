import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    if (isAdmin) {
      navigate('/admin');
    } else {
      navigate(RoutePath.Dashboard);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto h-full">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 dark:bg-primary/20 mb-6">
            <span className="material-symbols-outlined text-6xl text-primary">error_outline</span>
          </div>
          <h1 className="text-6xl font-black text-text-light dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-bold text-text-light dark:text-white mb-4">
            ページが見つかりません
          </h2>
          <p className="text-subtext-light dark:text-subtext-dark text-lg mb-8">
            お探しのページは存在しないか、移動または削除された可能性があります。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-gray-900 text-text-light dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            前のページに戻る
          </button>
          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors font-semibold"
          >
            <span className="material-symbols-outlined">home</span>
            {isAdmin ? '管理者ダッシュボードへ' : 'ダッシュボードへ'}
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-border-light dark:border-border-dark">
          <p className="text-subtext-light dark:text-subtext-dark text-sm mb-4">
            よくアクセスされるページ：
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {isAdmin ? (
              <>
                <Link
                  to="/admin"
                  className="px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark text-text-light dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
                >
                  管理者ダッシュボード
                </Link>
                <Link
                  to="/admin/companies"
                  className="px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark text-text-light dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
                >
                  企業管理
                </Link>
                <Link
                  to="/admin/users"
                  className="px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark text-text-light dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
                >
                  ユーザー管理
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={RoutePath.Dashboard}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark text-text-light dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
                >
                  ダッシュボード
                </Link>
                <Link
                  to={RoutePath.Matching}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark text-text-light dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
                >
                  マッチング
                </Link>
                <Link
                  to={RoutePath.CompanyList}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark text-text-light dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
                >
                  企業一覧
                </Link>
                <Link
                  to={RoutePath.Chat}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark text-text-light dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
                >
                  チャット
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;


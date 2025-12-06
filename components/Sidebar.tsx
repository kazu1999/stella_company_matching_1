import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    // 認証状態の変更を通知
    window.dispatchEvent(new Event('authChange'));
    navigate(RoutePath.Login);
  };

  const isActive = (path: string) => {
    if (path === RoutePath.Dashboard && location.pathname === RoutePath.Dashboard) return true;
    if (path !== RoutePath.Dashboard && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navItemClass = (path: string) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      isActive(path)
        ? 'bg-primary/10 text-primary dark:bg-primary/20'
        : 'text-subtext-light dark:text-subtext-dark hover:bg-gray-100 dark:hover:bg-white/10'
    }`;

  const iconClass = (path: string) =>
    `material-symbols-outlined ${isActive(path) ? 'fill-icon' : ''}`;

  return (
    <aside class="flex w-64 flex-col border-r border-border-light dark:border-border-dark bg-white dark:bg-background-dark p-4 sticky top-0 h-screen overflow-y-auto shrink-0 hidden md:flex">
      <div class="flex h-full flex-col justify-between">
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-3 px-3 py-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQdLUckXTI9O1xwIN41Dgz-K0886PiEjSYKjkWl79oT7VUE7-96oM-FViah6iE8NhaJxV2vYXndL08hbydnK-hTIf4IGyJY4g1nYRKbnq-gzyD7CYR7d5ZnuXvCQDoYZx1UZOGqZdzZfk2IhhVhCTLpy2Yd3kJ8PURnTJCjBQr3uA5typTsAik3CnXZ1NQUOrXTsEicAuSeL0m8s572-p0qKr5FHvHaHVKQUm7fRcd0NE9tsxOLzSuVOOh_2tNpFMfQdIcMwVG_GY")',
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-text-light dark:text-text-dark text-base font-bold leading-normal">
                Stella
              </h1>
              <p className="text-subtext-light dark:text-subtext-dark text-xs font-medium">
                プレミアムプラン
              </p>
            </div>
          </div>
          <nav class="flex flex-col gap-1">
            <Link to={RoutePath.Dashboard} class={navItemClass(RoutePath.Dashboard)}>
              <span class={iconClass(RoutePath.Dashboard)}>dashboard</span>
              <p class="text-sm font-medium leading-normal">ダッシュボード</p>
            </Link>
            <Link to={RoutePath.Matching} class={navItemClass(RoutePath.Matching)}>
              <span class={iconClass(RoutePath.Matching)}>auto_awesome</span>
              <p class="text-sm font-medium leading-normal">マッチング (AI)</p>
            </Link>
             <Link to={RoutePath.CompanyList} class={navItemClass(RoutePath.CompanyList)}>
              <span class={iconClass(RoutePath.CompanyList)}>apartment</span>
              <p class="text-sm font-medium leading-normal">企業一覧</p>
            </Link>
            <Link to={RoutePath.Articles} class={navItemClass(RoutePath.Articles)}>
              <span class={iconClass(RoutePath.Articles)}>article</span>
              <p class="text-sm font-medium leading-normal">記事 (AI)</p>
            </Link>
            <Link to={RoutePath.Chat} class={navItemClass(RoutePath.Chat)}>
              <span class={iconClass(RoutePath.Chat)}>chat</span>
              <p class="text-sm font-medium leading-normal">チャット</p>
            </Link>
            <Link to={RoutePath.Ranking} class={navItemClass(RoutePath.Ranking)}>
               <span class={iconClass(RoutePath.Ranking)}>monitoring</span>
              <p class="text-sm font-medium leading-normal">ランキング</p>
            </Link>
            <Link to={RoutePath.ArticleGenerator} class={navItemClass(RoutePath.ArticleGenerator)}>
              <span class={iconClass(RoutePath.ArticleGenerator)}>edit_document</span>
              <p class="text-sm font-medium leading-normal">記事生成</p>
            </Link>
          </nav>
        </div>
        
        <div class="flex flex-col gap-1 border-t border-border-light dark:border-border-dark pt-4">
             <Link to={RoutePath.CompanyProfile} class={navItemClass(RoutePath.CompanyProfile)}>
              <span class={iconClass(RoutePath.CompanyProfile)}>business_center</span>
              <p class="text-sm font-medium leading-normal">プロフィール</p>
            </Link>
             <Link to="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-subtext-light dark:text-subtext-dark hover:bg-gray-100 dark:hover:bg-white/10">
              <span className="material-symbols-outlined">settings</span>
              <p className="text-sm font-medium leading-normal">設定</p>
            </Link>
             <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-subtext-light dark:text-subtext-dark hover:bg-gray-100 dark:hover:bg-white/10 w-full text-left"
            >
              <span className="material-symbols-outlined">logout</span>
              <p className="text-sm font-medium leading-normal">ログアウト</p>
            </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
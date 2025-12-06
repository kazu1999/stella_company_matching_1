import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === '/admin' || path === RoutePath.AdminDashboard) {
      return location.pathname === '/admin' || location.pathname === RoutePath.AdminDashboard;
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const navItemClass = (path: string) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      isActive(path)
        ? 'bg-primary/10 text-primary dark:bg-primary/20'
        : 'text-subtext-light dark:text-subtext-dark hover:bg-gray-100 dark:hover:bg-white/10'
    }`;

  const iconClass = (path: string) =>
    `material-symbols-outlined ${isActive(path) ? 'fill-icon' : ''}`;

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    window.dispatchEvent(new Event('authChange'));
    navigate(RoutePath.Login);
  };

  return (
    <aside className="flex w-64 flex-col border-r border-border-light dark:border-border-dark bg-white dark:bg-background-dark p-4 sticky top-0 h-screen overflow-y-auto shrink-0 hidden md:flex">
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg size-10 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-2xl">auto_awesome</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-text-light dark:text-text-dark text-base font-bold leading-normal">
                Stella
              </h1>
              <p className="text-subtext-light dark:text-subtext-dark text-xs font-medium">
                Admin Panel
              </p>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            <Link to="/admin" className={navItemClass('/admin')}>
              <span className={iconClass('/admin')}>dashboard</span>
              <p className="text-sm font-medium leading-normal">Dashboard</p>
            </Link>
            <Link to="/admin/companies" className={navItemClass('/admin/companies')}>
              <span className={iconClass('/admin/companies')}>apartment</span>
              <p className="text-sm font-medium leading-normal">Companies</p>
            </Link>
            <Link to="/admin/users" className={navItemClass('/admin/users')}>
              <span className={iconClass('/admin/users')}>group</span>
              <p className="text-sm font-medium leading-normal">Users</p>
            </Link>
            <Link to="/admin/matching" className={navItemClass('/admin/matching')}>
              <span className={iconClass('/admin/matching')}>handshake</span>
              <p className="text-sm font-medium leading-normal">Matching</p>
            </Link>
            <Link to="/admin/offers" className={navItemClass('/admin/offers')}>
              <span className={iconClass('/admin/offers')}>history</span>
              <p className="text-sm font-medium leading-normal">Offers</p>
            </Link>
            <Link to="/admin/content" className={navItemClass('/admin/content')}>
              <span className={iconClass('/admin/content')}>article</span>
              <p className="text-sm font-medium leading-normal">Content</p>
            </Link>
          </nav>
        </div>
        
        <div className="flex flex-col gap-1 border-t border-border-light dark:border-border-dark pt-4">
          <Link to="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-subtext-light dark:text-subtext-dark hover:bg-gray-100 dark:hover:bg-white/10">
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium leading-normal">Settings</p>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-subtext-light dark:text-subtext-dark hover:bg-gray-100 dark:hover:bg-white/10">
            <span className="material-symbols-outlined">help</span>
            <p className="text-sm font-medium leading-normal">Help</p>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-subtext-light dark:text-subtext-dark hover:bg-gray-100 dark:hover:bg-white/10 w-full text-left"
          >
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium leading-normal">Logout</p>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;


import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AdminSidebar from './components/AdminSidebar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import CompanyProfile from './pages/CompanyProfile';
import ArticleGenerator from './pages/ArticleGenerator';
import Matching from './pages/Matching';
import CompanyDetail from './pages/CompanyDetail';
import Chat from './pages/Chat';
import Ranking from './pages/Ranking';
import Articles from './pages/Articles';
import Companies from './pages/Companies';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCompanies from './pages/admin/AdminCompanies';
import AdminCompanyDetail from './pages/admin/AdminCompanyDetail';
import AdminUsers from './pages/admin/AdminUsers';
import AdminMatching from './pages/admin/AdminMatching';
import AdminOffers from './pages/admin/AdminOffers';
import AdminContent from './pages/admin/AdminContent';
import NotFound from './pages/NotFound';
import { RoutePath } from './types';

// 認証が必要なルートを保護するコンポーネント
const ProtectedRoute: React.FC<{ children: React.ReactElement; requireAdmin?: boolean }> = ({ 
  children, 
  requireAdmin = false 
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    setIsAuthenticated(authStatus);
    setIsAdmin(adminStatus);
  }, []);

  if (isAuthenticated === null) {
    // 認証状態を確認中
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <span className="material-symbols-outlined animate-spin text-4xl text-primary">refresh</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={RoutePath.Login} replace />;
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to={RoutePath.Dashboard} replace />;
  }

  return children;
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(authStatus);
    };

    checkAuth();
    // ストレージの変更を監視
    window.addEventListener('storage', checkAuth);
    
    // カスタムイベントで認証状態の変更を監視
    const handleAuthChange = () => checkAuth();
    window.addEventListener('authChange', handleAuthChange);

    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* 認証不要なルート */}
        <Route path={RoutePath.Login} element={<Login />} />
        <Route path={RoutePath.SignUp} element={<SignUp />} />
        
        {/* 管理者ルート */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute requireAdmin={true}>
              <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark overflow-hidden">
                <AdminSidebar />
                <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                  <Routes>
                    <Route path="/" element={<AdminDashboard />} />
                    <Route path="/companies" element={<AdminCompanies />} />
                    <Route path="/companies/:id" element={<AdminCompanyDetail />} />
                    <Route path="/users" element={<AdminUsers />} />
                    <Route path="/matching" element={<AdminMatching />} />
                    <Route path="/offers" element={<AdminOffers />} />
                    <Route path="/content" element={<AdminContent />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </ProtectedRoute>
          }
        />
        
        {/* 通常ユーザールート */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark overflow-hidden">
                <Sidebar />
                <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                  <Routes>
                    <Route path={RoutePath.Dashboard} element={<Dashboard />} />
                    <Route path={RoutePath.CompanyProfile} element={<CompanyProfile />} />
                    <Route path={RoutePath.ArticleGenerator} element={<ArticleGenerator />} />
                    <Route path={RoutePath.Matching} element={<Matching />} />
                    <Route path={RoutePath.CompanyDetail} element={<CompanyDetail />} />
                    <Route path={RoutePath.Chat} element={<Chat />} />
                    <Route path={RoutePath.Ranking} element={<Ranking />} />
                    <Route path={RoutePath.Articles} element={<Articles />} />
                    <Route path={RoutePath.CompanyList} element={<Companies />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
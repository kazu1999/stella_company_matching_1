import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import CompanyProfile from './pages/CompanyProfile';
import ArticleGenerator from './pages/ArticleGenerator';
import Matching from './pages/Matching';
import CompanyDetail from './pages/CompanyDetail';
import Chat from './pages/Chat';
import Ranking from './pages/Ranking';
import Articles from './pages/Articles';
import { RoutePath } from './types';

const App: React.FC = () => {
  return (
    <Router>
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
            {/* Fallback routes */}
            <Route path="/companies" element={<Navigate to={RoutePath.Matching} />} />
            <Route path="*" element={<Navigate to={RoutePath.Dashboard} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
export interface Company {
  id: string;
  name: string;
  industry: string;
  logo: string;
  matchScore: number;
  description: string;
}

export interface Offer {
  id: string;
  companyName: string;
  logo: string;
  position: string;
  status: 'Pending' | 'Accepted' | 'Rejected';
}

export interface Article {
  id: string;
  category: string;
  title: string;
  date: string;
  thumbnail: string;
}

export enum RoutePath {
  Login = '/login',
  SignUp = '/signup',
  Dashboard = '/',
  CompanyProfile = '/profile',
  CompanyRegistration = '/company-registration',
  CompanyAnalysis = '/company-analysis',
  ArticleGenerator = '/article-generator',
  Matching = '/matching',
  CompanyDetail = '/company/:id',
  CompanyList = '/companies',
  Chat = '/chat',
  Ranking = '/ranking',
  Articles = '/articles',
  // Admin routes
  AdminDashboard = '/admin',
  AdminCompanies = '/admin/companies',
  AdminCompanyDetail = '/admin/companies/:id',
  AdminUsers = '/admin/users',
  AdminMatching = '/admin/matching',
  AdminOffers = '/admin/offers',
  AdminContent = '/admin/content',
}
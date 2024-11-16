import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { ListArticle } from './pages/ListArticle';
import { DetailArticle } from './pages/DetailAricle';
import { Dashboard } from './pages/dashboard/Dashboard';
import { DashboardArticle } from './pages/dashboard/DashboardArticle';

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/article",
    element: <ListArticle />,
  },
  {
    path: "/article/:id",
    element: <DetailArticle />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/content/article",
    element: <DashboardArticle />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
  return <RouterProvider router={router} />;
}

export default App

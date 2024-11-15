import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { ListArticle } from './pages/ListArticle';

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
    path: "/login",
    element: <Login />,
  },
]);
  return <RouterProvider router={router} />;
}

export default App

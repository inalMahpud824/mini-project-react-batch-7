import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { ListArtickel } from './pages/ListArtickel';

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/artickel",
    element: <ListArtickel />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
  return <RouterProvider router={router} />;
}

export default App

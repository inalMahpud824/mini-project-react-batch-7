import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/artickel",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
  return <RouterProvider router={router} />;
}

export default App

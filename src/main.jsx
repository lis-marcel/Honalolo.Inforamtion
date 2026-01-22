import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/HomePage.jsx';
import Page from './layout/Page.jsx';
import AttractionPage from './pages/AttractionPage.jsx';
import SearchPage from './pages/SearchPage.jsx';

const router = createBrowserRouter([
  {
    path: "",
    Component: Page,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/attraction/:id",
        Component: AttractionPage,
      },
      {
        path: "/search",
        Component: SearchPage,
      },

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

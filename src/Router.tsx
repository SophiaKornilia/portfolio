import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { MyProjects } from "./pages/MyProjects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/MyProjects",
        element: <MyProjects />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

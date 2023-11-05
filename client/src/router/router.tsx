import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Auth from "../pages/Auth/Auth";
import Catalog from "../pages/Catalog/Catalog";
import Products from "../pages/Products/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Catalog />,
            },
            {
                path: "auth",
                element: <Auth />,
            },
            {
                path: ":type",
                element: <Products />,
            },
        ],
    },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Auth from "../pages/Auth/Auth";
import Catalog from "../pages/Catalog/Catalog";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";

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
            {
                path: ":type/:id",
                element: <Product />,
            },
        ],
    },
]);

export default router;

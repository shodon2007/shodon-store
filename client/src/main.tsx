import ReactDOM from "react-dom/client";
import store from "./store/store.ts";
import { Provider } from "react-redux";
import router from "./router/router.tsx";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./main.scss";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </Provider>
);

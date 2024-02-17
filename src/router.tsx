import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { Pwa } from "./pages/pwa/Pwa.page";
import { Reducer } from "./pages/reducer/Reducer.page";

const RouteConfig = createBrowserRouter([
    {
        path: "/react-playground",
        element: <App />,
    },
    {
        path: "/pwa",
        element: <Pwa />,
    },
    {
        path: "/reducer",
        element: <Reducer />,
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={RouteConfig} />;
};

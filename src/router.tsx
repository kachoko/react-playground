import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { Pwa } from "./pages/pwa/Pwa.page";
import { Reducer } from "./pages/reducer/Reducer.page";

const RouteConfig = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
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
    {
        path: "*",
        element: (
            <main>
                <p>Page not found!!!</p>
                <span>HOMEに戻ってください → </span>
                <Link to={"/"}>戻る</Link>
            </main>
        ),
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={RouteConfig} />;
};

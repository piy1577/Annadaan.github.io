import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import * as pages from "./components";

const Router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <pages.Header />
                <Outlet />
                <pages.Footer />
            </>
        ),
        children: [
            { index: true, element: <pages.Home /> },
            { path: "/login", element: <pages.Login /> },
            { path: "/signup", element: <pages.Signup /> },
            { path: "/upload", element: <pages.Upload /> },
            { path: "/search", element: <pages.Search /> },
            { path: "/ngo/:id", element: <pages.Ngo /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={Router} />;
}

export default App;

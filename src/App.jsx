import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
    Footer,
    Header,
    Home,
    Login,
    Ngo,
    Search,
    Signup,
    Upload,
} from "./components";

const Router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        ),
        children: [
            { index: true, element: <Home /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
            { path: "/upload", element: <Upload /> },
            { path: "/search", element: <Search /> },
            { path: "/ngo/:id", element: <Ngo /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={Router} />;
}

export default App;

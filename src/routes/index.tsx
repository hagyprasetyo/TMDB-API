import Authentication from "../auth";
import Home from "../features/home";
import Layout from "../components/layout";
import Movie from "../features/movie";
import ProtectedRoutes from "./protected-routes";
import TvShow from "../features/tv-show";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        element: <ProtectedRoutes/>,
        children: [
            {
                path: "/",
                element: <Layout/>,
                children:[
                    {
                        index: true,
                        element: <Home/>
                    },
                    {
                        path: "/login",
                        element: <Authentication/>,
                    },
                    {
                        path: "/movie",
                        element: <Movie/>
                    },
                    {
                        path: "/tv-show",
                        element: <TvShow/>
                    },
                ]
            }
        ]
    }

]
)
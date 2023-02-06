import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>
    }
])

export default router
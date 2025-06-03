import { createBrowserRouter } from "react-router-dom";
import Home from "../features/home/pages/home";
import Checkout from "../checkout/pages/checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
]);

export default router;

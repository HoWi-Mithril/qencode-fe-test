import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import LogInToAccount from "../components/logInToAccount/LogInToAccount";
import ForgotPassword from "../components/forgotPassword/ForgotPassword";
import CreatePassword from "../components/createPassword/CreatePassword";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "",
                element: <LogInToAccount />,
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />,
            },
            {
                path: "create-password",
                element: <CreatePassword />,
            }
        ],
    },

])
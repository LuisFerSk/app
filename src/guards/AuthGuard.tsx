import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { user } from "../constants";
import { AuthContext } from "../context";
import { Loader } from "../pages";
import Home from "../pages/home/Home";

export default function AuthGuard(): JSX.Element {
    const authContext = useContext(AuthContext)

    if (authContext.user === undefined) {
        return <Loader />
    }

    if (authContext.user !== user.username) {
        return <Navigate to='/login' replace />
    }

    return <Home />
}
import { Navigate, useRoutes } from 'react-router-dom'
import { AuthGuard } from './guards'
import { Login } from './pages'

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <AuthGuard />,
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/404',
            element: <>not found</>,
        },
        {
            path: '*',
            element: <Navigate to='/404' replace />,
        }
    ])
}



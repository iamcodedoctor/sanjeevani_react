import './styles.css'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { Spin } from 'antd'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useSelector } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import LayoutContainer from './components/LayoutContainer'
import Logout from './components/Logout'
import ApplyForDoctor from './pages/ApplyForDoctor'
import AdminProtetedRoute from './components/AdminProtectedRoute'
import Users from './pages/Users'
import Unauthorised from './pages/Unauthorised'

function App() {
    const { loading } = useSelector((state) => state.loader)

    return (
        <BrowserRouter>
            {loading && (
                <div className="loading-parent">
                    <Spin tip="Loading" size="large"></Spin>
                </div>
            )}
            <Toaster position="top-center" reverseOrder={false} />
            <Routes>
                <Route
                    element={
                        <PublicRoute>
                            <Outlet />
                        </PublicRoute>
                    }
                >
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route
                    element={
                        <LayoutContainer>
                            <Outlet />
                        </LayoutContainer>
                    }
                >
                    <Route
                        element={
                            <ProtectedRoute>
                                <Outlet />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="/" element={<Home />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route
                            path="/applyForDoctor"
                            element={<ApplyForDoctor />}
                        />
                        <Route
                            element={
                                <AdminProtetedRoute>
                                    <Outlet />
                                </AdminProtetedRoute>
                            }
                        >
                            <Route path="/users" element={<Users />} />
                        </Route>
                    </Route>
                    <Route path="/unauthorised" element={<Unauthorised />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

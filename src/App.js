import './styles.css'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Spin } from 'antd'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useSelector } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import LayoutContainer from './components/LayoutContainer'

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
                    path="/register"
                    element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App

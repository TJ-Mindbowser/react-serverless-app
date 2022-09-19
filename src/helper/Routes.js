import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../container/App';
import Dashboard from '../container/Dashboard';
import Users from '../container/Users';
import Products from '../container/Products';
import NotFound from '../components/NotFound';
import Login from '../container/Login';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="products" element={<Products />} />
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

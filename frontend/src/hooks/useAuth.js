import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, register } from "../api/authService.js"

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const registerUser = async (userData) => {
        setLoading(true);
        try {
            const data = await register(userData);
            toast.success(data.message || "Registration successful Please Check Your Email!");
            navigate('/login');
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Registration failed!";
            toast.error(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    const loginUser = async (credentials) => {
        setLoading(true);
        try {
            const data = await login(credentials);
            localStorage.setItem('token', data.token);
            toast.success("Login Successful!");

            if (data.isFirstLogin) {
                navigate('/change-password');
            } else {
                navigate('/dashboard');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Login Failed!");
        } finally {
            setLoading(false);
        }
    };

    return { registerUser, loading, loginUser };
};
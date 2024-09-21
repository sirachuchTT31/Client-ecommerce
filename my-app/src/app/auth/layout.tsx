"use server";
import React from 'react';

interface AuthLayoutProps {
    children: React.ReactNode;
}


const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-row flex-wrap justify-center">
            {children}
        </div>
    )
}


export default AuthLayout;
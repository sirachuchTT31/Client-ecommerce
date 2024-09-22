"use server";
import ButtonSwitchLang from '@/components/ButtonSwitchLang';
import React from 'react';

interface AuthLayoutProps {
    children: React.ReactNode;
}


const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-row justify-center items-center">
                <div className='absolute top-0 right-0 p-3'>
                    <ButtonSwitchLang></ButtonSwitchLang>
                </div>
                <div className=''>
                    {children}
                </div>
            </div>
        </>

    )
}


export default AuthLayout;
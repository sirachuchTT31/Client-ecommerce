'use client';
import React from 'react'

import { Box, LinearProgress } from '@mui/material';
import Appbar from '@/components/Appbar';
import { ShopContext } from '@/context/shop-context';

interface ShopLayout {
    children: React.ReactNode;
}

const Layout: React.FC<ShopLayout> = ({ children }) => {
    // const [openDrawer, setOpenDrawer] = React.useState(false);
    const [progress, setProgress] = React.useState(true);
    return (
        <>
            <ShopContext.Provider value={{ progress, setProgress }}>
                <Appbar></Appbar>
                {progress && <LinearProgress></LinearProgress>}
                <Box sx={{ flexGrow: 1, padding: 10 }}>
                    {children}
                </Box>
               
            </ShopContext.Provider>
        </>
    )
}

export default Layout;
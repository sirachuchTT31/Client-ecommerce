'use client';
import React from 'react'

import { Box } from '@mui/material';

interface ShopLayout {
    children: React.ReactNode;
}

const Layout: React.FC<ShopLayout> = ({ children }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>

            {children}
        </Box>
    )
}

export default Layout;
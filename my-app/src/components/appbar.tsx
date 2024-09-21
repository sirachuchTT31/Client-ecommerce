'use client'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Box, Divider, Drawer, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';


const Appbar = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const triggerDrawer = (open: boolean) => () => {
        setOpenDrawer(open);
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={triggerDrawer(false)}>
            <Divider />

        </Box>
    );


    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={setOpenDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Stack spacing={2} sx={{ width: 300 }}>
                        {/* <Autocomplete
                            id="free-solo-demo"
                            freeSolo
                        /> */}
                    </Stack>
                </Toolbar>
            </AppBar>
            <Drawer open={openDrawer} onClose={triggerDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>

    )
}


export default Appbar;

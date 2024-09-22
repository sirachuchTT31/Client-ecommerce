'use client'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Box, Divider, Drawer, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { getCredentialService } from '@/shared/services/session.service'

const Appbar = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [auth, setAuth] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    React.useEffect(() => {
        if (getCredentialService().accessToken && getCredentialService().credential) {
            setAuth(true);
        }
        else {
            setAuth(false);
        }
    }, [])

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    <Stack spacing={2} sx={{ flexGrow: 1 }}>
                        {/* <Autocomplete
                            id="free-solo-demo"
                            freeSolo
                        /> */}
                    </Stack>
                    <Stack spacing={2} >
                        {auth && (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle sx={{ fontSize: 45 }} />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
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

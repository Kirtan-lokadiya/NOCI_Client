'use client'

import React from 'react';
import Link from 'next/link';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    useTheme,
    useMediaQuery,
    IconButton,
    Menu,
    MenuItem,
    Fade
} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';
import {useState} from 'react';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const navItems = [
        {label: 'Home', href: '#Home'},
        {label: 'Products', href: '#testimonials'},
        {label: 'Ideas', href: '#highlights'},
        {label: 'FAQ', href: '#faq'},
        {label: 'Blog', href: '#blog'},
    ];

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{backgroundColor: 'transparent', mt: 4}}
        >
            <Container maxWidth="lg">
                <Box sx={{
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    backgroundColor: '#04101C',
                    border: '2px solid #1E2328',
                    borderRadius: '16px'
                }}>
                    <Toolbar
                        disableGutters
                        sx={{
                            justifyContent: 'space-between',
                            px: 2,
                            py: 0
                        }}
                    >
                        {/* Logo Section */}
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer'}}>
                                <Box
                                    sx={{
                                        width: 32,
                                        height: 32,
                                        backgroundColor: '#1976d2',
                                        borderRadius: '6px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 16,
                                            height: 16,
                                            backgroundColor: 'white',
                                            borderRadius: '50%',
                                            position: 'relative',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 2,
                                                left: 2,
                                                width: 12,
                                                height: 12,
                                                backgroundColor: '#1976d2',
                                                borderRadius: '50%',
                                            }
                                        }}
                                    />
                                </Box>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '1.2rem',
                                        color: 'white',
                                        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    }}
                                >
                                    Sitemark
                                </Typography>
                            </Box>
                        </Link>

                        {/* Desktop Navigation */}
                        {!isMobile && (
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                {navItems.map((item) => (
                                    <Button
                                        key={item.label}
                                        sx={{
                                            color: '#FFF',
                                            textTransform: 'none',
                                            fontWeight: 500,
                                            fontSize: '13px',
                                            px: 2,
                                            py: 1,
                                            borderRadius: '6px',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                color: 'white',
                                            },
                                        }}
                                        href={item.href}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>
                        )}

                        {/* Auth Buttons */}
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                            {!isMobile && (
                                <>
                                    <Link href="/signin" style={{ textDecoration: 'none' }}>
                                        <Button
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.85)',
                                                textTransform: 'none',
                                                fontWeight: 500,
                                                fontSize: '0.95rem',
                                                px: 2,
                                                py: 1,
                                                borderRadius: '6px',
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            Sign in
                                        </Button>
                                    </Link>
                                    <Link href="/signup" style={{ textDecoration: 'none' }}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: 'white',
                                                color: '#0a1929',
                                                textTransform: 'none',
                                                fontWeight: 600,
                                                fontSize: '0.95rem',
                                                px: 2,
                                                py: 1,
                                                borderRadius: '8px',
                                                boxShadow: 'none',
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                                                    boxShadow: '0 4px 12px rgba(255, 255, 255, 0.15)',
                                                    transform: 'translateY(-1px)',
                                                },
                                            }}
                                        >
                                            Sign up
                                        </Button>
                                    </Link>
                                </>
                            )}
                            {/* Mobile Menu Button */}
                            {isMobile && (
                                <IconButton
                                    sx={{
                                        color: 'white',
                                        ml: 1,
                                    }}
                                    onClick={handleMenuClick}
                                >
                                    <MenuIcon/>
                                </IconButton>
                            )}
                        </Box>

                        {/* Mobile Menu */}
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleMenuClose}
                            TransitionComponent={Fade}
                            sx={{
                                mt: 1,
                                '& .MuiPaper-root': {
                                    backgroundColor: '#0a1929',
                                    color: 'white',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '8px',
                                    minWidth: 200,
                                },
                            }}
                        >
                            {navItems.map((item) => (
                                <MenuItem
                                    key={item.label}
                                    onClick={handleMenuClose}
                                    sx={{
                                        color: '#FFF',
                                        fontWeight: 500,
                                        py: 1.5,
                                        px: 2,
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                            color: 'white',
                                        },
                                    }}
                                >
                                    {item.label}
                                </MenuItem>
                            ))}
                            <MenuItem
                                onClick={handleMenuClose}
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.85)',
                                    fontWeight: 500,
                                    py: 1.5,
                                    px: 2,
                                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                        color: 'white',
                                    },
                                }}
                            >
                                Sign in
                            </MenuItem>

                            <MenuItem
                                onClick={handleMenuClose}
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.85)',
                                    fontWeight: 500,
                                    py: 1.5,
                                    px: 2,
                                    backgroundColor: 'white',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                        color: 'white',
                                    },
                                }}
                            >
                                Sign in
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </Box>
            </Container>
        </AppBar>
    );
};

export default Navbar;
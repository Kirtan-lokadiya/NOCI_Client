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
import { usePathname } from 'next/navigation';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const open = Boolean(anchorEl);
    const pathname = usePathname();
    const isDark = theme.palette.mode === 'dark';

    const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    const handleSearchOpen = () => setSearchOpen(true);
    const handleSearchClose = () => setSearchOpen(false);

    // Navigation items with icons
    const navItems = [
        {
            label: 'Home',
            href: '/',
            icon: pathname === '/' ? <HomeIcon color="primary" /> : <HomeOutlinedIcon color="action" />,
            filled: pathname === '/',
        },
        {
            label: 'Ideas',
            href: '/ideas',
            icon: pathname === '/ideas' ? <LightbulbIcon color="primary" /> : <LightbulbOutlinedIcon color="action" />,
            filled: pathname === '/ideas',
        },
        {
            label: 'Blog',
            href: '/blog',
            icon: pathname === '/blog' ? <ArticleIcon color="primary" /> : <ArticleOutlinedIcon color="action" />,
            filled: pathname === '/blog',
        },
    ];

    // Simulate auth state (replace with real auth logic)
    const isSignedIn = false; // TODO: Replace with real auth state

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    bgcolor: isDark ? '#18191A' : 'white',
                    borderBottom: isDark ? '1px solid #222' : '1px solid #eee',
                    alignItems: 'center',
                    zIndex: 1201,
                }}
            >
                <Container maxWidth={false} disableGutters sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                        sx={{
                            width: { xs: '100%', md: '75%' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            py: 0.5,
                        }}
                    >
                        {/* Left nav items */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {navItems.map((item) => (
                                <Link key={item.label} href={item.href} style={{ textDecoration: 'none' }}>
                                    <Button
                                        startIcon={item.icon}
                                        sx={{
                                            color: item.filled ? 'primary.main' : (isDark ? 'white' : '#222'),
                                            fontWeight: item.filled ? 700 : 500,
                                            bgcolor: item.filled ? (isDark ? '#222' : '#e3f2fd') : 'transparent',
                                            borderRadius: 2,
                                            px: 2,
                                            py: 1,
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                            '&:hover': {
                                                bgcolor: item.filled ? (isDark ? '#222' : '#e3f2fd') : (isDark ? '#232323' : '#f5f5f5'),
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                        {/* Center search */}
                        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                            <IconButton onClick={handleSearchOpen} size="large" color="primary" sx={{ mx: 2 }}>
                                <SearchIcon />
                            </IconButton>
                        </Box>
                        {/* Right auth/profile */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {!isSignedIn ? (
                                <>
                                    <Link href="/signin" style={{ textDecoration: 'none' }}>
                                        <Button variant="outlined" sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600 }}>Sign In</Button>
                                    </Link>
                                    <Link href="/signup" style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600 }}>Sign Up</Button>
                                    </Link>
                                </>
                            ) : (
                                <Link href="/profile" style={{ textDecoration: 'none' }}>
                                    <IconButton color="primary">
                                        <PersonIcon />
                                    </IconButton>
                                </Link>
                            )}
                        </Box>
                    </Box>
                </Container>
            </AppBar>
            {/* Trending line below navbar */}
            <Box sx={{
                width: '100%',
                bgcolor: isDark ? '#232323' : '#f5f5f5',
                color: isDark ? '#fff' : '#222',
                py: 1,
                textAlign: 'center',
                fontWeight: 500,
                fontSize: '1rem',
                letterSpacing: 1,
            }}>
                Trending: AI Revolution, Web3, Remote Work, UI/UX, Productivity, Mindfulness
            </Box>
            {/* Search overlay */}
            {searchOpen && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        bgcolor: isDark ? 'rgba(24,25,26,0.98)' : 'rgba(255,255,255,0.98)',
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box sx={{ position: 'absolute', top: 32, right: 32 }}>
                        <IconButton onClick={handleSearchClose}>
                            <CloseIcon sx={{ color: isDark ? 'white' : '#222' }} />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            width: { xs: '90vw', sm: 500 },
                            bgcolor: isDark ? '#18191A' : 'white',
                            borderRadius: 3,
                            boxShadow: 3,
                            p: 3,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <SearchIcon sx={{ color: 'primary.main', fontSize: 32, mr: 2 }} />
                        <input
                            autoFocus
                            placeholder="Connect your thought"
                            style={{
                                border: 'none',
                                outline: 'none',
                                background: 'transparent',
                                color: isDark ? 'white' : '#222',
                                fontSize: 24,
                                width: '100%',
                            }}
                        />
                    </Box>
                </Box>
            )}
        </>
    );
};

export default Navbar;
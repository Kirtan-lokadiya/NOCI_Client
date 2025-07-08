'use client'

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Grid,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
  AccessTime as TimeIcon
} from '@mui/icons-material';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Creative Industries",
    excerpt: "Exploring how artificial intelligence is transforming creative workflows and opening new possibilities for artists, designers, and content creators.",
    content: "Artificial intelligence has rapidly evolved from a futuristic concept to a practical tool that's reshaping creative industries...",
    author: {
      name: "Sarah Chen",
      avatar: "https://mui.com/static/images/avatar/2.jpg",
      role: "AI Researcher"
    },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    publishDate: "2 days ago",
    readTime: "5 min read",
    tags: ["AI", "Creativity", "Technology", "Future"],
    likes: 156,
    isLiked: false,
    isBookmarked: true
  },
  {
    id: 2,
    title: "Building Sustainable Remote Work Culture",
    excerpt: "Best practices for maintaining team connectivity and productivity in distributed work environments.",
    content: "The shift to remote work has fundamentally changed how teams collaborate and maintain culture...",
    author: {
      name: "Marcus Rodriguez",
      avatar: "https://mui.com/static/images/avatar/3.jpg",
      role: "Team Lead"
    },
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    publishDate: "1 week ago",
    readTime: "8 min read",
    tags: ["Remote Work", "Culture", "Productivity", "Teams"],
    likes: 89,
    isLiked: true,
    isBookmarked: false
  },
  {
    id: 3,
    title: "The Psychology of User Interface Design",
    excerpt: "Understanding cognitive principles that make digital interfaces intuitive and user-friendly.",
    content: "Great UI design goes beyond aesthetics—it's about understanding how users think and interact with digital systems...",
    author: {
      name: "Emma Thompson",
      avatar: "https://mui.com/static/images/avatar/4.jpg",
      role: "UX Designer"
    },
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    publishDate: "2 weeks ago",
    readTime: "6 min read",
    tags: ["UX", "Psychology", "Design", "Interface"],
    likes: 234,
    isLiked: false,
    isBookmarked: true
  },
  {
    id: 4,
    title: "Sustainable Technology: Green Computing Practices",
    excerpt: "How developers and companies can reduce their environmental impact through conscious technology choices.",
    content: "As technology becomes more pervasive, the environmental impact of our digital choices becomes increasingly important...",
    author: {
      name: "David Kim",
      avatar: "https://mui.com/static/images/avatar/5.jpg",
      role: "Software Engineer"
    },
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
    publishDate: "3 weeks ago",
    readTime: "7 min read",
    tags: ["Sustainability", "Green Tech", "Environment", "Computing"],
    likes: 167,
    isLiked: true,
    isBookmarked: false
  }
];

export default function Blog() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDark = theme.palette.mode === 'dark';
  const [posts, setPosts] = useState(blogPosts);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  const handleBookmark = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isBookmarked: !post.isBookmarked }
        : post
    ));
  };

  const handleMenuClick = (event, postId) => {
    setAnchorEl(event.currentTarget);
    setSelectedPost(postId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedPost(null);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: isDark ? '#0a1929' : '#f8f9fa',
      pt: 12,
      pb: 4
    }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              color: isDark ? 'white' : '#222', 
              fontWeight: 700, 
              mb: 2 
            }}
          >
            Blog & Insights
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)', 
              mb: 4,
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Discover thought-provoking articles, insights, and stories from our community of creators and innovators
          </Typography>
        </Box>

        {/* Featured Post */}
        {posts.length > 0 && (
          <Card sx={{ 
            mb: 6,
            backgroundColor: isDark ? '#1e293b' : 'white',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e0e0e0'
          }}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  height={isMobile ? 200 : 400}
                  image={posts[0].image}
                  alt={posts[0].title}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip 
                      label="Featured" 
                      color="primary" 
                      size="small" 
                      sx={{ mb: 2 }}
                    />
                    <Typography 
                      variant="h4" 
                      component="h2" 
                      sx={{ 
                        color: isDark ? 'white' : '#222', 
                        fontWeight: 700,
                        mb: 2,
                        lineHeight: 1.2
                      }}
                    >
                      {posts[0].title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)', 
                        mb: 3,
                        lineHeight: 1.6
                      }}
                    >
                      {posts[0].excerpt}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mt: 'auto' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar src={posts[0].author.avatar} sx={{ width: 40, height: 40, mr: 2 }} />
                      <Box>
                        <Typography variant="body2" sx={{ color: isDark ? 'white' : '#222', fontWeight: 600 }}>
                          {posts[0].author.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                            {posts[0].publishDate}
                          </Typography>
                          <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                            • {posts[0].readTime}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    
                    <Button variant="contained" size="large" fullWidth>
                      Read Full Article
                    </Button>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        )}

        {/* Blog Posts Grid */}
        <Grid container spacing={3}>
          {posts.slice(1).map((post) => (
            <Grid item xs={12} sm={6} lg={4} key={post.id}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: isDark ? '#1e293b' : 'white',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e0e0e0',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: isDark 
                    ? '0 8px 24px rgba(0, 0, 0, 0.4)' 
                    : '0 8px 24px rgba(0, 0, 0, 0.15)'
                }
              }}>
                <CardMedia
                  component="img"
                  height={200}
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                      {post.tags.slice(0, 2).map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{
                            color: '#1976d2',
                            borderColor: 'rgba(25, 118, 210, 0.5)',
                            fontSize: '0.7rem'
                          }}
                        />
                      ))}
                    </Box>
                    
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      sx={{ 
                        color: isDark ? 'white' : '#222', 
                        fontWeight: 600,
                        mb: 1,
                        lineHeight: 1.3,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {post.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)', 
                        mb: 2,
                        lineHeight: 1.5,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {post.excerpt}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mt: 'auto' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={post.author.avatar} sx={{ width: 32, height: 32, mr: 1 }} />
                        <Box>
                          <Typography variant="body2" sx={{ color: isDark ? 'white' : '#222', fontWeight: 600, fontSize: '0.8rem' }}>
                            {post.author.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <TimeIcon sx={{ fontSize: 12, color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)' }} />
                            <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)', fontSize: '0.7rem' }}>
                              {post.readTime}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      
                      <IconButton 
                        onClick={(e) => handleMenuClick(e, post.id)}
                        size="small"
                        sx={{ color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)' }}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton 
                          onClick={() => handleLike(post.id)}
                          size="small"
                          sx={{ color: post.isLiked ? '#f44336' : (isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)') }}
                        >
                          {post.isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                        <IconButton 
                          size="small"
                          sx={{ color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)' }}
                        >
                          <ShareIcon />
                        </IconButton>
                        <IconButton 
                          onClick={() => handleBookmark(post.id)}
                          size="small"
                          sx={{ color: post.isBookmarked ? '#1976d2' : (isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)') }}
                        >
                          {post.isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                        </IconButton>
                      </Box>
                      
                      <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)', fontSize: '0.8rem' }}>
                        {post.likes} likes
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Load More Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: isDark ? 'white' : '#222',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.23)',
              textTransform: 'none',
              px: 4,
              '&:hover': {
                borderColor: '#1976d2',
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
              }
            }}
          >
            Load More Articles
          </Button>
        </Box>

        {/* Menu for post options */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              backgroundColor: isDark ? '#1e293b' : 'white',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e0e0e0',
            }
          }}
        >
          <MenuItem onClick={handleMenuClose} sx={{ color: isDark ? 'white' : '#222' }}>
            <ShareIcon sx={{ mr: 1 }} /> Share Article
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: isDark ? 'white' : '#222' }}>
            <BookmarkIcon sx={{ mr: 1 }} /> Save for Later
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: isDark ? 'white' : '#222' }}>
            Report Article
          </MenuItem>
        </Menu>
      </Container>
    </Box>
  );
}

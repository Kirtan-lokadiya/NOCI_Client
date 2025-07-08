'use client'

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Button,
  TextField,
  Chip,
  Divider,
  Paper,
  Grid,
  Badge,
  Menu,
  MenuItem,
  Collapse,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  InputAdornment,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  Share,
  MoreVert,
  Send,
  BookmarkBorder,
  Bookmark,
  Visibility,
  TrendingUp,
  EmojiEmotions,
  AttachFile,
  Image as ImageIcon
} from '@mui/icons-material';

// Sample posts data
const initialPosts = [
  {
    id: 1,
    author: {
      name: 'John Doe',
      username: '@johndoe',
      avatar: 'https://mui.com/static/images/avatar/1.jpg'
    },
    content: 'Just launched my new project! 🚀 Excited to share this journey with everyone. It has been an amazing experience building this from the ground up.',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=500&h=300&fit=crop',
    timestamp: '2h ago',
    likes: 42,
    comments: 8,
    shares: 3,
    tags: ['#project', '#launch', '#excited'],
    isLiked: false,
    isBookmarked: false,
    commentsList: [
      { id: 1, author: 'Alice Smith', content: 'Congratulations! 🎉', timestamp: '1h ago' },
      { id: 2, author: 'Bob Johnson', content: 'Looks amazing!', timestamp: '45m ago' }
    ]
  },
  {
    id: 2,
    author: {
      name: 'Sarah Wilson',
      username: '@sarahw',
      avatar: 'https://mui.com/static/images/avatar/2.jpg'
    },
    content: 'Beautiful sunset from my office window today 🌅 Sometimes we need to pause and appreciate the little things in life.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    timestamp: '4h ago',
    likes: 128,
    comments: 15,
    shares: 7,
    tags: ['#sunset', '#office', '#nature'],
    isLiked: true,
    isBookmarked: false,
    commentsList: [
      { id: 1, author: 'Mike Chen', content: 'Stunning view!', timestamp: '3h ago' },
      { id: 2, author: 'Emma Davis', content: 'So peaceful 😍', timestamp: '2h ago' }
    ]
  },
  {
    id: 3,
    author: {
      name: 'Tech Insider',
      username: '@techinsider',
      avatar: 'https://mui.com/static/images/avatar/3.jpg'
    },
    content: 'Breaking: New AI breakthrough announced today! This could revolutionize how we approach machine learning. What are your thoughts on the future of AI?',
    timestamp: '6h ago',
    likes: 256,
    comments: 34,
    shares: 12,
    tags: ['#AI', '#technology', '#breakthrough', '#machinelearning'],
    isLiked: false,
    isBookmarked: true,
    commentsList: [
      { id: 1, author: 'David Tech', content: 'This is huge!', timestamp: '5h ago' },
      { id: 2, author: 'Lisa Code', content: 'Can\'t wait to see the applications', timestamp: '4h ago' }
    ]
  }
];

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDark = theme.palette.mode === 'dark';
  const [posts, setPosts] = useState(initialPosts);
  const [expandedComments, setExpandedComments] = useState({});
  const [newComment, setNewComment] = useState({});
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

  const handleShare = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, shares: post.shares + 1 }
        : post
    ));
    // Here you would implement actual sharing functionality
    alert('Post shared!');
  };

  const toggleComments = (postId) => {
    setExpandedComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleAddComment = (postId) => {
    if (newComment[postId]?.trim()) {
      setPosts(posts.map(post => 
        post.id === postId 
          ? { 
              ...post, 
              comments: post.comments + 1,
              commentsList: [
                ...post.commentsList,
                {
                  id: Date.now(),
                  author: 'You',
                  content: newComment[postId],
                  timestamp: 'now'
                }
              ]
            }
          : post
      ));
      setNewComment(prev => ({ ...prev, [postId]: '' }));
    }
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
      <Container maxWidth="md">
        {/* Header Section */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              color: isDark ? 'white' : '#222', 
              fontWeight: 700, 
              mb: 2,
              textAlign: 'center'
            }}
          >
            Connect Your Thoughts
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)', 
              textAlign: 'center',
              mb: 4
            }}
          >
            Discover what's happening in your community
          </Typography>
        </Box>

        {/* Trending Section */}
        <Paper sx={{ 
          mb: 3, 
          p: 2, 
          backgroundColor: isDark ? '#1e293b' : 'white',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e0e0e0'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <TrendingUp sx={{ color: '#1976d2', mr: 1 }} />
            <Typography variant="h6" sx={{ color: isDark ? 'white' : '#222', fontWeight: 600 }}>
              Trending Topics
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {['#AI', '#technology', '#project', '#sunset', '#nature', '#breakthrough'].map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: 'rgba(25, 118, 210, 0.1)',
                  color: '#1976d2',
                  border: '1px solid rgba(25, 118, 210, 0.3)',
                  '&:hover': {
                    backgroundColor: 'rgba(25, 118, 210, 0.2)',
                  }
                }}
              />
            ))}
          </Box>
        </Paper>

        {/* Posts Feed */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {posts.map((post) => (
            <Card 
              key={post.id}
              sx={{ 
                backgroundColor: isDark ? '#1e293b' : 'white',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e0e0e0',
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              <CardHeader
                avatar={
                  <Avatar src={post.author.avatar} sx={{ width: 48, height: 48 }}>
                    {post.author.name[0]}
                  </Avatar>
                }
                action={
                  <IconButton 
                    onClick={(e) => handleMenuClick(e, post.id)}
                    sx={{ color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)' }}
                  >
                    <MoreVert />
                  </IconButton>
                }
                title={
                  <Typography variant="h6" sx={{ color: isDark ? 'white' : '#222', fontWeight: 600 }}>
                    {post.author.name}
                  </Typography>
                }
                subheader={
                  <Box>
                    <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                      {post.author.username} • {post.timestamp}
                    </Typography>
                  </Box>
                }
                sx={{ pb: 1 }}
              />

              <CardContent sx={{ pt: 0 }}>
                <Typography variant="body1" sx={{ color: isDark ? 'white' : '#222', mb: 2, lineHeight: 1.6 }}>
                  {post.content}
                </Typography>
                
                {post.tags && (
                  <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {post.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{
                          color: '#1976d2',
                          borderColor: 'rgba(25, 118, 210, 0.5)',
                          fontSize: '0.75rem'
                        }}
                      />
                    ))}
                  </Box>
                )}

                {post.image && (
                  <Box
                    component="img"
                    src={post.image}
                    alt="Post image"
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                      borderRadius: 1,
                      mb: 2
                    }}
                  />
                )}

                {/* Engagement Stats */}
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  py: 1,
                  borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e0e0e0',
                  borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e0e0e0'
                }}>
                  <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                    {post.likes} likes
                  </Typography>
                  <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                    {post.comments} comments • {post.shares} shares
                  </Typography>
                </Box>
              </CardContent>

              <CardActions sx={{ px: 2, pb: 2, justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    startIcon={post.isLiked ? <Favorite /> : <FavoriteBorder />}
                    onClick={() => handleLike(post.id)}
                    sx={{
                      color: post.isLiked ? '#f44336' : 'rgba(255, 255, 255, 0.7)',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'rgba(244, 67, 54, 0.08)',
                      }
                    }}
                  >
                    Like
                  </Button>
                  <Button
                    startIcon={<ChatBubbleOutline />}
                    onClick={() => toggleComments(post.id)}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      }
                    }}
                  >
                    Comment
                  </Button>
                  <Button
                    startIcon={<Share />}
                    onClick={() => handleShare(post.id)}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      }
                    }}
                  >
                    Share
                  </Button>
                </Box>
                <IconButton
                  onClick={() => handleBookmark(post.id)}
                  sx={{ color: post.isBookmarked ? '#1976d2' : 'rgba(255, 255, 255, 0.7)' }}
                >
                  {post.isBookmarked ? <Bookmark /> : <BookmarkBorder />}
                </IconButton>
              </CardActions>

              {/* Comments Section */}
              <Collapse in={expandedComments[post.id]} timeout="auto" unmountOnExit>
                <Box sx={{ px: 2, pb: 2 }}>
                  <Divider sx={{ mb: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                  
                  {/* Comment Input */}
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <TextField
                      fullWidth
                      placeholder="Write a comment..."
                      value={newComment[post.id] || ''}
                      onChange={(e) => setNewComment(prev => ({ ...prev, [post.id]: e.target.value }))}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddComment(post.id)}
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#1976d2',
                          },
                        },
                        '& .MuiInputBase-input::placeholder': {
                          color: 'rgba(255, 255, 255, 0.5)',
                        }
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton 
                              onClick={() => handleAddComment(post.id)}
                              sx={{ color: '#1976d2' }}
                              size="small"
                            >
                              <Send />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  {/* Comments List */}
                  <List sx={{ pt: 0 }}>
                    {post.commentsList.map((comment) => (
                      <ListItem key={comment.id} sx={{ px: 0, py: 1 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ width: 32, height: 32 }}>
                            {comment.author[0]}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Box>
                              <Typography 
                                component="span" 
                                variant="body2" 
                                sx={{ color: 'white', fontWeight: 600, mr: 1 }}
                              >
                                {comment.author}
                              </Typography>
                              <Typography 
                                component="span" 
                                variant="body2" 
                                sx={{ color: 'rgba(255, 255, 255, 0.6)' }}
                              >
                                {comment.timestamp}
                              </Typography>
                            </Box>
                          }
                          secondary={
                            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                              {comment.content}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Collapse>
            </Card>
          ))}
        </Box>

        {/* More Posts Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: 'white',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              textTransform: 'none',
              px: 4,
              '&:hover': {
                borderColor: '#1976d2',
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
              }
            }}
          >
            Load More Posts
          </Button>
        </Box>

        {/* Menu for post options */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              backgroundColor: '#1e293b',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }
          }}
        >
          <MenuItem onClick={handleMenuClose} sx={{ color: 'white' }}>
            <Visibility sx={{ mr: 1 }} /> Hide post
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: 'white' }}>
            <Share sx={{ mr: 1 }} /> Copy link
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: 'white' }}>
            Report post
          </MenuItem>
        </Menu>
      </Container>
    </Box>
  );
}

'use client'

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  Grid,
  Chip,
  Divider,
  Paper,
  IconButton,
  Tab,
  Tabs,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Edit as EditIcon,
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Language as WebsiteIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon
} from '@mui/icons-material';

// Sample user data
const userData = {
  name: 'Alex Thompson',
  username: '@alexthompson',
  bio: 'Passionate developer and idea enthusiast. Building the future one thought at a time. Love connecting with creative minds and exploring innovative solutions.',
  avatar: 'https://mui.com/static/images/avatar/4.jpg',
  coverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=300&fit=crop',
  location: 'San Francisco, CA',
  joinDate: 'March 2023',
  work: 'Senior Developer at TechCorp',
  education: 'Computer Science, Stanford University',
  email: 'alex@example.com',
  phone: '+1 (555) 123-4567',
  website: 'alexthompson.dev',
  followers: 1240,
  following: 567,
  ideas: 89,
  posts: 156,
  interests: ['AI', 'Web Development', 'Design', 'Startups', 'Photography', 'Travel']
};

// Sample posts data
const userPosts = [
  {
    id: 1,
    content: 'Just shipped a new feature! The feeling of seeing your code come to life is unmatched 🚀',
    timestamp: '2 hours ago',
    likes: 23,
    comments: 5,
    shares: 2
  },
  {
    id: 2,
    content: 'Working on a new AI-powered idea management system. Excited to share progress soon!',
    timestamp: '1 day ago',
    likes: 45,
    comments: 12,
    shares: 8
  },
  {
    id: 3,
    content: 'Beautiful sunset from the office today. Sometimes you need to pause and appreciate the moment.',
    timestamp: '3 days ago',
    likes: 67,
    comments: 18,
    shares: 4
  }
];

export default function Profile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDark = theme.palette.mode === 'dark';
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const TabPanel = ({ children, value, index }) => (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: isDark ? '#0a1929' : '#f8f9fa',
      pt: 12,
      pb: 4
    }}>
      <Container maxWidth="lg">
        {/* Profile Header */}
        <Card sx={{ 
          mb: 3,
          backgroundColor: isDark ? '#1e293b' : 'white',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e0e0e0'
        }}>
          {/* Cover Image */}
          <Box
            sx={{
              height: isMobile ? 150 : 200,
              backgroundImage: `url(${userData.coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}
          >
            <IconButton
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                '&:hover': { backgroundColor: 'white' }
              }}
            >
              <EditIcon />
            </IconButton>
          </Box>

          <CardContent sx={{ pt: 0 }}>
            {/* Profile Info */}
            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start', gap: 3 }}>
              <Avatar
                src={userData.avatar}
                sx={{
                  width: isMobile ? 100 : 120,
                  height: isMobile ? 100 : 120,
                  mt: isMobile ? -6 : -8,
                  border: `4px solid ${isDark ? '#1e293b' : 'white'}`,
                  boxShadow: 3
                }}
              />
              
              <Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
                <Typography variant="h4" sx={{ color: isDark ? 'white' : '#222', fontWeight: 700, mb: 1 }}>
                  {userData.name}
                </Typography>
                <Typography variant="h6" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)', mb: 2 }}>
                  {userData.username}
                </Typography>
                <Typography variant="body1" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)', mb: 3, maxWidth: 600 }}>
                  {userData.bio}
                </Typography>

                {/* Stats */}
                <Grid container spacing={3} sx={{ mb: 3 }}>
                  <Grid item>
                    <Typography variant="h6" sx={{ color: isDark ? 'white' : '#222', fontWeight: 600 }}>
                      {userData.followers}
                    </Typography>
                    <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                      Followers
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" sx={{ color: isDark ? 'white' : '#222', fontWeight: 600 }}>
                      {userData.following}
                    </Typography>
                    <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                      Following
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" sx={{ color: isDark ? 'white' : '#222', fontWeight: 600 }}>
                      {userData.ideas}
                    </Typography>
                    <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                      Ideas
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" sx={{ color: isDark ? 'white' : '#222', fontWeight: 600 }}>
                      {userData.posts}
                    </Typography>
                    <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                      Posts
                    </Typography>
                  </Grid>
                </Grid>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button variant="contained" startIcon={<EditIcon />}>
                    Edit Profile
                  </Button>
                  <Button variant="outlined" startIcon={<ShareIcon />}>
                    Share Profile
                  </Button>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Grid container spacing={3}>
          {/* Left Column - About */}
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              mb: 3,
              backgroundColor: isDark ? '#1e293b' : 'white',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e0e0e0'
            }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: isDark ? 'white' : '#222', fontWeight: 600, mb: 2 }}>
                  About
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <WorkIcon sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }} />
                    <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)' }}>
                      {userData.work}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <SchoolIcon sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }} />
                    <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)' }}>
                      {userData.education}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationIcon sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }} />
                    <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)' }}>
                      {userData.location}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarIcon sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }} />
                    <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)' }}>
                      Joined {userData.joinDate}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EmailIcon sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }} />
                    <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)' }}>
                      {userData.email}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <WebsiteIcon sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }} />
                    <Typography variant="body2" sx={{ color: '#1976d2' }}>
                      {userData.website}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card sx={{ 
              backgroundColor: isDark ? '#1e293b' : 'white',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e0e0e0'
            }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: isDark ? 'white' : '#222', fontWeight: 600, mb: 2 }}>
                  Interests
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {userData.interests.map((interest) => (
                    <Chip
                      key={interest}
                      label={interest}
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
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column - Posts/Activity */}
          <Grid item xs={12} md={8}>
            <Card sx={{ 
              backgroundColor: isDark ? '#1e293b' : 'white',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e0e0e0'
            }}>
              <Box sx={{ borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e0e0e0' }}>
                <Tabs value={tabValue} onChange={handleTabChange} sx={{ px: 2 }}>
                  <Tab label="Posts" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)' }} />
                  <Tab label="Ideas" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)' }} />
                  <Tab label="Liked" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)' }} />
                </Tabs>
              </Box>

              <TabPanel value={tabValue} index={0}>
                {userPosts.map((post) => (
                  <Box key={post.id} sx={{ p: 3, borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e0e0e0' }}>
                    <Typography variant="body1" sx={{ color: isDark ? 'white' : '#222', mb: 2 }}>
                      {post.content}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                        {post.timestamp}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <FavoriteIcon sx={{ fontSize: 16, color: '#f44336' }} />
                          <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                            {post.likes}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <ShareIcon sx={{ fontSize: 16, color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }} />
                          <Typography variant="body2" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                            {post.shares}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </TabPanel>

              <TabPanel value={tabValue} index={1}>
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                    Ideas will be displayed here
                  </Typography>
                </Box>
              </TabPanel>

              <TabPanel value={tabValue} index={2}>
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                    Liked posts will be displayed here
                  </Typography>
                </Box>
              </TabPanel>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

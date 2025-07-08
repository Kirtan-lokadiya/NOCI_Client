'use client'

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  IconButton,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
  Close as CloseIcon,
  EmojiObjects as IdeaIcon
} from '@mui/icons-material';

// Sample sticky notes data
const initialNotes = [
  {
    id: 1,
    content: "Build a social platform for connecting thoughts and ideas",
    color: '#FFE066',
    position: { x: 100, y: 150 },
    rotation: -2
  },
  {
    id: 2,
    content: "AI-powered idea recommendation system",
    color: '#FF6B6B',
    position: { x: 300, y: 100 },
    rotation: 3
  },
  {
    id: 3,
    content: "Real-time collaboration whiteboard",
    color: '#4ECDC4',
    position: { x: 500, y: 200 },
    rotation: -1
  },
  {
    id: 4,
    content: "Voice-to-text idea capture",
    color: '#45B7D1',
    position: { x: 200, y: 300 },
    rotation: 2
  },
  {
    id: 5,
    content: "Dark mode theme system",
    color: '#96CEB4',
    position: { x: 450, y: 350 },
    rotation: -3
  },
  {
    id: 6,
    content: "Mobile app version",
    color: '#FECA57',
    position: { x: 650, y: 120 },
    rotation: 1
  }
];

export default function Ideas() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDark = theme.palette.mode === 'dark';
  const [notes, setNotes] = useState(initialNotes);
  const [searchOpen, setSearchOpen] = useState(false);
  const [newNoteOpen, setNewNoteOpen] = useState(false);
  const [newNoteContent, setNewNoteContent] = useState('');

  const handleSearchOpen = () => setSearchOpen(true);
  const handleSearchClose = () => setSearchOpen(false);
  const handleNewNoteOpen = () => setNewNoteOpen(true);
  const handleNewNoteClose = () => setNewNoteOpen(false);

  const handleAddNote = () => {
    if (newNoteContent.trim()) {
      const colors = ['#FFE066', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57'];
      const newNote = {
        id: Date.now(),
        content: newNoteContent,
        color: colors[Math.floor(Math.random() * colors.length)],
        position: { 
          x: Math.random() * (isMobile ? 250 : 600) + 50, 
          y: Math.random() * 300 + 100 
        },
        rotation: Math.random() * 6 - 3
      };
      setNotes([...notes, newNote]);
      setNewNoteContent('');
      setNewNoteOpen(false);
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: isDark ? '#0a1929' : '#f8f9fa',
      pt: 12,
      pb: 4,
      position: 'relative'
    }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              color: isDark ? 'white' : '#222', 
              fontWeight: 700, 
              mb: 2 
            }}
          >
            Ideas Whiteboard
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)', 
              mb: 4 
            }}
          >
            Capture and organize your thoughts visually
          </Typography>
        </Box>

        {/* Whiteboard Area */}
        <Paper
          sx={{
            minHeight: isMobile ? 400 : 600,
            backgroundColor: isDark ? '#1e293b' : 'white',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e0e0e0',
            borderRadius: 2,
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: isDark 
              ? 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)'
              : 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        >
          {/* Grid pattern overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: isDark
                ? 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)'
                : 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              pointerEvents: 'none'
            }}
          />

          {/* Sticky Notes */}
          {notes.map((note) => (
            <Paper
              key={note.id}
              sx={{
                position: 'absolute',
                left: note.position.x,
                top: note.position.y,
                width: isMobile ? 140 : 180,
                height: isMobile ? 140 : 160,
                backgroundColor: note.color,
                transform: `rotate(${note.rotation}deg)`,
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                '&:hover': {
                  transform: `rotate(${note.rotation}deg) scale(1.05)`,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  zIndex: 10
                }
              }}
            >
              <Box sx={{ p: 2, height: '100%', position: 'relative' }}>
                {/* Connect your thoughts icon */}
                <IconButton
                  onClick={handleSearchOpen}
                  sx={{
                    position: 'absolute',
                    top: 4,
                    right: 4,
                    width: 24,
                    height: 24,
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    color: '#1976d2',
                    '&:hover': {
                      backgroundColor: 'white',
                      transform: 'scale(1.1)'
                    }
                  }}
                  size="small"
                >
                  <SearchIcon fontSize="small" />
                </IconButton>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#333',
                    fontWeight: 500,
                    lineHeight: 1.3,
                    mt: 1,
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: isMobile ? 4 : 5,
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  {note.content}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Paper>

        {/* Floating Action Button */}
        <Fab
          color="primary"
          aria-label="add idea"
          onClick={handleNewNoteOpen}
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 1000
          }}
        >
          <AddIcon />
        </Fab>
      </Container>

      {/* Add New Note Dialog */}
      <Dialog 
        open={newNoteOpen} 
        onClose={handleNewNoteClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: isDark ? '#1e293b' : 'white',
            color: isDark ? 'white' : '#222'
          }
        }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IdeaIcon color="primary" />
          Add New Idea
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Your idea"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={newNoteContent}
            onChange={(e) => setNewNoteContent(e.target.value)}
            placeholder="Write your brilliant idea here..."
            sx={{
              mt: 2,
              '& .MuiOutlinedInput-root': {
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                color: isDark ? 'white' : '#222',
                '& fieldset': {
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.23)',
                },
                '&:hover fieldset': {
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.87)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1976d2',
                },
              },
              '& .MuiInputLabel-root': {
                color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
              }
            }}
          />
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 3 }}>
            <Button onClick={handleNewNoteClose} color="inherit">
              Cancel
            </Button>
            <Button 
              onClick={handleAddNote} 
              variant="contained" 
              disabled={!newNoteContent.trim()}
            >
              Add Idea
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Search Overlay */}
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
    </Box>
  );
}

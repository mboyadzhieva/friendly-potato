
import { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Tab, Tabs } from '@mui/material';

export default function Upload() {
  const [tab, setTab] = useState(0);
  const [videoUrl, setVideoUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleUrlUpload = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('URL Upload:', videoUrl);
  };

  const handleFileUpload = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('File Upload:', file);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <Typography component="h1" variant="h5">Upload Video</Typography>
        
        <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)} sx={{ mb: 2 }}>
          <Tab label="URL Upload" />
          <Tab label="File Upload" />
        </Tabs>

        {tab === 0 && (
          <Box component="form" onSubmit={handleUrlUpload} sx={{ width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Video URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Enter YouTube URL"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
              Upload from URL
            </Button>
          </Box>
        )}

        {tab === 1 && (
          <Box component="form" onSubmit={handleFileUpload} sx={{ width: '100%' }}>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              style={{ marginBottom: '20px' }}
            />
            <Button 
              type="submit" 
              fullWidth 
              variant="contained"
              disabled={!file}
            >
              Upload File
            </Button>
            {file && (
              <Typography sx={{ mt: 2, textAlign: 'center' }}>
                Selected file: {file.name}
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
}

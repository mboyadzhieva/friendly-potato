
import { useUser } from '../context/UserContext';
import { Container, Box, Typography, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { currentUser } = useUser();
  const navigate = useNavigate();

  if (!currentUser) {
    return <Typography>Please login to view your profile.</Typography>;
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button 
          variant="contained" 
          onClick={() => navigate('/upload')} 
          sx={{ mb: 2 }}
        >
          Back to Upload
        </Button>
        <Paper sx={{ p: 4, width: '100%' }}>
          <Typography variant="h4" gutterBottom>Profile</Typography>
          <Typography variant="body1">Email: {currentUser.email}</Typography>
        </Paper>
      </Box>
    </Container>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Container, Typography, Box } from '@mui/material';
import axios from 'axios';

const HomePage = () => {
  const [date, setDate] = useState('');
  const [shift, setShift] = useState('');
  const [litres, setLitres] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://milking-history-tracker-backend.onrender.com/api/add-record', { date, shift, litres });
      alert('Record added successfully');
      setDate('');
      setShift('');
      setLitres('');
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  const viewHistory = () => {
    navigate('/history');
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Cow Milking Tracker
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <TextField
              id="date"
              label="Select Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="shift-label">Shift</InputLabel>
            <Select
              labelId="shift-label"
              id="shift"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              required
            >
              <MenuItem value="morning">Morning</MenuItem>
              <MenuItem value="evening">Evening</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              id="litres"
              label="Number of Litres"
              type="number"
              value={litres}
              onChange={(e) => setLitres(e.target.value)}
              required
            />
          </FormControl>
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Box>
        </form>
        <Box mt={2}>
          <Button variant="outlined" color="secondary" fullWidth onClick={viewHistory}>
            View History
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;

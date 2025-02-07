import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Typography,
  Paper,
} from '@mui/material';
import axios from 'axios';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    numberOfGuests: 1,
    isAttending: true,
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/guests', formData);
      alert('Cảm ơn bạn đã xác nhận tham dự!');
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        numberOfGuests: 1,
        isAttending: true,
        message: '',
      });
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: 'auto', my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Xác nhận tham dự
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Họ và tên"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Số điện thoại"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Số người tham dự"
          name="numberOfGuests"
          type="number"
          value={formData.numberOfGuests}
          onChange={handleChange}
          required
          margin="normal"
          InputProps={{ inputProps: { min: 1 } }}
        />
        <FormControlLabel
          control={
            <Switch
              checked={formData.isAttending}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  isAttending: e.target.checked,
                }))
              }
            />
          }
          label="Tôi sẽ tham dự"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Lời nhắn"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Gửi xác nhận
        </Button>
      </Box>
    </Paper>
  );
};

export default RSVPForm;

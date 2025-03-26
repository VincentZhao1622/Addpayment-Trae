import React from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Box,
} from '@mui/material';
import { useCartStore } from '@/store/cartStore';
import { useNavigate } from 'react-router-dom';
import PayPalButton from '@/components/PaymentMethod/PayPal';

const CheckoutForm: React.FC = () => {
  const cart = useCartStore((state) => state.cart);
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Handle checkout logic here
    alert('checkout succeed');
  };

  return (
    <Paper sx={{ padding: 3, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h5" gutterBottom>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone"
              fullWidth
              autoComplete="tel"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="province"
              name="province"
              label="Province"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <Box border={1} borderColor="gray" p={2} mt={2}>
              <Typography variant="h6">Payment Method</Typography>
              <PayPalButton />
            </Box>
          </Grid>
        </Grid>
        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mr: 2 }}
          >
            Pay $ {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
          </Button>
          <Button variant="outlined" onClick={() => navigate('/cart')}>
            Cancel
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default CheckoutForm;

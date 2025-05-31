import { useState } from 'react';
import { useCart } from './CartProvider';
import {
  Button,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Divider
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import VisaIcon from '../Assets/visa.png';
import MasterCardIcon from '../Assets/mastercard.png';
import PayPalIcon from '../Assets/paypal.png';
import GPayIcon from '../Assets/gpay.png';
import ApplePayIcon from '../Assets/applepay.png'; // Replace with your actual icon paths

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.title] = 1;
      return acc;
    }, {})
  );

  const handleIncrement = (title) => {
    setQuantities((prev) => ({
      ...prev,
      [title]: (prev[title] || 1) + 1,
    }));
  };

  const handleDecrement = (title) => {
    setQuantities((prev) => {
      const newCount = (prev[title] || 1) - 1;

      if (newCount <= 0) {
        removeFromCart(title);
        const { [title]: _, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [title]: newCount,
      };
    });
  };

  const total = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (quantities[item.title] || 1),
    0
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          {cartItems.map((item, idx) => (
            <Card key={idx} sx={{ display: 'flex', mb: 2 }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{ width: 120 }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography>₹{item.price}</Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <IconButton onClick={() => handleDecrement(item.title)}>
                    <Remove />
                  </IconButton>
                  <Typography sx={{ mx: 2 }}>
                    {quantities[item.title] || 1}
                  </Typography>
                  <IconButton onClick={() => handleIncrement(item.title)}>
                    <Add />
                  </IconButton>
                </Box>

                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    removeFromCart(item.title);
                    setQuantities((prev) => {
                      const { [item.title]: _, ...rest } = prev;
                      return rest;
                    });
                  }}
                  sx={{ mt: 1 }}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))}
          <Typography variant="h5" sx={{ mt: 2 }}>
            Total: ₹{total.toFixed(2)}
          </Typography>

          {/* Footer Section */}
          <Divider sx={{ my: 4 }} />
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" gutterBottom>
              We accept
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mb: 2 }}>
              <img src={VisaIcon} alt="Visa" width="50" />
              <img src={MasterCardIcon} alt="MasterCard" width="50" />
              <img src={PayPalIcon} alt="PayPal" width="50" />
              <img src={GPayIcon} alt="Google Pay" width="50" />
              <img src={ApplePayIcon} alt="Apple Pay" width="50" />
            </Box>
            <Typography variant="body2" color="textSecondary">
              © {new Date().getFullYear()} YourBrandName. All rights reserved.
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;

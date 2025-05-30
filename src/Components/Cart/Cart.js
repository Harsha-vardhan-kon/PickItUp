import { useCart } from './CartProvider';
import { Button, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

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
                <Typography>${item.price}</Typography>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removeFromCart(item.title)}
                  sx={{ mt: 1 }}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))}
          <Typography variant="h5" sx={{ mt: 2 }}>
            Total: ${total}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default Cart;

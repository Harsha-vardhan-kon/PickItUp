import React, { useState } from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';

import iphoneBlack from '../Assets/iphone15.jpg';
import iphoneBlue from '../Assets/iphone15Blue.png';
import iphonePink from '../Assets/Iphone15Pink.png';
import iphoneWhite from '../Assets/iphone15White.png';

const iphoneVariants = [
  {
    color: 'Black',
    image: iphoneBlack,
    description: 'Sleek black iPhone 15 with 128GB storage and A16 Bionic chip.',
    features: '6.1" Super Retina XDR display, Dual-camera system, Ceramic Shield front.',
    offers: 'Exchange offer available. No-cost EMI up to 12 months.',
    Highlights: '128 GB ROM, 15.49 cm (6.1 inch) Display, 48MP + 12MP | 12MP Front Camera',
    price: '$999',
  },
  {
    color: 'Blue',
    image: iphoneBlue,
    description: 'Cool blue iPhone 15 with 256GB storage and enhanced battery life.',
    features: 'MagSafe support, Water and dust resistant, iOS 17 out of the box.',
    offers: 'Bank offers: 10% cashback on selected cards.',
    Highlights: '128 GB ROM, 15.49 cm (6.1 inch) Display, 48MP + 12MP | 12MP Front Camera',
    price: '$1099',
  },
  {
    color: 'Pink',
    image: iphonePink,
    description: 'Elegant pink iPhone 15 with 512GB for creators and photographers.',
    features: 'Advanced camera features, cinematic mode, and ProRAW support.',
    offers: 'Free AirPods on pre-order. Limited stock.',
    Highlights: '128 GB ROM, 15.49 cm (6.1 inch) Display, 48MP + 12MP | 12MP Front Camera',
    price: '$1199',
  },
  {
    color: 'White',
    image: iphoneWhite,
    description: 'Clean white iPhone 15 with a sleek design.',
    features: 'All-day battery life, brilliant OLED screen.',
    offers: 'Trade-in deals available.',
    Highlights: '128 GB ROM, 15.49 cm (6.1 inch) Display, 48MP + 12MP | 12MP Front Camera',
    price: '$1199',
  },
];

export default function Iphone15Cart() {
  const [cartItem, setCartItem] = useState(null);

  const handleBuyNow = (item) => {
    setCartItem(item);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        iPhone 15 Collection
      </Typography>

      {iphoneVariants.map((variant, index) => (
        <React.Fragment key={index}>
          <Box sx={{ display: 'flex', gap: 3, py: 2, flexWrap: 'wrap' }}>
            <Box
              component="img"
              src={variant.image}
              alt={variant.color}
              sx={{
                width: 180,
                height: 180,
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
            <Box>
              <Typography variant="h6">iPhone 15 - {variant.color}</Typography>
              <Typography>{variant.description}</Typography>
              <Typography variant="body2">
                <strong>Features:</strong> {variant.features}
              </Typography>
              <Typography variant="body2">
                <strong>Offers:</strong> {variant.offers}
              </Typography>
              <Typography variant="body2">
                <strong>Highlights:</strong> {variant.Highlights}
              </Typography>
              <Typography variant="h6" color="green">
                {variant.price}
              </Typography>
              <Button variant="contained" size="small" onClick={() => handleBuyNow(variant)}>
                Buy Now
              </Button>
            </Box>
          </Box>
          {index < iphoneVariants.length - 1 && <Divider />}
        </React.Fragment>
      ))}

      {cartItem && (
        <Box mt={4} p={2} border="1px solid #ccc" borderRadius={2} bgcolor="#f9f9f9">
          <Typography variant="h5" gutterBottom>
            🛒 Your Cart
          </Typography>
          <Box display="flex" gap={2} alignItems="center">
            <img src={cartItem.image} alt={cartItem.color} width={100} />
            <Box>
              <Typography variant="h6">iPhone 15 - {cartItem.color}</Typography>
              <Typography>{cartItem.price}</Typography>
              <Typography variant="body2">{cartItem.description}</Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

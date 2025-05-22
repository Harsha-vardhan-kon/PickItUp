import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';

// Images
import iphoneBlack from '../Assets/iphone15.jpg';
import iphoneBlue from '../Assets/iphone15Blue.png';
import iphonePink from '../Assets/Iphone15Pink.png';
import iphoneWhite from '../Assets/iphone15White.png';
const Iphone15 = () => {
  const iphoneVariants = [
    {
      color: 'Black',
      image: iphoneBlack,
      description: 'Sleek black iPhone 15 with 128GB storage and A16 Bionic chip.',
      features: '6.1" Super Retina XDR display, Dual-camera system, Ceramic Shield front.',
      offers: 'Exchange offer available. No-cost EMI up to 12 months.',
      Highlights:'128 GB ROM15.49 cm (6.1 inch)Super Retina XDR Display48MP + 12MP | 12MP Front CameraA16 Bionic Chip, 6 Core Processor Processor',
      price: '$999',
    },
    {
      color: 'Blue',
      image: iphoneBlue,
      description: 'Cool white iPhone 15 with 256GB storage and enhanced battery life.',
      features: 'MagSafe support, Water and dust resistant, iOS 17 out of the box.',
      offers: 'Bank offers: 10% cashback on selected cards.',
       Highlights:'128 GB ROM15.49 cm (6.1 inch)Super Retina XDR Display48MP + 12MP | 12MP Front CameraA16 Bionic Chip, 6 Core Processor Processor',
      price: '$1099',
    },
    {
      color: 'Pink',
      image: iphonePink,
      description: 'Elegant pink iPhone 15 with 512GB for creators and photographers.',
      features: 'Advanced camera features, cinematic mode, and ProRAW support.',
      offers: 'Free AirPods on pre-order. Limited stock.',
       Highlights:'128 GB ROM15.49 cm (6.1 inch)Super Retina XDR Display48MP + 12MP | 12MP Front CameraA16 Bionic Chip, 6 Core Processor Processor',
      price: '$1199',
    },
    {
      color: 'white',
      image: iphoneWhite,
      description: 'Elegant pink iPhone 15 with 512GB for creators and photographers.',
      features: 'Advanced camera features, cinematic mode, and ProRAW support.',
      offers: 'Free AirPods on pre-order. Limited stock.',
       Highlights:'128 GB ROM15.49 cm (6.1 inch)Super Retina XDR Display48MP + 12MP | 12MP Front CameraA16 Bionic Chip, 6 Core Processor Processor',
      price: '$1199',
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      

      {iphoneVariants.map((variant, index) => (
        <React.Fragment key={index}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 3,
              py: 2,
            }}
          >
            {/* Image - fixed size */}
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

            {/* Text details */}
            <Box>
              <Typography variant="h6" gutterBottom>
                iPhone 15 - {variant.color}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {variant.description}
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                <strong>Features:</strong> {variant.features}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Offers:</strong> {variant.offers}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Highlights:</strong> {variant.Highlights}
              </Typography>
              
              <Typography variant="h6" color="green" sx={{ mb: 1 }}>
                {variant.price}
              </Typography>
              <Button variant="contained" size="small">
                Buy Now
              </Button>
            </Box>
          </Box>

          {/* Divider line between rows */}
          {index < iphoneVariants.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Iphone15;

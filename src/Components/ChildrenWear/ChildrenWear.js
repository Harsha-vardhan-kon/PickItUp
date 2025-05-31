import React, { useState } from 'react';
import ChildrenWear1 from '../Assets/ChildrenWear1.png';
import ChildrenWear2 from '../Assets/ChildrenWear2.png';
import ChildrenWear3 from '../Assets/ChildrenWear3.png';
import ChildrenWear4 from '../Assets/ChildrenWear4.png';
import ChildrenWear5 from '../Assets/ChildrenWear5.png';
import ChildrenWear6 from '../Assets/ChildrenWear6.png';
import ChildrenWear7 from '../Assets/ChildrenWear7.png';
import ChildrenWear8 from '../Assets/ChildrenWear8.png';
import Hoddie1 from '../Assets/Hoddie1.png';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { useCart } from '../Cart/CartProvider'; // Adjust the path if needed

const ChildrenWear = () => {
  const { addToCart } = useCart(); // access cartItems
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems((prev) => [...prev, product.title]);
  };


  const productdata = [
    {
      title: 'Kurtha',
      price: 700,
      details: 'Durable, no added colors',
      image: ChildrenWear1,
    },
    {
      title: 'Frock',
      price: 850,
      details: 'Cotton, lightweight, breathable',
      image: ChildrenWear2,
    },
    {
      title: 'Hoddie',
      price: 850,
      details: 'Cotton, lightweight, breathable',
      image: Hoddie1,
    },
    {
      title: 'Dungaree',
      price: 900,
      details: 'Trendy and comfy denim style',
      image: ChildrenWear3,
    },
    {
      title: 'Punjabi Dress 1',
      price: 700,
      details: 'Good looking traditional',
      image: ChildrenWear4,
    },
    {
      title: 'Punjabi Dress 2',
      price: 650,
      details: 'Adorable traditional',
      image: ChildrenWear5,
    },
    {
      title: 'punjabiDress',
      price: 1200,
      details: 'Good Looking traditinal',
      image: ChildrenWear6,
    },
    {
      title: 'partyWear',
      price: 700,
      details: 'Durable, no added colors',
      image: ChildrenWear7,
    },
    {
      title: 'Modern',
      price: 700,
      details: 'Durable, no added colors',
      image: ChildrenWear8,
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, p: 4 }}>
      {productdata.map((product, index) => {
        const isAdded = addedItems.includes(product.title);
        return (
          <Card key={index} sx={{ width: 250, height: 350 }}>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography>Price: ₹{product.price}</Typography>
              <Typography variant="body2">{product.details}</Typography>
              <Button
                variant="contained"
                color={isAdded ? 'success' : 'primary'}
                sx={{ mt: 1 }}
                onClick={() => handleAddToCart(product)}
                disabled={isAdded}
              >
                {isAdded ? 'Added' : 'Add to Cart'}
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default ChildrenWear;

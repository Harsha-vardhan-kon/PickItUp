import React, { useState, useEffect } from 'react';
import {
  Button, List, ListItem, Typography, Box, IconButton,
  AppBar, Toolbar, TextField, Badge
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { GrNext } from 'react-icons/gr';
import { IoChevronBack } from 'react-icons/io5';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BsShopWindow } from "react-icons/bs";
// Images
import headPhones from '../Assets/headPhones.png';
import shoes from '../Assets/shoes.png';
import Chromecast from '../Assets/Chromecast.png';
import snekers from '../Assets/snekers.png';
// import Razor from '../Assets/Razor.png';
import bgImage from '../Assets/bgImage.png';
import childrenwear from '../Assets/childrenWear.jpg';
import saree from '../Assets/sare.webp';
import toys from '../Assets/toys.webp';
import laptops from '../Assets/laptops.jpg';
import serums from '../Assets/serums.jpg';
import iphone15 from '../Assets/iphone15.jpg';
import iphone16 from '../Assets/iphone16.png';
import macBookM2 from '../Assets/macBookM2.png';
import macBookPro from '../Assets/macBook.jpg';
import s24 from '../Assets/s24.jpg';

const Product = () => {
  const navigate = useNavigate();

  // Banner
  const bannerImages = [headPhones,snekers, Chromecast,shoes];
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isPaused,bannerImages.length]);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  // Featured products
  const featuredProducts = [
    { label: 'iPhone 15 from $1000', image: iphone15, route: '/iphone15' },
    { label: 'iPhone 16 from $1200', image: iphone16, route: '/iphone16' },
    { label: 'MacBook M2 from $1100', image: macBookM2, route: '/macbook-m2' },
    { label: 'MacBook Pro from $1600', image: macBookPro, route: '/macbook-pro' },
    { label: 's24 Pro from $800', image: s24, route: '/s24' },
    { label: 'Saree from $80', image: saree, route: '/saree' }
  ];

  const [index, setIndex] = useState(0);
  const visibleCount = 4;

  const handleNext = () => {
    if (index + visibleCount < featuredProducts.length) {
      setIndex(index + 1);
    }
  };

  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
  
    <Box
    
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {/* App Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 3, padding: '10px 20px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{ color: 'red', fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
          < BsShopWindow color='green'/>  PickItUp
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField
              size="small"
              placeholder="Search products..."
              variant="outlined"
              sx={{ width: 300 }}
              color='wheat'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  console.log('Searching for:', e.target.value);
                }
              }}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button variant="contained" color="success" onClick={() => navigate('/login')}>
              Login
            </Button>
            <IconButton onClick={() => navigate('/cart')}>
              <Badge badgeContent={2} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Auto-Rotating Banner */}
      <Box
     
        sx={{
          left:'1000px',
          position: 'relative',
          width: '250px',
          bottom:'7px',
          height: '360px',
          overflow: 'hidden',
          mt: 1
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${bannerImages[currentBanner]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 0.5s ease-in-out',
          }}
        />
        {/* Arrows */}
        <IconButton
          onClick={prevBanner}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 10,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.6)',
          }}
        >
          <IoChevronBack />
        </IconButton>
        <IconButton
          onClick={nextBanner}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 10,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255,255,255,0.6)',
          }}
        >
          <GrNext />
        </IconButton>

        {/* Dots */}
        <Box sx={{ position: 'absolute', bottom: 10, width: '100%', textAlign: 'center' }}>
          {bannerImages.map((_, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                margin: '0 5px',
                borderRadius: '50%',
                backgroundColor: i === currentBanner ? 'white' : 'gray',
                cursor: 'pointer',
              }}
              onClick={() => setCurrentBanner(i)}
            />
          ))}
        </Box>
      </Box>

      {/* Top Categories */}
      <nav style={{ width: '100%', height: '150px', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <List sx={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
          {[
            { img: childrenwear, label: 'Children Wear', route: '/product/children' },
            { img: saree, label: 'Saree', route: '/product/saree' },
            { img: toys, label: 'Toys', route: '/product/toys' },
            { img: laptops, label: 'Electronics', route: '/product/electronics' },
            { img: serums, label: 'Beauty', route: '/product/beauty' },
          ].map((item, index) => (
            <ListItem key={index} disablePadding sx={{ width: '200px', height: '90px', position: 'relative' }}>
              <Link
                to={item.route}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  borderRadius: '8px',
                }}
              >
                <Button fullWidth sx={{ position: 'relative', top: '60px', backgroundColor: 'rgba(255,255,255,0.8)' }}>
                  {item.label}
                </Button>
              </Link>
            </ListItem>
          ))}
        </List>
      </nav>

      {/* Featured Products */}
      <nav style={{ padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        <IconButton onClick={handleBack} disabled={index === 0}>
          <IoChevronBack color="white" size={24} />
        </IconButton>
       <Typography
  sx={{
    position: 'absolute',
    top: '40%',
    left: '40%',
    transform: 'translate(-50%, -50%)',
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'black',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: '10px 20px',
    borderRadius: '8px',
    textAlign: 'center',
    whiteSpace: 'nowrap' 
  }}
>
  Shop Smart, Live Better — Only at PickItUp
</Typography>


        <Box sx={{ display: 'flex', gap: '30px' }}>
          {featuredProducts.slice(index, index + visibleCount).map((product, idx) => (
            <Box
              key={idx}
              onClick={() => navigate(product.route)}
              sx={{
                width: '200px',
                height: '180px',
                backgroundImage: `url(${product.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                boxShadow: 3,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                p: 1,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.02)',
                  transition: '0.3s',
                },
              }}
            >
              <Typography
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                }}
              >
                {product.label}
              </Typography>
            </Box>
          ))}
        </Box>

        <IconButton onClick={handleNext} disabled={index + visibleCount >= featuredProducts.length}>
          <GrNext color="white" size={24} />
        </IconButton>
      </nav>
    </Box>
   
  );
};

export default Product;

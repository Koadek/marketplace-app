import React, { useState } from 'react';
import ProductList from './components/product/ProductList';
import Cart from './components/cart/Cart';
import productsData from './data/products';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
  Drawer,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<typeof productsData>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: (typeof productsData)[0]) => {
    setCartItems([...cartItems, product]);
  };

  const handleDeleteFromCart = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Container>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Marketplace
          </Typography>
          <IconButton color='inherit' onClick={handleToggleCart}>
            <Badge badgeContent={cartItems.length} color='error'>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <ProductList onAddToCart={handleAddToCart} />

      <Drawer anchor='right' open={isCartOpen} onClose={handleToggleCart}>
        <Cart
          cartItems={cartItems}
          onCloseCart={handleToggleCart}
          onDeleteFromCart={handleDeleteFromCart}
        />
      </Drawer>
    </Container>
  );
};

export default App;

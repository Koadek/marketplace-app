import React from 'react';
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { ProductData } from '../../data/products';
import { Delete } from '@mui/icons-material';

interface CartProps {
  cartItems: ProductData[];
  onCloseCart: () => void;
  onDeleteFromCart: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  onCloseCart,
  onDeleteFromCart,
}) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Drawer anchor='right' open={true} onClose={onCloseCart}>
      <Box sx={{ width: 300 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <Typography variant='h6'>Your Cart</Typography>
          <Button onClick={onCloseCart}>Close</Button>
        </Box>
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.title}
                secondary={`$${item.price.toFixed(2)}`}
              />
              <Button color='error' onClick={() => onDeleteFromCart(item.id)}>
                <Delete />
              </Button>
            </ListItem>
          ))}
        </List>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}
        >
          <Typography variant='subtitle1'>Total:</Typography>
          <Typography variant='h6'>${total.toFixed(2)}</Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Cart;

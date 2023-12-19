import React from 'react';
import { ProductData } from '../../data/products';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
} from '@mui/material';

interface ProductProps {
  product: ProductData;
  onAddToCart: (product: ProductData) => void;
}

const Product: React.FC<ProductProps> = ({ product, onAddToCart }) => {
  const { id, title, price, description, category, images } = product;

  return (
    <Grid item style={{ width: '200px' }}>
      <Card
        style={{ height: '425px', display: 'flex', flexDirection: 'column' }}
      >
        <img
          src={images[0]}
          alt={title}
          style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }}
        />
        <CardContent style={{ flexGrow: 1 }}>
          <Typography variant='h6' gutterBottom>
            {title}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxHeight: '100px',
            }}
          >
            {description}
          </Typography>
          <Typography variant='h6' color='primary'>
            ${price.toFixed(2)}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            marginTop: 'auto',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            variant='contained'
            color='primary'
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;

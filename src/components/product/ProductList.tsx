import React, { useEffect, useState } from 'react';
import Product from './Product';
import { ProductData } from '../../data/products';
import { Grid } from '@mui/material';

interface ProductListProps {
  onAddToCart: (product: ProductData) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.escuelajs.co/api/v1/products?offset=0&limit=20'
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{marginTop: '25px'}}>
      <Grid container justifyContent='center' spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;

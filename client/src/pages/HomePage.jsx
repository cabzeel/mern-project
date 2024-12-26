import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../Store/product';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className='home_page'>
      <h1>Current Products</h1>

      <div className='grid_container'>
        {
          products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
        }
        {
          !products.length && <span>
        <p>No products found.</p>
        <Link to={"/create"} className="link">
           Create a product
        </Link>
      </span>
        }
      </div>
    </div>
  )
}

export default HomePage
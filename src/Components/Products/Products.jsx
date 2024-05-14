import React, { useEffect, useState } from 'react'
import './Products.scss'
import Product from '../Product/Product'
import axios from 'axios';
const Products = ({cat,sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log('cat',cat);
    useEffect(() => {
        const getProducts = async () => {
            try {
              const res = await axios.get(
                cat
                  ? `http://localhost:5000/api/products?category=${cat}`
                  : "http://localhost:5000/api/products"
              );
                setProducts(res.data)
            } catch (err) {

            }
        }
        getProducts();
    }, [cat])
    // useEffect(() => {
    //   cat &&
    //     setFilteredProducts(
    //       products.filter((item) =>
    //         Object.entries().every(([key, value]) =>
    //           item[key].includes(value)
    //         )
    //       )
    //     );
    // }, [products, cat]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) => {
                return [...prev].sort((a, b) => a.createdAt - b.createdAt)
            });
        } else if (sort === "asc") {
            setFilteredProducts((prev) => {
                return [...prev].sort((a, b) => a.price - b.price)
            });
        } else {
            setFilteredProducts((prev) => 
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort])
    // console.log('products',products);
    console.log('cat',cat);
    console.log('product',products);
    
  return (
    <div className='new-collections'>
        <h1>HÀNG MỚI</h1>
        <hr />
        <div className='collections-item'>
        {cat
        ? products.map((item) => <Product item={item} key={item.id} />)
        : products
            // .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
        </div>
    </div>
    
  )
}

export default Products
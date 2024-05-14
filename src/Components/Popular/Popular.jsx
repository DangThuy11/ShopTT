import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import './Popular.scss'
import axios from 'axios'
const Popular = ({cat,sort}) => {
    const popularProducts = [
        {
          id:1,
          name:"Áo giữ nhiệt nam",
          price:"50",
          old_price:"88",
          img:"https://bizweb.dktcdn.net/100/438/408/themes/946371/assets/ao_polo_coolmax_-_vag.jpg?1712829547406",
        },
        {
          id:2,
          name:"Áo giữ nhiệt nam",
          price:"50",
          old_price:"88",
          img:"https://bizweb.dktcdn.net/100/438/408/themes/946371/assets/ao_polo_airycool_dang_om_sieu_mat_-_ddo.jpg?1712829547406",
        },
        {
          id:3,
          name:"Áo giữ nhiệt nam",
          price:"50",
          old_price:"88",
          img:"https://bizweb.dktcdn.net/100/438/408/themes/946371/assets/ao_polo_airycool_dang_om_sieu_mat_-_ddo.jpg?1712829547406",
        },
        {
          id:4,
          name:"Áo giữ nhiệt nam",
          price:"50",
          old_price:"88",
          img:"https://bizweb.dktcdn.net/100/438/408/themes/946371/assets/polo_cafe_phoi_tay_-_np1.jpg?1712829547406",
        },
        {
          id:5,
          name:"Áo giữ nhiệt nam",
          price:"50",
          old_price:"88",
          img:"https://bizweb.dktcdn.net/100/438/408/products/tsk7134-tvx-5.jpg?v=1711504825337",
        },
        {
          id:6,
          name:"Áo giữ nhiệt nam",
          price:"50",
          old_price:"88",
          img:"https://bizweb.dktcdn.net/100/438/408/themes/946371/assets/polo_cafe_phoi_tay_-_np1.jpg?1712829547406",
        },
        {
          id:7,
          name:"Áo giữ nhiệt nam",
          price:"50",
          old_price:"88",
          img:"https://bizweb.dktcdn.net/100/438/408/products/svn5096-ghi-apn5046-den-7.jpg?v=1704250579117",
        },
        {
          id:8,
          name:"Áo giữ nhiệt nam",
          price:"50",
          old_price:"88",
          img:"https://bizweb.dktcdn.net/100/438/408/products/cvn5096-den-apn5046-ddo-1.jpg?v=1690163788930",
        },
      ]
      const [products, setProducts] = useState([]);
  //const [filteredProducts, setFilteredProducts] = useState([]);
  // console.log('cat',cat);
    useEffect(() => {
        const getProducts = async () => {
            try {
              const res = await axios.get(
                
                  "http://localhost:5000/api/products"
              );
                setProducts(res.data)
            } catch (err) {

            }
        }
        getProducts();
    }, [])
  return (
    <div className='popular'>
        <h1>HÀNG MỚI GIÁ TỐT</h1>
        <hr />
        <div className='popular-item'>
          {
            products.slice(0,7).map((item) =>(
              <Product item={item} key={item.id} />
            ))
          }
        </div>
    </div>
  )
}

export default Popular
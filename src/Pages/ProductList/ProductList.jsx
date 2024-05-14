import React, { useState } from 'react';
import './ProductList.scss'
import Navbar from '../../Components/Navbar/Navbar';
import dropdown_icon from '../../Components/Assets/dropdown_icon.png'
import Product from '../../Components/Product/Product';
import Products from '../../Components/Products/Products';
import { products } from '../../data'
import { useLocation } from 'react-router-dom';


const ProductList = () => {
    const location = useLocation();
    // console.log(location);
    const cat = location.pathname.split("/")[2];
    // console.log(cat);
    const [sort,setSort] = useState("newest")
    return (
        <>
            <div className='shop-category'>
                {/* <img className='banner' src={props.banner} alt="" /> */}
                <div className="indexSort">
                    <p>
                        <span>Showing 1-12</span> out of 36 products
                    </p>
                    <div className="filter">
                        <span className="filterText">
                            Sort Products:
                        </span>
                        <select className="selectNewletter" name="asc" onChange={(e) =>setSort(e.target.value)}>
                            <option value="newest">Mới Nhất</option>
                            <option value="asc">Giá Tăng</option>
                            <option value="desc">Giá Giảm</option>
                        </select>
                    </div>
                </div>
                <Products sort={sort} cat={cat}/>
                <div className="loadmode">
                    Explore Mode
                </div>
            </div>
        </>
    )
}

export default ProductList
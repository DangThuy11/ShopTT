import React, { useEffect, useState } from 'react'
import './Product.scss'
import star_icon from '../../Components/Assets/star_icon.png'
import star_dull_icon from '../../Components/Assets/star_dull_icon.png';
import Footer from '../../Components/Footer/Footer';
import DescriptionBox from '../../Components/DescriptionBox/DescriptionBox'
import { useLocation } from 'react-router-dom';
import { message } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/apiCalls";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { publicRequest, userRequest } from '../../requestMethod';

const Product = () => {
  const location = useLocation();
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log('currentUser', currentUser);
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [selected, setSelected] = useState(0);

  const dispatch = useDispatch();

  const images = [
    "https://nhatminhdecor.com/wp-content/uploads/2019/01/chup-anh-voi-mau-that-800x800.jpg",
    "https://nhatminhdecor.com/wp-content/uploads/2019/01/chup-anh-voi-phong-nen-vai-trang.jpg",
    "https://vsmall.vn/wp-content/uploads/2022/07/cach-chup-anh-quan-ao-dep-bang-dien-thoai.png",
    "https://img.ws.mms.shopee.vn/008d7e1f9a3d39ae9d6a7cc09a6c3233"
  ]


  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  const handleAddToCart = () => {
    if (!color || !size) {
      message.error('Vui lòng chọn loại sản phẩm!');
      return;
    }
    if (color && size && quantity > 0) {
      console.log('{ ...product, quantity, color, size }', { ...product, quantity, color, size });
      //dispatch(addProduct({ ...product, quantity, color, size }));
      addProductToCart(dispatch, currentUser._id, { ...product, quantity, color, size })
      message.success('Đã thêm sản phẩm vào giỏ hàng!');
    }

  }
  const handleColor = (c) => {
    setColor(c.target.value);
    message.success(`Đã chọn màu ${c.target.value}`)
  }
  const handleSize = (e) => {
    setSize(e.target.value);
    message.success(`Đã chọn size ${e.target.value}`)
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest.get("/products/find/" + id);
        setProduct(res.data);
        setColor(res.data.color[0])
        setSize(res.data.size[0])
      } catch {

      }
    }
    getProduct()
  }, [id])
  console.log(color);
  return (
    <>
      <div className='product-display'>
        <div className="product-display-left">
          {/* <div className="left-img">
            <img src={images[0]} alt="" onClick={e => { setSelected(0) }} />
            <img src={images[1]} alt="" onClick={e => { setSelected(1) }} />
            <img src={images[2]} alt="" onClick={e => { setSelected(2) }} />
            <img src={images[3]} alt="" onClick={e => { setSelected(3) }} />
          </div> */}
          <div className="img">
            <img src={product.img} alt="" className="main-img" />
          </div>
        </div>
        <div className="product-display-right">
          <h1>{product.title}</h1>
          <div className="right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="right-prices">
            <div className="old">
              ${product.old_price}
            </div>
            <div className="new">
              ${product.price}
            </div>
          </div>
          <div className="desc">
            {product.desc}
          </div>
          <div className="right-size">
            <h1>Chọn màu</h1>
            <div className="right-sizes">
              {product.color?.map((c) => (
                  <button value={c} key={c} 
                    onClick={(c) => handleColor(c)} className={color === c ? "selected" : ""}>{c}</button>
              ))}
            </div>
          </div>
          <div className="right-size">
            <h1>Chọn Size</h1>
            <div className="right-sizes">
              {product.size?.map((s) => (
                  <button 
                    onClick={(e) => handleSize(e)} value={s} key={s} className={size === s ? "selected" : ""}>{s}</button>
              ))}
            </div>
          </div>
          <h1>Số lượng</h1>
          <div className="amount">
            <MinusOutlined className="cout" onClick={() => handleQuantity("dec")} />
            <div className="number">{quantity}</div>
            <PlusOutlined className="cout" onClick={() => handleQuantity("inc")} />
          </div>
          <button onClick={handleAddToCart}>ADD TO CART</button>
          <p className="right-category"><span>Category :</span>Women, T_shirt, Crop-top</p>
          <p className="right-category"><span>Tags :</span>Modern, Latest</p>

        </div>
      </div>
      <DescriptionBox />
      <Footer />
    </>
  )
}

export default Product
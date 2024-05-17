import React, { useState } from "react";
import './PurchaseProduct.scss'
import { format } from "timeago.js";
import { message} from "antd";
import { useNavigate } from 'react-router-dom';
import { cancelOrder } from "../../redux/apiCalls";



const PurchaseProduct = ({order, product, orderInfor, pending }) => {
  //debugger;
  //console.log('status', cancel);
  console.log('product, orderInfor', product, orderInfor);
  console.log('order', order);
  const navigate = useNavigate();
  const handleCancelOrder = async () => {
    try {
      const response = await cancelOrder(orderInfor._id, 3);
      if (response.success) {
        message.success('Huỷ đơn hàng thành công')
        navigate('/orders/cancel');
      } else {
        // Xử lý khi xác nhận đơn hàng không thành công
        message.success('Huỷ đơn thất bại')
      }
    } catch (error) {
      console.error('Lỗi khi huỷ đơn hàng:', error);
    }
    
  };
  return (
    <>

      <div className='purchaseProduct-wrapper'>
        {/* {products.map(pro => ( */}
        <div className="purchaseProduct-content">
          <div className="purchaseProduct-content-left">
            <img src={product?.productId?.img} alt="" className="img-product" />
            <div className="infor-product">
              <div className="name-product">{product?.productId?.title}</div>
              <div className="filter-product">
                Phân loại: {product?.colorOrder}, {product?.sizeOrder}
              </div>
              <div className="quantity-product">
                x {product?.quantityOrder}
              </div>
            </div>
          </div>
          <div className="purchaseProduct-content-right">
            <div className="price-product">
              $ {product?.quantityOrder * product?.productId?.price}
            </div>
          </div>
        </div>
        {/* ))} */}
        <div className="checkout-product">
          <div className="checkout-product-left">
            <div className="name-customer">
              {orderInfor?.name}
            </div>
            <div className="phone-number">
              {orderInfor?.phone}
            </div>
            <div className="delivery-address">
              {orderInfor?.address}
            </div>
            <div className="date-order">
              <div className="title">Ngày đặt :</div>
              <div className="date-value">{format(orderInfor?.createdAt)}</div>
            </div>
          </div>

        </div>
          {
            pending &&
            <div className="purchaseProduct-bottom" onClick={handleCancelOrder}>
            <div className="btn-delete" >
              Huỷ đơn
            </div>
          </div>
          }
        
      </div>
    </>
  )
}

export default PurchaseProduct;
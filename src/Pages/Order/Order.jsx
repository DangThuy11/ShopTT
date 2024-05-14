import React from "react";
import PurchaseProduct from "../../Components/PurchaseProduct/PurchaseProduct";
import './Order.scss'
const Order = ({ order }) => {
    console.log('orderItem',order);
    return (
        <div>
            {order.products.map(product => (
                <PurchaseProduct key={order._id} product={product} orderInfor={order} />
            ))}
            <div className="checkout-product-right">
                <div className="sum-price-checkout">
                    <div className="title-checkout">
                        Thành tiền :
                    </div>
                    <div className="price-order">
                       $ {order.amount} 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;
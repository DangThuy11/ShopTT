import React from "react";
import PurchaseProduct from "../../Components/PurchaseProduct/PurchaseProduct";
import './Order.scss'
const Order = ({ order,pending }) => {
    console.log('orderItem',order);
    console.log('pending',pending);
    return (
        <div>
            {order.products.map(product => (
                <PurchaseProduct key={order._id} product={product} orderInfor={order} pending={pending} />
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
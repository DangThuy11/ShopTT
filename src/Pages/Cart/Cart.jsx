import React from 'react';
import './Cart.scss'
import remove_icon from '../../Components/Assets/cart_cross_icon.png'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductInCart } from "../../redux/apiCalls";
import { useState } from "react";
import { message, Modal } from 'antd';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    console.log(cart.product);
    const currentUser = useSelector((state) => state.user.currentUser);
    const [deletedProductInCart, setDeletedProductInCart] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    // const handleDelete = (product) => {
    //     deleteProductInCart(dispatch, currentUser._id,product)
    // }
    const showModal = () => {
        setIsModalVisible(true);
    };


    const handleDelete = (product) => {
        // Lưu sản phẩm cần xóa vào state hoặc props để sử dụng trong hàm xác nhận xóa
        setDeletedProductInCart(product);
        showModal();
    };

    const handleDeleteConfirmed = () => {
        if (deletedProductInCart) {
            deleteProductInCart(dispatch, currentUser._id, deletedProductInCart);
            setDeletedProductInCart(null);
            setIsModalVisible(false);
            message.success('Xoá sản phẩm thành công.');
        }
    };
    const handleDeleteCancelled = () => {
        setIsModalVisible(false);
        setDeletedProductInCart(null);
    };
    return (
        <>
            <div className='cartItems'>
                <h1>Giỏ hàng</h1>
                <div className="cartItem-format-main">
                    <p>Sản phẩm</p>
                    <p>Tên sản phẩm</p>
                    <p>Giá</p>
                    <p>Màu sắc</p>
                    <p>Kích cỡ</p>
                    <p>Số lượng</p>
                    <p>Giá tiền</p>
                    <p>Xoá</p>
                </div>
                <hr />
                {
                    cart.product.map((product) => (
                        <div key={product._id} className='main-product'>
                            <div className="cartItem-format cartItem-format-main">
                                <img src={`${product.productId.img}`} alt="" className='cart-icon' />
                                <p>{product.productId.title}</p>
                                <p>$ {product.productId.price}</p>
                                <span>{product.colorCart}</span>
                                <span>{product.sizeCart}</span>
                                <button className='cartItem_quantity'>1</button>
                                <p>$ {product.productId.price * product.quantity}</p>
                                <img className='cart-remove' src={remove_icon} alt="" onClick={() => handleDelete(product)} />
                            </div>
                        </div>
                    ))
                }
                <hr />
                <div className="cartItems-down">
                    <div className="cartItem-total">
                        <h1>Tổng số giỏ hàng</h1>
                        <div className='total-main'>
                            <div className="total-item">
                                <p>Tổng số tiền</p>
                                <p>${cart.total}</p>
                            </div>
                            <div className="total-item">
                                <p>Phí vận chuyển</p>
                                <p>Miễn phí</p>
                            </div>
                            <div className="total-item">
                                <p>Thành tiền</p>
                                <p>${cart.total}</p>
                            </div>
                            <Link to='/order'>
                                <button>Đặt hàng</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Modal
                    title='Xoá sản phẩm ở giỏ hàng'
                    visible={isModalVisible}
                    onOk={handleDeleteConfirmed}
                    onCancel={handleDeleteCancelled}
                >
                    <p>Bạn có chắc chắn muốn xoá sản phầm này?</p>
                </Modal>
            </div>
        </>
    )
}

export default Cart
import React, { useEffect, useState } from 'react'
import PurchaseProduct from '../../Components/PurchaseProduct/PurchaseProduct'
import { useSelector } from 'react-redux';
import { searchOrder } from '../../redux/apiCalls';
import Order from '../Order/Order';

const CancelledOrder = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [listOrder, setListOrder] = useState([])
  //const [orderInfor, setOrderInfor] = useState({})
  useEffect(() => {
    const getListProduct = async () => {
        let orders = await searchOrder(currentUser._id, {
          "status": "3"
        })
        setListOrder(orders) 
        // setOrderInfor(order)
        console.log('order',orders);
      } 
      getListProduct()
    }, [currentUser._id]);
  //debugger
  console.log('list', listOrder);
  return (
    <>
      {listOrder.map(order => (
        <Order key={order._id} order={order} />
      ))}
    </>
  )
}

export default CancelledOrder
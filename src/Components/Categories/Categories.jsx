import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import './Categories.scss'
const Categories = () => {
    const data =[
        {
            id:'1',
            img:"https://bizweb.dktcdn.net/100/438/408/products/smm6015-den-4.jpg?v=1690163428783",
            title:"MEN",
            cat:"men"
        },
        {
            id:'2',
            img:"https://bizweb.dktcdn.net/100/438/408/products/sdn5010-hna-2.jpg?v=1712643431380",
            title:"WOMEN",
            cat:"women"
        },
        {
            id:'3',
            img:"https://thanhnien.mediacdn.vn/uploaded/gianglao/2021_01_07/ozlilars_EGUQ.jpg?width=500",
            title:"FOOTBALL",
            cat:"football"
        },
        {
            id:'4',
            img:"https://bizweb.dktcdn.net/100/438/408/products/ao-thun-dai-tay-tre-em-yody-atk6022-nau-5.jpg?v=1697253682167",
            title:"KID",
            cat:"kid"
        },
    ]
  return (
    <div className='categories'>
         {
            data.map((item) =>(
                <>
                    <CategoryItem item={item} key={item.id} />
                </>
            ))
        }
    </div>
  )
}

export default Categories
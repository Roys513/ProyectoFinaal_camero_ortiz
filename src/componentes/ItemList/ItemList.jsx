import React from 'react'
import Item from '../Item/Item'

const ItemList = ({albumes}) => {
  return (
    <div className='itemList'>
        {albumes.map(item => <Item key={item.id} {...item}/>)}
    </div>
  )
}

export default ItemList
import React, { memo } from 'react'
import ItemWrapper from './style'
const LongforItem = memo((props) => {
  const { data } = props
  return (
    <ItemWrapper>
      <div className='content'>
        <img src={data.picture_url} alt={data.city} />
        <div className="cover"></div>
        <div className='info'>
          <div className='city'>{data.city}</div>
          <div className='price'>均价{data.price}</div>
        </div>
      </div>
    </ItemWrapper>
  )
})

export default LongforItem
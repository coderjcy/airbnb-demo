import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Rating from '@mui/material/Rating'
import HouseItemWrapper from './style'
const HouseItem = memo((props) => {
  const {houseInfo} = props;
  return (
    <HouseItemWrapper verifyColor={houseInfo.verify_info.text_color || '#39576a'}>
      <img className='cover' alt='img' src={houseInfo.picture_url}/>  
      <div className='info'>
        <div className='specification' >{houseInfo.verify_info.messages.join('·')}</div>
        <div className='name'>{houseInfo.name}</div>
        <div className='price'>
          <span style={{color:'#484848'}}>{houseInfo.price_format}</span>/晚</div>
        <div className='span' >
          <Rating value={houseInfo.star_rating ?? 5} precision={0.1} readOnly sx={{color:'#00848a',fontSize:'12px'}}></Rating>
          <span style={{marginLeft:'2px'}}>{houseInfo.reviews_count}</span>
          <span>{houseInfo.bottom_info &&('·' + houseInfo.bottom_info.content)}</span>
        </div>
      </div>

      
    </HouseItemWrapper>
  )
})

HouseItem.propTypes = {
  houseInfo:PropTypes.object
}

export default HouseItem
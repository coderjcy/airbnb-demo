import PropTypes from 'prop-types'
import React, { memo } from 'react'

import IconLeftArrow from '@/assets/svg/icon-right-arrow'
import FooterWrapper from './style'
import { useNavigate } from 'react-router-dom'
const SectionFooter = memo((props) => {
  const {name} = props
  let msg = '显示全部'
  if(name){
    msg = `显示更多${name}房源`
  }

  const navigate = useNavigate()
  const handleMoreClick = () => {
    navigate('/more')
  };
  return (
    <FooterWrapper>
      <div onClick={handleMoreClick}>
        <div className='text' style={{color:name?'#008489':'#000'}}>{msg}</div>
        <i className='icon'>
          <IconLeftArrow />
        </i>
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string,
}

export default SectionFooter
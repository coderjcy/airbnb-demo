import PropTypes from 'prop-types'
import React, { memo } from 'react'

import HeaderWrapper from './style'
const SectionHeader = memo((props) => {
  const {title,subtitle} = props
  return (
    <HeaderWrapper style={{height:subtitle?'':'38px'}}>
      <div className='content' >
        <div className='title'>{title}</div>
        {subtitle && (<div className='subtitle'>{subtitle}</div>)}
        
      </div>
    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader
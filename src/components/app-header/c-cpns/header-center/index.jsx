import IconSearch from '@/assets/svg/icon-search'
import React, { memo } from 'react'
import { CenterWrapper } from './style'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className='search-box'>
        <div className='text'>
          搜索房源和体验
        </div>
        <i className='icon'>
          <IconSearch/>
        </i>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter
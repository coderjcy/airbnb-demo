import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon-logo'
const HeaderLeft = memo((props) => {
  return (
    <LeftWrapper>
      <div className='logo'>
        <IconLogo></IconLogo>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
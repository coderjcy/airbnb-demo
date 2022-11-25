import classNames from 'classnames';
import React, { memo, useState } from 'react'
import Switch from '@mui/material/Switch';

import FiliterWrapper from './style'

const Filiter = memo(() => {
  const [selectedOptions,setSelectedOption] = useState([])
  const options = ['人数','可免费取消','房源类型','价格','位置区域','闪定','卧室/床数','促销/优惠','更多筛选条件'];
  const onItemClick = (v) => {
    const arr = [...selectedOptions];
    if(arr.includes(v)){
      const index  = arr.findIndex((v1)=> v1 === v)
      arr.splice(index,1)
    } else {
      arr.push(v)
    } 
    setSelectedOption(arr)
  }
  const label = { inputProps: { 'aria-label': 'Size switch demo' } };
  return (
    <FiliterWrapper>
      <div className='options'>
        {options.map((v,i) => (<span key={v} className={classNames('option',{active:selectedOptions.includes(v)})} onClick={() => onItemClick(v,i)}>{v}</span>))}
      </div>
      <div className='map'>
      显示地图<Switch {...label} defaultChecked size="large" />
      </div>
    </FiliterWrapper>
  )
})

export default Filiter
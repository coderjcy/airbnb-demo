import React, { memo,useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeWrapper from './style'
import Banner from './c-cpns/banner'
import HouseAreaV1 from './c-cpns/house-area-v1'
import { getHomeDataAction } from '@/store/modules/home'

const Home = memo(() => {
  const dispatch  = useDispatch()
  useEffect(()=>{
    dispatch(getHomeDataAction()) 
  },[dispatch])
  const {premiumInfo} = useSelector((state)=>{
    return{
      premiumInfo:state.home.premiumInfo
    }
  },shallowEqual)
  console.log(premiumInfo.list?.[1])
  return (
    <HomeWrapper>
      <Banner />
      <div className='home-content'>
        <HouseAreaV1 premiumInfo={premiumInfo}></HouseAreaV1>
      </div>
    </HomeWrapper>
  )
})

export default Home
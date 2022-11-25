import React, { memo,useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHomeDataAction } from '@/store/modules/home'
import HomeWrapper from './style'
import Banner from './c-cpns/banner'
import HouseAreaV1 from './c-cpns/house-area-v1'
import HouseAreaV2 from './c-cpns/house-area-v2'
import HouseAreaV3 from './c-cpns/house-area-v3'
import LongFor from './c-cpns/long-for'


const Home = memo(() => {
  const dispatch  = useDispatch();
  useEffect(()=>{
    dispatch(getHomeDataAction());
  },[dispatch])
  const {premiumInfo,highScoreInfo,discountInfo,recommendInfo,longforInfo,plusInfo} = useSelector((state)=>{
    return{
      premiumInfo:state.home.premiumInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo:state.home.discountInfo,
      recommendInfo:state.home.recommendInfo,
      longforInfo:state.home.longforInfo,
      plusInfo:state.home.plusInfo
    }
  },shallowEqual)
  return (
    <HomeWrapper>
      <Banner />
      <div className='home-content'>
        <HouseAreaV2 info={discountInfo} itemWidth='33.333%' />
        <HouseAreaV2 info={recommendInfo} itemWidth='33.333%' />
        <HouseAreaV1 info={premiumInfo} />
        <HouseAreaV1 info={highScoreInfo} />
        { Object.keys(longforInfo || {}).length &&  <LongFor info={longforInfo} />}
        { Object.keys(plusInfo || {}).length && <HouseAreaV3 info={plusInfo} itemWidth='20%' />}
      </div>
    </HomeWrapper>
  )
})

export default Home
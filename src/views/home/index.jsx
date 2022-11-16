import React, { memo } from 'react'
import request from '@/services'
import { useEffect } from 'react'
const Home = memo(() => {
  useEffect(()=>{
    request.get({
      url:'/home/highscore'
    }).then(res=>{
      console.log(res)
    })
  },[])

  return (
    <div>Home</div>
  )
})

export default Home
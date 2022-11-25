
import React, { memo,useEffect,useRef, useState } from 'react'

import ScrollWrapper from './style'
import IconLeftArrow from '@/assets/svg/icon-left-arrow'
import IconRightArrow from '@/assets/svg/icon-right-arrow'



const ScrollView = memo((props) => {
  const scrollRef = useRef()
  const index = useRef(0)
  const [showLeft,setShowLeft] = useState(false)
  const [showRight,setShowRight] = useState(false)
  const [totalDistance,setTotalDistance] = useState(0)
  const [l ,setL] = useState(0)

  useEffect(()=>{
    const clientWidth = scrollRef.current.children[0].clientWidth
    const scrollWidth = scrollRef.current.children[0].scrollWidth
    setTotalDistance(scrollWidth-clientWidth)
    if(scrollWidth - clientWidth){
      setShowRight(true)
    }
  },[])

  const handleLeftClick = ()=>{
    const offsetLeft =  scrollRef.current.children[0].children[index.current-1].offsetLeft;
    !offsetLeft && setShowLeft(false)
    setL(offsetLeft)
    showRight || setShowRight(true)
    index.current = index.current -1;
  }
  const handleRightClick = ()=>{
    const offsetLeft =  scrollRef.current.children[0].children[index.current+1].offsetLeft;
    (offsetLeft >= totalDistance) && setShowRight(false)

    setL(offsetLeft)
    showLeft || setShowLeft(true)
    index.current = index.current +1;
  }
  return (
    <ScrollWrapper offsetLeft={l}>
      {showLeft && <i className='left-btn' onClick={handleLeftClick}><IconLeftArrow/></i>}
      <div className='slot' >
        <div className='wrap' ref={scrollRef}>
          {props.children}
        </div>
      </div>
      {showRight && <i className='right-btn' onClick={handleRightClick}><IconRightArrow/></i>}
    </ScrollWrapper>
  )
})


export default ScrollView
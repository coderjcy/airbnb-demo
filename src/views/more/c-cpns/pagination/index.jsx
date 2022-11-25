import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';

import PaginationWrapper from './style'
import { useDispatch } from 'react-redux';
import { getRoomListAction } from '@/store/modules/more';

const PaginationPage = memo((props) => {
  const {totalCount,currentPage} = props;
  const dispatch = useDispatch()
  const handlePageChange = (e,page)=>{
    dispatch(getRoomListAction(page-1))
  }
  return (
    <PaginationWrapper>
      <Pagination count={Math.ceil(totalCount/20)} color="primary" onChange={handlePageChange}/>
      <div className='hint'>第{currentPage * 20 + 1}~{(currentPage + 1) * 20}个房源，共超过{totalCount}个</div>
    </PaginationWrapper>
  )
})

export default PaginationPage
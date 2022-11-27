import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import MoreWrapper from "./style";
import Filiter from "./c-cpns/filiter";
import RoomsArea from "./c-cpns/rooms-area";
import Pagination from "./c-cpns/pagination";
import { getRoomListAction } from "@/store/modules/more";
import { changeIsFixed } from "@/store/modules/main";
const More = memo(() => {
  const dispatch = useDispatch();
  const { roomList, totalCount, currentPage, isLoading } = useSelector(
    (state) => ({
      roomList: state.more.roomList,
      totalCount: state.more.totalCount,
      currentPage: state.more.currentPage,
      isLoading: state.more.isLoading,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getRoomListAction());
    dispatch(changeIsFixed([true, false]));
  }, []);

  return (
    <MoreWrapper>
      <Filiter />
      {!!roomList.length && (
        <RoomsArea roomList={roomList} totalCount={totalCount} />
      )}
      <Pagination totalCount={totalCount} currentPage={currentPage} />
      {isLoading && <div className="cover"></div>}
    </MoreWrapper>
  );
});

export default More;

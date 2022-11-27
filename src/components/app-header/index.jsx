import React, { memo, useRef, useState } from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left";
import HeaderCenter from "./c-cpns/header-center";
import HeaderRight from "./c-cpns/header-right";
import { useSelector } from "react-redux";
import IconSearch from "@/assets/svg/icon-search";
import { useScrollPosition } from "@/hooks/useScrollPosition";
const AppHeader = memo(() => {
  const { isFixed, isTopAlpha } = useSelector((state) => ({
    isFixed: state.main.isFixed,
    isTopAlpha: state.main.isTopAlpha,
  }));
  const [isShowSearchArea, setIsShowSearchArea] = useState(false);
  const onCoverClick = () => {
    setIsShowSearchArea(false);
  };
  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);

  if (Math.abs(prevY.current - scrollY) > 30) {
    prevY.current = scrollY;
    isShowSearchArea && setIsShowSearchArea(false);
  }
  const isArrivedTop = useRef(true);
  if (scrollY === 0 && isTopAlpha) {
    isArrivedTop.current = true;
  } else {
    isArrivedTop.current = false;
  }
  console.log(isTopAlpha);
  return (
    <div>
      <HeaderWrapper
        isArrivedTop={isArrivedTop.current}
        isFixed={isFixed}
        isShowSearchArea={isShowSearchArea || isArrivedTop.current}
      >
        <div className="content">
          <HeaderLeft></HeaderLeft>
          <HeaderCenter
            isShowSearchArea={isShowSearchArea || isArrivedTop.current}
            setIsShowSearchArea={setIsShowSearchArea}
          ></HeaderCenter>
          <HeaderRight></HeaderRight>
        </div>
        <div className="search-area">
          <div className="opts">
            <div className="opt-i">
              <div className="title-1">城市</div>
              <input type="text" placeholder="你想去哪个城市" />
            </div>
            <div className="opt-i">
              <div className="title-1">入住退房日期</div>
              <input type="text" placeholder="请在日历中选择" />
            </div>
            <div className="opt-i">
              <div className="title-1">关键词</div>
              <input type="text" placeholder="景点/地址/房源名" />
            </div>
            <i className="search-icon">
              <IconSearch />
            </i>
          </div>
          <div className="cover" onClick={onCoverClick}></div>
        </div>
      </HeaderWrapper>
      {isFixed && !isArrivedTop.current && (
        <div
          style={{
            width: "100%",
            height: `${isShowSearchArea || isArrivedTop.current ? 80 : 80}px`,
          }}
        ></div>
      )}
    </div>
  );
});

export default AppHeader;

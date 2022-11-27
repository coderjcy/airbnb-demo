import IconSearch from "@/assets/svg/icon-search";
import React, { memo, useState } from "react";
import { CenterWrapper } from "./style";
import classNames from "classnames";
const HeaderCenter = memo((props) => {
  const { isShowSearchArea, setIsShowSearchArea } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTabClick = (i) => {
    setCurrentIndex(i);
  };
  return (
    <CenterWrapper>
      {!isShowSearchArea && (
        <div className="search-box" onClick={() => setIsShowSearchArea(true)}>
          <div className="text">搜索房源和体验</div>
          <i className="icon">
            <IconSearch />
          </i>
        </div>
      )}
      {isShowSearchArea && (
        <div className="tabs">
          <span
            className={classNames({ isActive: 0 == currentIndex })}
            onClick={() => handleTabClick(0)}
          >
            搜索房源
          </span>
          <span
            className={classNames({ isActive: 1 == currentIndex })}
            onClick={() => handleTabClick(1)}
          >
            搜索体检
          </span>
        </div>
      )}
    </CenterWrapper>
  );
});

export default HeaderCenter;

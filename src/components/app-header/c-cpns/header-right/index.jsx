import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import IconWorld from "@/assets/svg/icon-world";
import IconMenu from "@/assets/svg/icon-menu";
import IconAvatar from "@/assets/svg/icon-avatar";
const HeaderRight = memo(() => {
  const [isShowPanel, setIsShowPanel] = useState(false);
  useEffect(() => {
    const handleWindoClick = () => {
      setIsShowPanel(false);
    };
    window.addEventListener("click", handleWindoClick);

    return () => {
      window.removeEventListener("click", handleWindoClick);
    };
  }, []);

  const onProfileClick = (e) => {
    e.stopPropagation();
    setIsShowPanel(true);
  };
  const onRegisteClick = () => {};
  const onLoginClick = () => {};
  const onRentHouseClick = () => {};
  const onExperienceClick = () => {};
  const onHelpClick = () => {};
  return (
    <RightWrapper>
      <div className="btns">
        <span onClick={onLoginClick}>登录</span>
        <span onClick={onRegisteClick}>注册</span>
        <span>
          <IconWorld />
        </span>
      </div>
      <div className="profile">
        <div className="profile-c" onClick={onProfileClick}>
          <span className="menu">
            <IconMenu />
          </span>
          <span className="avatar">
            <IconAvatar />
            <i className="point"></i>
          </span>
        </div>
        {isShowPanel && (
          <div className="panel">
            <div className="top">
              <div className="item" onClick={onRegisteClick}>
                注册
              </div>
              <div className="item" onClick={onLoginClick}>
                登录
              </div>
            </div>
            <div className="bottom">
              <div className="item" onClick={onRentHouseClick}>
                出租房源
              </div>
              <div className="item" onClick={onExperienceClick}>
                开展体验
              </div>
              <div className="item" onClick={onHelpClick}>
                帮助
              </div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;

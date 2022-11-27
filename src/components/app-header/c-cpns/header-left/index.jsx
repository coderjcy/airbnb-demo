import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconLogo from "@/assets/svg/icon-logo";
import { useNavigate } from "react-router-dom";
const HeaderLeft = memo((props) => {
  const navigate = useNavigate();
  const onLogoClick = () => {
    navigate("/home");
  };
  return (
    <LeftWrapper>
      <div className="logo" onClick={onLogoClick}>
        <IconLogo></IconLogo>
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;

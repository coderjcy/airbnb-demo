import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import React, { memo, useRef, useState } from "react";
import classNames from "classnames";
import Rating from "@mui/material/Rating";
import { Carousel } from "antd";
import { useDispatch } from "react-redux";

import HouseItemWrapper from "./style";
import IconLeftArrow from "@/assets/svg/icon-left-arrow";
import IconRightArrow from "@/assets/svg/icon-right-arrow";
import Indicator from "@/base-ui/indicator";
import { changeDetailInfo } from "@/store/modules/detail";

const HouseItem = memo((props) => {
  const { houseInfo } = props;
  const sliderRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onItemClick = () => {
    if (!houseInfo.picture_urls) return;
    dispatch(changeDetailInfo(houseInfo));
    navigate("/detail");
  };
  const onToggleClick = (e, isNext) => {
    e.stopPropagation();
    const length = houseInfo.picture_urls.length;
    if (isNext) {
      sliderRef.current.next();
      if (currentIndex >= length - 1) {
        serCurrentIndex(0);
      } else {
        serCurrentIndex(currentIndex + 1);
      }
    } else {
      sliderRef.current.prev();
      if (currentIndex) {
        serCurrentIndex(currentIndex - 1);
      } else {
        serCurrentIndex(length - 1);
      }
    }
  };
  const [currentIndex, serCurrentIndex] = useState(0);

  return (
    <HouseItemWrapper
      verifyColor={houseInfo.verify_info.text_color || "#39576a"}
    >
      {!!houseInfo.picture_urls && (
        <div className="slider">
          <Carousel dots={false} ref={sliderRef}>
            {houseInfo.picture_urls.map((v) => (
              <div key={v} className="cover">
                <img className="img" alt="img" src={v} />
              </div>
            ))}
          </Carousel>
          <div className="control" onClick={(e) => onItemClick()}>
            <div className="left" onClick={(e) => onToggleClick(e, false)}>
              <IconLeftArrow size="16" />
            </div>
            <div className="right" onClick={(e) => onToggleClick(e, true)}>
              <IconRightArrow size="20" />
            </div>
          </div>
          <div className="inidcate-tool">
            <Indicator currentIndex={currentIndex}>
              {houseInfo.picture_urls?.map((v, i) => (
                <div className="dot" key={v}>
                  <span
                    className={classNames({
                      active: currentIndex === i,
                    })}
                  ></span>
                </div>
              ))}
            </Indicator>
          </div>
        </div>
      )}
      {!houseInfo.picture_urls && (
        <div className="cover" onClick={(e) => onItemClick()}>
          <img className="img" alt="img" src={houseInfo.picture_url} />
        </div>
      )}
      <div className="info">
        <div className="specification" onClick={(e) => onItemClick()}>
          {houseInfo.verify_info.messages.join("·")}
        </div>
        <div className="name" onClick={(e) => onItemClick()}>
          {houseInfo.name}
        </div>
        <div className="price">
          <span style={{ color: "#484848" }}>{houseInfo.price_format}</span>/晚
        </div>
        <div className="span">
          <Rating
            value={houseInfo.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ color: "#00848a", fontSize: "12px" }}
          ></Rating>
          <span style={{ marginLeft: "2px" }}>{houseInfo.reviews_count}</span>
          <span>
            {houseInfo.bottom_info && "·" + houseInfo.bottom_info.content}
          </span>
        </div>
      </div>
    </HouseItemWrapper>
  );
});

HouseItem.propTypes = {
  houseInfo: PropTypes.object,
};

export default HouseItem;

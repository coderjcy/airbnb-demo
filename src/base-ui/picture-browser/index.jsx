import PropTypes from "prop-types";
import React, { memo, useEffect, useState, useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import PictureBrowserWrapper from "./style";
import IconClose from "@/assets/svg/icon-cose";
import IconLeftArrow2 from "@/assets/svg/icon-left-arrow";
import Indicator from "../indicator";
import classNames from "classnames";

const PictureBrowser = memo((props) => {
  const { setIsShow, pics } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const isPrev = useRef(false);
  const onToggleClick = (isNext) => {
    if (isNext) {
      const index = currentIndex === pics.length - 1 ? 0 : currentIndex + 1;
      isPrev.current = false;
      setCurrentIndex(index);
    } else {
      isPrev.current = true;
      const index = currentIndex === 0 ? pics.length - 1 : currentIndex - 1;
      setCurrentIndex(index);
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const onImgClick = (i) => {
    if (i > currentIndex) {
      isPrev.current = false;
      setCurrentIndex(i);
    } else {
      isPrev.current = true;
      setCurrentIndex(i);
    }
  };
  return (
    <PictureBrowserWrapper isPrev={isPrev.current ? "-" : ""}>
      <div className="content">
        <div className="img">
          <SwitchTransition mode="out-in">
            <CSSTransition key={currentIndex} timeout={200} classNames="iimg">
              <img src={pics[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>

        <div className="info">
          <div>
            {currentIndex + 1}/{pics.length}:
          </div>
          <div onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? "显示" : "隐藏"}照片列表
          </div>
        </div>
        <div className={classNames("indicator", { hidden: isHidden })}>
          <Indicator currentIndex={currentIndex}>
            {pics.map((v, i) => (
              <div
                className={classNames("img-wraper", {
                  active: i === currentIndex,
                })}
                onClick={() => onImgClick(i)}
                key={v}
              >
                <img src={v} alt="" />
                <div className="cover"></div>
              </div>
            ))}
          </Indicator>
        </div>
      </div>
      <i className="close-btn" onClick={() => setIsShow(false)}>
        <IconClose></IconClose>
      </i>
      <i className="prev-btn" onClick={() => onToggleClick(false)}>
        <IconLeftArrow2 size="78" />
      </i>
      <i className="next-btn" onClick={() => onToggleClick(true)}>
        <IconLeftArrow2 size="78" />
      </i>
    </PictureBrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  setIsShow: PropTypes.func,
  pics: PropTypes.array,
};

export default PictureBrowser;

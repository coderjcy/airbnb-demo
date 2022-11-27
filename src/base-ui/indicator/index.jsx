import React, { memo, useRef } from "react";
import IndicatorWrapper from "./style";

const Indicator = memo((props) => {
  const currentIndex = props.currentIndex || 0;
  const elRef = useRef();
  const width = elRef.current?.offsetWidth;
  const totalDistance = elRef.current?.children[0].scrollWidth;
  let distance =
    (elRef.current?.children[0].children[1].offsetLeft ?? 0) * currentIndex;
  if (distance >= totalDistance - width * 0.5) {
    distance = totalDistance - width;
  } else if (distance <= width * 0.5) {
    distance = 0;
  } else {
    distance =
      (elRef.current?.children[0].children[1].offsetLeft ?? 0) *
      (currentIndex - 2);
  }

  return (
    <IndicatorWrapper ref={elRef} left={distance}>
      <div>{props.children}</div>
    </IndicatorWrapper>
  );
});

export default Indicator;

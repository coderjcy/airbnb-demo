import React, { memo } from "react";
import styleStrToObject from "./utils";
const IconRightArrow = memo((props) => {
  const size = props.size || 15;

  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={styleStrToObject(
        `display: block; fill: none; height: ${size}px; width:  ${size}px; stroke: currentcolor; stroke-width: 3; overflow: visible;`
      )}
    >
      <g fill="none">
        <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
      </g>
    </svg>
  );
});

export default IconRightArrow;

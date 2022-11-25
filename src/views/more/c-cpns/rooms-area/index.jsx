import React, { memo } from "react";
import RoomsWrapper from "./style";
import HouseItem from "@/components/house-item";
const RoomsArea = memo((props) => {
  const { roomList, totalCount } = props;
  return (
    <RoomsWrapper>
      {totalCount && <h2>共{totalCount}多处住所</h2>}
      <div className="roomList">
        {roomList.map((item) => (
          <div className="item" key={item._id}>
            <HouseItem houseInfo={item} />
          </div>
        ))}
      </div>
    </RoomsWrapper>
  );
});

export default RoomsArea;

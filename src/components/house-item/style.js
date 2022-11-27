import styled from "styled-components";

const HouseItemWrapper = styled.div`
  padding: 8px;
  padding-bottom: 12px;
  width: 100%;
  margin-left: -8px;

  .slider {
    position: relative;
    .control {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      cursor: pointer;
      display: flex;
      justify-content: space-between;

      .left {
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.4),
          rgba(100, 100, 100, 0.1)
        );
      }
      .right {
        background: linear-gradient(
          to left,
          rgba(0, 0, 0, 0.45),
          rgba(100, 100, 100, 0.05)
        );
      }
      .left,
      .right {
        display: none;
        width: 50px;
        height: 100%;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
      &:hover {
        .left,
        .right {
          display: flex;
        }
      }
    }
    .inidcate-tool {
      position: absolute;
      bottom: 6px;
      width: 30%;
      left: 0;
      right: 0;
      margin: 0 auto;
      overflow: hidden;
      font-size: 12px;
      padding: 5px;
      box-sizing: content-box;
      user-select: none;
      .dot {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;

        span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #fffc;
        }
        .active {
          transform: scale(1.4);
          background-color: #fff;
        }
      }
    }
  }
  .cover {
    width: 100%;
    padding-top: 66.66666%;
    position: relative;
    cursor: pointer;
    .img {
      position: absolute;
      top: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
  .info {
    padding-top: 8px;

    .specification {
      font-size: 12px;
      line-height: 20px;
      color: ${(props) => props.verifyColor};
      cursor: pointer;
    }

    .name {
      font-size: 16px;
      line-height: 22px;
      overflow: hidden;
      text-overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      cursor: pointer;
    }
    .price {
      height: 20px;

      color: ${(props) => props.theme.text.primaryColor};
    }

    .span {
      margin-top: 2px;
      display: flex;
      align-items: center;
      height: 22px;
      columns: ${(props) => props.theme.text.primaryColor};
      font-size: 12px;
      .MuiRating-icon {
        margin-right: -1.5px;
      }
    }
  }
`;

export default HouseItemWrapper;

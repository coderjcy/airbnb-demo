import styled from "styled-components";
export const HeaderWrapper = styled.div`
  position: ${(props) => (props.isFixed ? "fixed" : "relative")};
  top: 0;
  width: 100%;
  z-index: 9999;
  .content {
    display: flex;
    align-items: center;
    height: 80px;
    transition: all ease 200ms;
    background: ${(props) => (props.isArrivedTop ? "rgba(0,0,0,0)" : "#fff")};

    ${(props) =>
      props.isShowSearchArea ? "" : "box-shadow: 0px 0px 1px 1px #eee;"};
    padding: 0 24px;
    z-index: 10;
  }
  .search-area {
    width: 100%;
    height: ${(props) => (props.isShowSearchArea ? "86" : "0")}px;
    padding-bottom: ${(props) => (props.isShowSearchArea ? "20" : "0")}px;
    display: flex;
    justify-content: center;
    background-color: ${(props) => (props.isArrivedTop ? "" : "#fff")};
    transition: height 200ms ease;
    overflow: hidden;
    .opts {
      position: relative;
      width: 850px;
      margin: 0 auto;
      border-radius: 60px;
      border: 1px solid #ddd;
      display: flex;
      align-items: center;
      background-color: #fff;
      .opt-i {
        flex: 1;
        border-right: 1px solid #ddd;
        padding: 0 20px;
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        &:nth-child(3) {
          border-right: none;
        }
        .title-1 {
          font-size: 12px;
        }
        input {
          border-style: none;
          outline: none;
          width: 100%;
          font-size: 14px;
        }
      }
      .search-icon {
        position: absolute;
        right: 10px;
        cursor: pointer;
        top: 50%;
        transform: translateY(-50%);
        background-color: ${(props) => props.theme.color.primaryColor};
        font-size: 30px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          width: 16px !important;
          height: 16px !important;
        }
      }
    }

    .cover {
      display: ${(props) =>
        props.isShowSearchArea && !props.isArrivedTop ? "block" : "none"};
      position: fixed;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  ${(props) =>
    props.isArrivedTop
      ? ".btns{ span{color:#fff !important; &:hover{background:#fff3!important;}}} .profile{background:#fff !important;} .tabs{color:#fff!important} .logo{color:#fff!important}"
      : ""}
`;

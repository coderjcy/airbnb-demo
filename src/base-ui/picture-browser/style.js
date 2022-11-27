import styled from "styled-components";

const PictureBrowserWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: #333;
  color: #fff;
  .content {
    width: 50vw;
    margin: 0 auto;
    margin-top: 80px;

    .img {
      padding: 0 30px;
      width: 50vw;
      height: calc(40vw - 60px);
      display: flex;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        left: 0;
      }
    }
    .indicator {
      width: 100%;
      overflow: hidden;
      transition: transform 200ms ease;
      transform-origin: top center;
      transform: scale(1, 1);

      .img-wraper {
        width: 20%;
        height: 100px;
        padding-right: 20px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cover {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 20px;
          background-color: #000;
          opacity: 0.5;
        }
      }
      .active {
        .cover {
          opacity: 0;
        }
      }
    }
    .hidden {
      transform: scale(1, 0);
    }
    .info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }

  .close-btn {
    position: absolute;
    right: 0;
    top: 0;
    padding: 16px 28px;
    cursor: pointer;
  }
  .prev-btn,
  .next-btn {
    position: absolute;
    top: 50%;
    color: #fff;
    padding-left: 20px;
  }
  .prev-btn {
    transform: translateY(-50%);
    left: 0;
  }
  .next-btn {
    right: 0;
    transform: translateY(-50%) rotate(180deg);
  }

  .iimg-enter {
    transform: translateX(${(props) => props.isPrev}100%);
    opacity: 0;
  }
  .iimg-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition: all 200ms ease;
  }
  /* .iimg-exit {
    opacity: 1;
  }
  .iimg-exit-active {
    opacity: 0;
    transition: all 200ms ease;
  } */
`;

export default PictureBrowserWrapper;

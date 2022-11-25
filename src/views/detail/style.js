import styled from "styled-components";

const DetailWrapper = styled.div`
  .outer {
    position: relative;
    width: 100%;
    .pictures {
      display: flex;
      height: 300px;
      &:hover {
        .pic-cover {
          opacity: 0.2 !important;
        }
        .pic-wrapper:hover {
          .pic-cover {
            opacity: 0 !important;
          }
        }
      }
      .left-a {
        width: 50%;
        border: 1px solid #343434;
        overflow: hidden;
        position: relative;
      }
      .right-a {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        > div {
          width: 50%;
          height: 50%;
          border: 1px solid #343434;
          overflow: hidden;
          position: relative;
        }
      }
      .pic-wrapper {
        .img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 300ms ease;
        }
        .pic-cover {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100%;
          background-color: #000;
          opacity: 0;
        }
        &:hover {
          .img {
            transform: scale(1.1);
          }
        }
      }
    }
    .btn {
      position: absolute;
      right: 20px;
      bottom: 20px;
      padding: 6px 15px;
      background-color: #fff;
      border-radius: 3px;
      border: 1px solid #343434;
      font-size: 14px;
      z-index: 99;
      cursor: pointer;
      &:active {
      }
    }
  }
`;

export default DetailWrapper;

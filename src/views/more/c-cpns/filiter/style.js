import styled from "styled-components";

const FiliterWrapper = styled.div`
  position: fixed;
  top: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  height: 48px;
  border: 1px solid #ebebeb;
  font-weight: 400;
  z-index: 10;
  background-color: #fff;
  .options {
    display: flex;
    user-select: none;
    .option {
      color: ${(props) => props.theme.text.primaryColor};
      border: 1px solid #dce0e0;
      padding: 6px 12px;
      font-size: 14px;
      height: 34px;
      line-height: 20px;
      border-radius: 4px;
      margin-right: 12px;
      cursor: pointer;

      &:hover {
        background-color: #f2f2f2;
        border-color: #f2f2f2;
      }
    }
    .active {
      color: #fff;
      background-color: ${(props) => props.theme.color.secondaryColor};
      border-color: ${(props) => props.theme.color.secondaryColor};
      &:hover {
        background-color: #006c70;
        border-color: #006c70;
      }
    }
  }

  .map {
    margin-right: 24px;
  }
`;

export default FiliterWrapper;

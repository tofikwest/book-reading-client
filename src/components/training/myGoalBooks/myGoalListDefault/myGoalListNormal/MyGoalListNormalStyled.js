import styled from "styled-components";
import colors from "../../../../../styles/colors";
const { darkColors } = colors;

const MyGoalListNormalStyled = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  span,
  ol,
  ul,
  li,
  img {
    margin: 0;
    padding: 0;
    border: 0;
  }
  width: 100%;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  .goalListNorm_List {
    @media screen and (min-width: 768px) {
      margin-top: 26px;
      list-style: none;
      display: flex;
      border-top: 1px solid #e0e5eb;
      border-bottom: 1px solid #e0e5eb;
    }
    .goalListNorm_List__Item:nth-child(1) {
      margin-right: 234px;
      @media screen and (min-width: 1280px) {
        margin-right: 269px;
      }
    }
    .goalListNorm_List__Item:nth-child(2) {
      margin-right: 168px;
      @media screen and (min-width: 1280px) {
        margin-right: 185px;
      }
    }
    .goalListNorm_List__Item:nth-child(3) {
      margin-right: 47px;
      @media screen and (min-width: 1280px) {
        margin-right: 73px;
      }
    }
  }
  .goalListNorm_List__Item {
    color: ${darkColors.secondaryText};
    font-size: 14px;
    font-weight: 500;
    line-height: 2.7;
  }
  .goalListNorm_Svg {
    width: 22px;
    height: 17px;
    margin-right: 17px;
  }
  .goalListNorm_EmptyContainer {
    padding: 22px 0;
    border-bottom: 1px solid #e0e5eb;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (min-width: 768px) {
      overflow-y: scroll;
      scrollbar-width: none;
      scrollbar-color: #b1b5c2 #e7e4e4;

      ::-webkit-scrollbar {
        width: 5px;
      }

      ::-webkit-scrollbar-track {
        background: #e7e4e4;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #b1b5c2;
        border-radius: 0px;
        border: 3px none #ffffff;
      }
    }
    @media screen and (min-width: 1280px) {
      height: 1px;
      padding: 33px 0;
    }
  }
`;

export default MyGoalListNormalStyled;

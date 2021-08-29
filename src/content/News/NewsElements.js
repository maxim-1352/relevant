import styled from "styled-components";

export const NewsSection = styled.section`
  width: 100%;
  background-color: #fafafa;
  border-bottom: 1px solid #e6e6e6;
`;

export const NewsWrap = styled.div`
  width: 100%;
  h2 {
    font-family: PTSans, sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    text-align: center;
    font-size: 30px;
    margin: 50px 0 60px 0;
  }
  p {
    font-family: MuseoModerno;
    font-weight: 400;
    font-size: 14px;
    color: #757575;
    text-align: center;
    span {
      color: #3bbdfb;
    }
  }
`;

export const ItemsWrap = styled.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 70px;
  @media (max-width: 730px) {
    justify-content: center;
  }
`;

export const Item = styled.div`
  display: flex;
  max-width: 360px;
  height: auto;
  @media (max-width: 400px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  position: relative;
  height: auto;
  img {
    width: 170px;
    height: 120px;
    @media (max-width: 400px) {
      width: 100%;
      height: auto;
    }
  }
`;

export const Date = styled.div`
  position: absolute;
  background-color: #56c4f7;
  color: #fff;
  opacity: 0.9;
  font-size: 12px;
  font-family: MuseoModerno, sans-serif;
  padding: 5px 10px;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  left: 50%;
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    // position: absolute;
    display: block;
    content: "";
    // content: url("../../img/calendar.svg");
    background-image: url("../../img/calendar.svg");
    height: 28px;
    width: 28px;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  h3 {
    font-size: 16px;
    margin: 5px 0;
  }
  p {
    text-align: left;
    font-size: 14px;
  }
  span {
    color: #2cb9fc;
  }
`;

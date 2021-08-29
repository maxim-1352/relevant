import styled from "styled-components";

export const CheckWrap = styled.div`
  background-color: #fafafa;
  width: 100%;
  display: block;
  padding-bottom: 60px;

  border-bottom: 1px solid #e9e9ea;
`;

export const Check = styled.section`
  font-family: PTSans, sans-serif;
  color: #000;
  width: 100%;
  display: block;
  h2 {
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
    padding-top: 50px;
    font-weight: normal;
  }
  p {
    font-size: 14px;
    color: #c1c1c1;
    text-align: center;
    padding-top: 70px;
    span {
      color: #3bbdfb;
    }
  }
`;

export const ItemsWrap = styled.div`
  width: 100%;
  margin: 40px 0 50px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 570px) {
    justify-content: center;
  }
`;

export const Item = styled.a`
  width: 270px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  font-family: MuseoModerno;
  text-decoration: none;
  img {
    width: 100%;
  }
  h3 {
    padding-left: 10px;
    font-size: 15px;
    color: #000;
  }
  p {
    font-size: 14px;
    color: #000;
    padding-top: 35px;
    text-align: left;
    padding-left: 10px;
  }
`;

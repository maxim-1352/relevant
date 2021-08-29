import styled from "styled-components";

export const CheckWrap = styled.div`
  background-color: #f7f8fa;
  width: 100%;
  display: block;
  padding-bottom: 60px;

  border-bottom: 1px solid #e9e9ea;
`;

export const Check = styled.section`
  font-family: PTSans, sans-serif;
  color: #000;
  background-color: #f7f8fa;
  width: 100%;
  display: block;
`;

export const H2 = styled.h2`
  font-size: clamp(20px, 2.5vw, 24px);
  padding-top: 30px;
  text-align: center;
`;

export const P = styled.p`
  font-size: clamp(14px, 2.5vw, 14px);
  font-family: MuseoModerno, sans-serif;
  text-align: center;
  color: #a5a6a7;
`;

export const CheckItemsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 125px;
  @media (max-width: 500px) {
    justify-content: center;
  }

  h3 {
    font-size: 15px;
    margin-top: 50px;
  }
  p {
    font-size: 14px;
    text-align: center;
  }
  a {
    display: block;
    background-color: #3bbdfb;
    padding: 5px;
    text-decoration: none;
    color: #fff;
    font-size: 15px;
  }
`;
export const CheckItem = styled.div`
  width: 240px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  padding: 20px;
  margin-bottom: 40px;
  border: 1px solid #e9e9ea;
`;

export const CheckItemCicle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #3bbdfb;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  img {
    width: 30px;
    height: auto;
  }
`;

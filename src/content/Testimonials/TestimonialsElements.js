import styled from "styled-components";

export const TestimonialsSection = styled.section`
  background-color: #f7f8fa;
  border-bottom: 1px solid #e6e6e6;
`;

export const TestimonialsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #f7f8fa;
  font-family: PTSans, sans-serif;
  color: #000;
  margin-bottom: 50px;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Testimon = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
  }
  h2 {
    padding: 50px 0 70px 0;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: normal;
  }
  p {
    font-family: MuseoModerno;
    font-weight: 400;
    font-size: 14px;
    color: #757575;
    margin: 0 0 20px 25px;
  }
  h3 {
    margin: -10px 0 0 25px;
    font-size: 14px;
  }
`;
export const FAQ = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
  }
  h2 {
    padding: 50px 0 70px 0;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: normal;
  }
  .accordion {
    border: none;
  }
  .accordion__button {
    background-color: #fff;
    margin-bottom: 5px;
    padding: 10px;
    font-size: 14px;
  }
  .accordion__item + .accordion__item {
    border-top: none;
  }
`;

export const Item = styled.div`
  max-width: 80%;
  display: flex;
  margin-bottom: 20px;
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
`;

export const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

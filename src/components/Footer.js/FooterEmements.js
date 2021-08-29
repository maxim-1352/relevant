import styled from "styled-components";

export const FooterSection = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: #38bcfb;
`;

export const FooterWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  p {
    color: #fff;
    font-size: 14px;
    span {
      font-size: 28px;
    }
  }
  button,
  input {
    overflow: visible;
    padding: 15px 0 15px 15px;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 15px;
    color: #fff;
    outline: none;
    &::placeholder {
        color: #fff;
  }
`;

export const Social = styled.div`
  display: flex;
  width: 250px;
  display: flex;
  justify-content: space-between;
  img {
    width: 20px;
  }
`;

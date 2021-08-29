import styled from "styled-components";
import banner from "../../img/bg1.png";

export const HeaderEl = styled.header`
  width: 100%;
  display: flex;
  background-color: #fff;
  height: 200px;
  a {
    text-align: center;
    margin: 60px auto 50px;
    display: inline-block;
    .logo {
      width: 390px;
      height: 80px;
      display: inline-block;
      @media (max-width: 600px) {
        width: 80%;
      }
      
  }
`;

export const NavWrap = styled.div`
  background-color: #fff;
  width: 100%;
  border-top: 3px #d9d9d9 solid;
  border-bottom: 3px #d9d9d9 solid;
  .end {
    justify-content: flex-end;
  }
  .btn {
    background-color: #3bbdfb;
    border: none;
    padding: 5px;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #8fcce8;
    }
  }
  }
 
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 25px;
  gap: 30px;
  align-items: center;

  a {
    font-family: "PTSans Regular", sans-serif;
    font-size: 16px;
    color: #000;
    text-decoration: none;
  }
  @media screen and (max-width: 520px) {
    flex-direction: column;
  }
`;

export const Banner = styled.section`
  background: url(${banner});
  width: 100%;
  height: 418px;
`;

export const H1 = styled.h1`
  font-size: clamp(30px, 10vw, 65px);
  font-family: PTSans;
  font-weight: bold;
  color: #000;
  padding-top: clamp(30px, 10vw, 90px);
  margin-bottom: 0;
  text-transform: uppercase;
`;

export const P = styled.p`
  font-family: MuseoModerno, sans-serif;
  font-size: 16px;
  color: #000;
`;

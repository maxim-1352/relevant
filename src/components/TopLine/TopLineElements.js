import styled from "styled-components";

export const WrapTopLine = styled.div`
  display: flex;
  flex-wrap: wrap;

  font-size: 14px;
  font-family: MuseoSans, sans-serif;
  background-color: #3bbdfb;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 12px 0;
  list-style: none;
  a {
    color: #fff;
    text-decoration: none;
    padding-right: 15px;
    display: flex;
  }
  img {
    padding-right: 5px;
    width: 20px;
  }
  @media (max-width: 510px) {
    flex-direction: column;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px 0;
  }
`;

export const UlMenu = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 12px 0;
  list-style: none;
  a {
    color: #fff;
    text-decoration: none;
    padding-right: 15px;
    display: flex;
    position: relative;
    &:after {
      position: absolute;
      display: block;
      content: "";
      width: 1px;
      height: 30px;
      bottom: -8px;
      right: 7px;
      background-color: #fff;
    }
    &:last-child:after {
      //
    }
  }
`;

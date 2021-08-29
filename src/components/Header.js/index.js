import React, { useState } from "react";
import TopLine from "../TopLine";
import { OuterWrap, InnerWrap } from "../../Wraps";
import { Banner, H1, HeaderEl, NavLinks, NavWrap, P } from "./HeaderElements";
import logo from "../../img/main-logo.png";

function Header() {
  const [open, setOpen] = useState(true);

  

  const handleButtonClick = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  };

  return (
    <>
      <TopLine />
      <OuterWrap>
        <InnerWrap>
          <HeaderEl>
            <a href="/">
              <img src={logo} className="logo" alt="logo" />
            </a>
          </HeaderEl>
        </InnerWrap>
      </OuterWrap>
      <OuterWrap>
        <NavWrap>
          <InnerWrap className="end">
          <button type='button' className="btn" onClick={handleButtonClick}>☰ Menu</button>
            {!open &&
              <NavLinks>
               
                <a href="/">Home</a>
                <a href="/">Apparel</a>
                <a href="/">Fation</a>
                <a href="/">Portfolio</a>
                <a href="/">Contact</a>
                
              </NavLinks>}
              
          </InnerWrap>
        </NavWrap>
      </OuterWrap>
      <OuterWrap>
        <Banner>
          <InnerWrap>
            <H1>Relevant is a responsive theme</H1>
            <P>
              Lorem ipsum dolor sit amet, <br /> consecte adipiscing <br />
              elit. Fusce at
            </P>
          </InnerWrap>
        </Banner>
      </OuterWrap>
    </>
  );
}

export default Header;

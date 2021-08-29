import React from "react";
import { OuterWrap, InnerWrap } from "../../Wraps";
import { FooterSection, FooterWrap, Social } from "./FooterEmements";

function Footer({ data }) {
  return (
    <OuterWrap>
      <FooterSection>
        <InnerWrap>
          <FooterWrap>
            <p>
              <span>Get to know us better now!</span>
              <br />
              Share your Products over the Social Networks
            </p>
            <Social>
              {data.map((d, i) => (
                <a href="/" key={i}>
                  <img src={d.img} alt={d.alt} />
                </a>
              ))}
            </Social>
            <p>
              <span>Search! </span> <br /> across our website
            </p>
            <input type="search" placeholder="Search..." />
          </FooterWrap>
        </InnerWrap>
      </FooterSection>
    </OuterWrap>
  );
}

export default Footer;

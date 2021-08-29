import React from "react";
import { Ul, UlMenu, WrapTopLine } from "./TopLineElements";
import phone from "../../img/phone.svg";
import email from "../../img/email.svg";
import clock from "../../img/clock.svg";
import { InnerWrap } from "../../Wraps";

function TopLine() {
  return (
    <WrapTopLine>
      <InnerWrap>
        <Ul>
          <li>
            <a href="/">
              <img src={phone} alt="phone" />
              +000 000 000
            </a>
          </li>
          <li>
            <a href="/">
              <img src={email} alt="phone" />
              info@example.com
            </a>
          </li>
          <li>
            <a href="/">
              <img src={clock} alt="phone" />
              Monday - Friday, 8.00 - 20.00
            </a>
          </li>
        </Ul>
        <UlMenu>
          <li>
            <a href="/">Latest News</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Register</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
        </UlMenu>
      </InnerWrap>
    </WrapTopLine>
  );
}
export default TopLine;

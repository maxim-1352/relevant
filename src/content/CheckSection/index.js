import React from "react";
import { OuterWrap, InnerWrap } from "../../Wraps";
import {
  Check,
  CheckItem,
  CheckItemsWrap,
  H2,
  P,
  CheckItemCicle,
  CheckWrap,
} from "./CheckSectionElements";

function CheckSection({ data }) {
  return (
    <div>
      <OuterWrap>
        <CheckWrap>
          <InnerWrap>
            <Check>
              <H2>
                Check our latest Wordpress Theme which implements a Page Bulder
                and a Resolution Slider
              </H2>
              <P>
                Learn how to build Wordpress Themes with ease with a premium
                Page Builder which allows you to add new Pages in seconds
              </P>
              <CheckItemsWrap>
                {data.map((d, i) => (
                  <CheckItem key={i}>
                    <CheckItemCicle>
                      <img src={d.img} alt={d.alt} />
                    </CheckItemCicle>
                    <h3>{d.name}</h3>
                    <p>{d.desc}</p>
                    <a href="/">{d.button}</a>
                  </CheckItem>
                ))}
              </CheckItemsWrap>
            </Check>
          </InnerWrap>
        </CheckWrap>
      </OuterWrap>
    </div>
  );
}

export default CheckSection;

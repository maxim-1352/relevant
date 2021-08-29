import React from "react";
import { OuterWrap, InnerWrap } from "../../Wraps";
import { CheckWrap, Check, ItemsWrap, Item } from "./RecentElements";

function RecentPortfolio({ data }) {
  return (
    <OuterWrap>
      <CheckWrap>
        <InnerWrap>
          <Check>
            <h2>Recent Portfolio</h2>
            <p>
              Lorem ipsum dolor sit amet, coctetuer adipiscing elit, sed di
              <span>&nbsp; nonummy</span> nibh euismod te.
            </p>

            <ItemsWrap>
              {data.map((d, i) => (
                <Item href="/" key={i}>
                  <img src={d.img} alt={d.alt} />

                  <h3>{d.name}</h3>
                  <p>{d.desc}</p>
                </Item>
              ))}
            </ItemsWrap>
          </Check>
        </InnerWrap>
      </CheckWrap>
    </OuterWrap>
  );
}

export default RecentPortfolio;

import React from "react";
import { OuterWrap, InnerWrap } from "../../Wraps";
import {
  ItemsWrap,
  NewsSection,
  NewsWrap,
  Item,
  ImgWrap,
  Date,
  InfoWrap,
} from "./NewsElements";

function News({ data }) {
  return (
    <OuterWrap>
      <NewsSection>
        <InnerWrap>
          <NewsWrap>
            <h2>Our last news</h2>
            <p>
              Lorem ipsum dolor sit amet, coctetuer adipiscing elit, sed di{" "}
              <span>&nbsp; nonummy</span> nibh euismod te.
            </p>
            <ItemsWrap>
              {data.map((d, i) => (
                <Item key={i}>
                  <ImgWrap>
                    <img src={d.img} alt={d.alt} />
                    <Date>{d.date}</Date>
                  </ImgWrap>
                  <InfoWrap>
                    <h3>{d.name}</h3>
                    <span>{d.tags}</span>
                    <p>{d.desc}</p>
                  </InfoWrap>
                </Item>
              ))}
            </ItemsWrap>
          </NewsWrap>
        </InnerWrap>
      </NewsSection>
    </OuterWrap>
  );
}

export default News;

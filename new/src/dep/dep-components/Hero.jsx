import React from "react";
import content from "../content.json";
import {
  Page,
  Hero,
  Greet,
  HeroH1,
  HeroSub,
  Section,
  Number,
  BigWordWrap,
  BigWord,
  Lead,
  TwoCol,
  List,
  Figure,
} from "./SinglePageUI";

export default function Home() {
  return (
    <Page>
      {/* HERO */}
      <Hero id="top">
        <Greet>नमस्ते</Greet>
        <HeroH1>{content.name}</HeroH1>
        <HeroSub>
          {content.role}. {content.tagline}
        </HeroSub>
      </Hero>

      {/* PILLARS */}
      {content.pillars.map((p) => (
        <Section key={p.k} id={p.title.toLowerCase()}>
          <Number>{p.k}</Number>

          <BigWordWrap>
            <BigWord>{p.title}</BigWord>
          </BigWordWrap>

          <Lead>{p.blurb}</Lead>

          <TwoCol>
            <List>
              {(p.pointsLeft || []).map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </List>
            <List>
              {(p.pointsRight || []).map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </List>
          </TwoCol>

          {p.image && <Figure style={{ backgroundImage: `url(${p.image})` }} />}
        </Section>
      ))}

      {/* Footer CTA */}
      <Section style={{ paddingTop: 40 }}>
        <a href={content.email}>Get in touch →</a>
      </Section>
    </Page>
  );
}

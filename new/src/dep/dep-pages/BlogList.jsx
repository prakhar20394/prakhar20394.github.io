import React from "react";
import styled from "styled-components";
import posts from "../blog.json";
import PillarDivider from "../dep-components/PillarDivider";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  max-width: 820px;
`;
const H1 = styled.h1`
  font-size: 36px;
  margin-bottom: 12px;
`;
const Item = styled(Link)`
  display: block;
  padding: 14px 0;
  border-bottom: 1px solid #232323;
  text-decoration: none;
  color: #faf7f2;
  &:hover {
    color: #ad4f2b;
  }
`;
const Meta = styled.div`
  font-size: 12px;
  opacity: 0.65;
  margin-bottom: 4px;
`;
const Title = styled.h3`
  font-size: 20px;
  margin: 0 0 6px;
`;
const Excerpt = styled.p`
  opacity: 0.85;
  margin: 0;
`;

export default function BlogList() {
  return (
    <Wrap>
      <H1>Writing</H1>
      <PillarDivider />
      {(posts || []).map((p) => (
        <Item key={p.slug} to={`/blog/${p.slug}`}>
          <Meta>{new Date(p.dateISO).toLocaleDateString("en-IN")}</Meta>
          <Title>{p.title}</Title>
          <Excerpt>{p.excerpt}</Excerpt>
        </Item>
      ))}
    </Wrap>
  );
}

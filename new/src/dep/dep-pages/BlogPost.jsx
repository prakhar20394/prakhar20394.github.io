import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import posts from "../blog.json";
import PillarDivider from "../dep-components/PillarDivider";
import ProgressBar from "../dep-components/ProgressBar";

const Wrap = styled.div`
  max-width: 720px;
`;
const H1 = styled.h1`
  font-size: 36px;
  margin-bottom: 8px;
`;
const Meta = styled.div`
  font-size: 12px;
  opacity: 0.65;
  margin-bottom: 12px;
`;
const P = styled.p`
  font-size: 18px;
  line-height: 1.7;
  opacity: 0.95;
`;
const Back = styled(Link)`
  display: inline-block;
  margin-top: 24px;
  color: #ad4f2b;
`;

export default function BlogPost() {
  const { slug } = useParams();
  const post = (posts || []).find((p) => p.slug === slug);

  if (!post) {
    return (
      <Wrap>
        <H1>Not Found</H1>
        <P>The requested article does not exist.</P>
        <Back to="/blog">← Back to Writing</Back>
      </Wrap>
    );
  }

  return (
    <>
      <ProgressBar />
      <Wrap>
        <H1>{post.title}</H1>
        <Meta>
          {new Date(post.dateISO).toLocaleDateString("en-IN")}
          {post.tags?.length ? ` • ${post.tags.join(" • ")}` : ""}
        </Meta>

        <PillarDivider />

        {(post.content || []).map((t, i) => (
          <P key={i}>{t}</P>
        ))}

        <Back to="/blog">← Back to Writing</Back>
      </Wrap>
    </>
  );
}

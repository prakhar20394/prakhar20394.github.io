import React from "react";
import styled from "styled-components";
import IndusNav from "./IndusNav";

const Shell = styled.div`
  display: flex;
`;

const Content = styled.main`
  padding: 64px 80px;
`;

export default function Layout({ children }) {
  return (
    <>
      <IndusNav />
      <Shell>
        <Content>{children}</Content>
      </Shell>
    </>
  );
}

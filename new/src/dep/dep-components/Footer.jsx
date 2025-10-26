import React from "react";
import { FooterBar } from "../components/ui";

export default function Footer({ name, note }) {
  return (
    <FooterBar>
      © {new Date().getFullYear()} {name}. {note}
    </FooterBar>
  );
}

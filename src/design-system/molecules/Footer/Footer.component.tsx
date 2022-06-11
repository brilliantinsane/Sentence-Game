import React from "react";
import { IFooterProps } from "../../organisms/MainTemplate/MainTemplate.component";
import { useFooterButtons } from "./sharedHooks";
import "./Footer.css";

const Footer: React.FC<IFooterProps> = (footerProps) => {
  const FooterButtons = useFooterButtons(footerProps);
  return <footer className="footer">{FooterButtons}</footer>;
};

export default Footer;

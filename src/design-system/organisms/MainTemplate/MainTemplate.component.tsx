import React from "react";
import Footer from "../../molecules/Footer";
import Header from "../../molecules/Header";
import "./MainTemplate.css";

export interface IFooterProps {
  handleChangeStep?: () => void;
  resultsPage?: boolean;
}

interface IMainTemplate {
  children?: React.ReactNode;
  header?: boolean;
  footer?: boolean;
  className?: string;
  footerProps?: IFooterProps;
}

const MainTemplate: React.FC<IMainTemplate> = ({
  header,
  footer,
  children,
  className,
  footerProps,
}) => {
  const mainContentClass = `main-content${className ? ` ${className}` : ""}`;
  return (
    <div className="main-template">
      {header && <Header />}
      <main className={mainContentClass}>{children}</main>
      {footer && <Footer {...footerProps} />}
    </div>
  );
};

export default MainTemplate;

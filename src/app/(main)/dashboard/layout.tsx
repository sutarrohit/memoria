import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  param: any;
}

const Layout: React.FC<LayoutProps> = ({ children, param }) => {
  return <div>layout</div>;
};

export default Layout;

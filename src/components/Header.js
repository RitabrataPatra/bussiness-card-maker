import React from "react";

const Header = ({ children , Dark }) => {
  return (
    <header className={"Header" + (Dark ? " Dark" : "")}>
      <h1>{children}</h1>
    </header>
  );
};

export default Header;

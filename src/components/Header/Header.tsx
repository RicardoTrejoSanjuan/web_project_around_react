import type { JSX } from "react";
import logo from "@/assets/images/logo.svg";

const Header = (): JSX.Element => {
  return (
    <header className="header page__section">
      <img src={logo} alt="Around The U.S." className="logo header__logo" />
    </header>
  );
};

export default Header;

import type { JSX } from "react/jsx-runtime";

const Footer = (): JSX.Element => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="footer page__section">
      <p className="footer__copyright">©{currentYear} Around The U.S.</p>
    </footer>
  );
};

export default Footer;

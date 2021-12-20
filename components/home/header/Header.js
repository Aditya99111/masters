import React from "react";
import headerstyles from "../../../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={headerstyles.header}>
      <Link href="/">
        <a className={headerstyles.logo}>Guild Masters Den </a>
      </Link>

      <nav className={headerstyles.navbar}>
        <a href="#home" className={headerstyles.active}>
          home
        </a>
        <Link href="/#services">
          <a>Services</a>
        </Link>
        <Link href="/#about">
          <a>About</a>
        </Link>
        <Link href="/#contact">
          <a>Contact</a>
        </Link>
        <Link href="/stories">
          <a>Stories</a>
        </Link>
      </nav>

      <div className={headerstyles.icons}>
        <Link href="/support">
          <button className={headerstyles.btn}>Support us!</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

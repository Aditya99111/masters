import React from "react";
import headerstyles from "../../../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className={headerstyles.header}>
      <Link href="/">
        <a className={headerstyles.logo}>Guild Masters Den </a>
      </Link>

      <nav className={headerstyles.navbar}>
        <Link href="/">
          <a className={router.asPath == "/" ? headerstyles.active : ""}>
            home
          </a>
        </Link>

        <Link href="/#services">
          <a
            className={router.asPath == "/#services" ? headerstyles.active : ""}
          >
            Services
          </a>
        </Link>
        <Link href="/#about">
          <a className={router.asPath == "/#about" ? headerstyles.active : ""}>
            About
          </a>
        </Link>
        <Link href="/#contact">
          <a
            className={router.asPath == "/#contact" ? headerstyles.active : ""}
          >
            Contact
          </a>
        </Link>
        <Link href="/stories">
          <a className={router.asPath == "/stories" ? headerstyles.active : ""}>
            Stories
          </a>
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
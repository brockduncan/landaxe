import Head from "next/head";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <header className="bg-white p-4 absolute top-0 left-0 z-30 w-full">
      <div className="2xl:container mx-auto flex flex-wrap justify-between items-center">
        <a href="/">
          <img src="/logo.svg" width="90" alt="Landaxe" loading="lazy" />
        </a>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setToggleNav(!toggleNav)}
          className="w-5 xl:hidden"
        >
          <FontAwesomeIcon icon="bars" size="xs" />
        </button>
        </div>
        <nav
          className={(toggleNav ? "flex collapse navbar-collapse" : "hidden")}
          id="navbarNav"
        >
          <ul className="navbar-nav navbar-nav--right">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/request-offer">
                Request an Offer <span className="sr-only">(current)</span>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li> */}
          </ul>
        </nav>
    </header>
  );
}

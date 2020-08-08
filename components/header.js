import Head from "next/head";
import React, { useState } from "react";

export default function Header() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <header>
      <nav className="navbar navbar-light bg-light navbar-expand-md">
        <a className="navbar-brand" href="/">
          <img src="/logo.svg" width="90" alt="Landaxe" loading="lazy" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setToggleNav(!toggleNav)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={toggleNav ? "show collapse navbar-collapse" : "hide"}
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
        </div>
      </nav>
      <style jsx>{`
        header {
          position: absolute;
          width: 100%;
          height: 48px;
          top: 0;
          left: 0;
          z-index: 10;
          box-shadow: rgba(0, 0, 0, 0.15) 0 2px 14px 0;
        }
        .navbar-brand {
          line-height: 1;
        }
        .show {
          display: block;
        }
        .hide {
          display: none;
        }
      `}</style>
    </header>
  );
}

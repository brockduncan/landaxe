import Head from "next/head";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-light bg-light navbar-expand-md">
        <a className="navbar-brand" href="/">
          <img src="/logo.svg" width="90" alt="Landaxe" loading="lazy" />
        </a>
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav navbar-nav--right">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
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
          z-index: 2;
          box-shadow: rgba(0, 0, 0, 0.15) 0 2px 14px 0;
        }
        .navbar-brand {
          line-height: 1;
        }
      `}</style>
    </header>
  );
}

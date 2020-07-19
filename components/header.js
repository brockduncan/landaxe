import Head from "next/head";

export default function Header() {
  return (
    <header>
      <Head>
        <title>Landaxe</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src="/logo.svg" width="90" alt="Landaxe" loading="lazy" />
        </a>
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

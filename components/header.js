import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>Landaxe</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src="/logo.svg" width="120" alt="" loading="lazy" />
        </a>
      </nav>
    </>
  );
}

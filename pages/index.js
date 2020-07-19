import Head from "next/head";

import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="wrapper">
      <Head>
        <title>Landaxe</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <section className="container hero">
          <h1 className="title logo">
            <img src="/logo.svg" alt="Landaxe" width="260" />
          </h1>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="card">
                <h2>Do you want to sell your land?</h2>
                <a href="/request-offer" className="btn btn-primary">
                  Request an Offer
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="card">
                <h2>Are you looking to purchase land?</h2>
                <button className="btn btn-primary" disabled>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .wrapper {
          background: url("hannah-reding-RBvgyA270ic-unsplash-1920x1440.jpg")
            no-repeat center / cover;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-flow: column nowrap;
        }
        .hero {
          text-align: center;
        }
        .logo {
          margin: 4rem 0;
          padding: 0.75rem;
          position: relative;
        }
        .logo:after {
          content: "";
          display: block;
          width: 300px;
          height: 100%;
          border-radius: 25%;
          background: radial-gradient(
            rgba(255, 255, 255, 0.7),
            transparent 70%
          );
          position: absolute;
          z-index: 1;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .logo img {
          position: relative;
          z-index: 2;
          max-width: 100%;
        }
        .card {
          background: rgba(255, 255, 255, 0.85);
          padding: 2.2rem;
          max-width: 420px;
        }
        .hero .card {
          margin: 1rem auto;
          display: flex;
          align-items: center;
        }
        .hero .card h2 {
          margin-bottom: 2rem;
        }
        main {
          flex: 1;
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

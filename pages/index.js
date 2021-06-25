import Head from "next/head";
import Footer from "../components/Footer";
import McFormBuyers from "../components/MailChimpFormBuyers";

export default function Home() {
  return (
    <div className="wrapper">
      <Head>
        <title>Landaxe</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <section className="hero container mx-auto">
          <h1 className="title logo">
            <img src="/logo.svg" alt="Landaxe" width="240" className="mx-auto" />
          </h1>
          <div className="flex flex-col lg:flex-row items-center lg:justify-around lg:items-stretch">
            <div className="m-8 w-full lg:w-1/2 bg-white bg-opacity-74 px-16 py-8 max-w-md flex flex-col items-center rounded shadow-lg">
              <h2 className="mb-4 text-secondary text-3xl font-display font-bold">I want to sell vacant land property</h2>
              {/* <h2>Do you want to sell vacant land?</h2> */}
              <p className="mb-8 text-lg">
                Request a land purchase offer from Landaxe for your real
                estate property
              </p>
              <a href="/request-offer" className="btn btn-primary">
                Request an Offer
              </a>
            </div>
            <div className="m-8 w-full lg:w-1/2 bg-white bg-opacity-74 px-16 py-8 max-w-md flex flex-col items-center rounded shadow-lg">
              <h2 className="mb-4 text-secondary text-3xl font-display font-bold">Are you looking to purchase land?</h2>
              <p className="mb-8 flex-grow text-lg"> 
                Join the Landaxe Buyers email list to receive select vacant
                land listings
              </p>
              <McFormBuyers />
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
           {
            /* height: 100vh; */
          }
          display: flex;
          flex-flow: column nowrap;
        }
        .hero {
          text-align: center;
        }
        .logo {
          padding: 0.75rem;
          position: relative;
          margin: 2rem 0;
        }
        @media screen and (min-width: 768px) {
          .logo {
            margin: 4rem 0;
          }
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

        }
        .hero .card {
          margin: 1rem auto;
          display: flex;
          align-items: center;
        }
        .hero .card h2 {
          margin-bottom: 1rem;
        }
        main {
          flex: 1;
          display: flex;
          align-items: center;
          min-height: 100vh;
          padding-bottom: 4rem;
        }
      `}</style>
    </div>
  );
}

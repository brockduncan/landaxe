import { Children } from "react";

export default function Hero(props) {
  return (
    <section className="hero">
      <h1>{props.title}</h1>
      <p>{props.children}</p>

      <style jsx>{`
        .hero {
           {
            /* background: url("/hannah-reding-RBvgyA270ic-unsplash-1920x1440.jpg")
            no-repeat center / cover; */
          }
          background: #483c46;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: 160px;
          margin-bottom: 4rem;
          position: relative;
        }
        .hero:after {
          content: "";
          display: none;
          width: 100%;
          height: 120px;
          background: linear-gradient(transparent, #fff);
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 1;
        }
        h1 {
          position: relative;
          z-index: 2;
          margin: 0;
          text-align: center;
          color: #fff;
        }
      `}</style>
    </section>
  );
}

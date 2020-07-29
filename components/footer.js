export default function Footer() {
  const d = new Date();
  return (
    <footer>
      <small>{`Copyright © ${d.getFullYear()}`} Landaxe, LLC</small>
      <style jsx>{`
        footer {
          background: #fff;
          padding: 3rem 4vw;
          justify-self: flex-end;
          margin-top: auto;
          text-align: center;
        }
      `}</style>
    </footer>
  );
}

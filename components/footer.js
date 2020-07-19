export default function Footer() {
  const d = new Date();
  return (
    <>
      <footer>
        <small>{`Copyright © ${d.getFullYear()}`} Landaxe, LLC</small>
      </footer>
      <style jsx>{`
        footer {
          background: #fff;
          padding: 2.2rem 6vw;
        }
      `}</style>
    </>
  );
}

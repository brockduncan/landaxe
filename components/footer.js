export default function Footer() {
  const d = new Date();
  return (
    <footer>
      <small>{`Copyright © ${d.getFullYear()}`} Landaxe, LLC</small>
      <style jsx>{`
        footer {
          background: #fff;
          padding: 1.6rem 4vw;
        }
      `}</style>
    </footer>
  );
}

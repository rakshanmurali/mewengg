export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="hazard-seam dark" />
      <div className="wrap site-footer__row">
        <span className="brand__mark brand__mark--footer">MEW</span>
        <p>
          © {new Date().getFullYear()} Maheswari Engineering Works. All rights
          reserved.
        </p>
        <p>·    ✈︎ Designed By Rakshan.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div>
          <p>© {new Date().getFullYear()} Student Report Card</p>
          <small>
            Built with React + Tailwind
          </small>
        </div>

        <div className="row-actions">
          <span>STATUS</span>
          <span className="badge">
            ONLINE
          </span>
        </div>
      </div>

      <div className="footer-divider"></div>
    </footer>
  );
}

export default Footer;

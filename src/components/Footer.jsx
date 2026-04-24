export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <span className="footer-logo gradient-text">AI DigitalGen</span>
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#learn">Curriculum</a>
            <a href="#testimonials">Reviews</a>
            <a href="#register">Register</a>
          </div>
          <p className="footer-text">
            © {year} AI DigitalGen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

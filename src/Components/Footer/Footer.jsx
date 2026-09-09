import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Foodie</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            ?
          </p>
        </div>
        <div className="footer-section">
          <h3 className="li">Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About </li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email : info@foodie.com</p>
          <p>Phone : +91 1234567890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Foodie. All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;

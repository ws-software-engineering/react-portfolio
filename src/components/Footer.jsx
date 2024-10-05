export default function Footer() {
  return (
    <div className="container-fluid footer-style">
      <footer className="py-1 my-1">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="https://github.com/DataForHealthCare/diagrams" target="_blank" className="nav-link px-4 text-body-secondary">
              <img src="/assets/github-mark-white.png"></img>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/williamschultz01/" target="_blank" className="nav-link px-4 text-body-secondary">
              <img src="/assets/linkedin-logo.png"></img>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" target="_blank"className="nav-link px-4 text-body-secondary">
              <img src="/assets/instagram-logo.png"></img>
            </a>
          </li>
        </ul>
        <p className="text-center">© 2024 Schultz Designs, Inc</p>
      </footer>
    </div>
  );
}

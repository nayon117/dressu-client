import { FaFacebook, FaHashtag, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="section-container mt-12">
      <footer className="footer items-center p-4  text-neutral-content">
        <aside className="items-center grid-flow-col">
          <FaHashtag className="text-2xl" />
          <p>Copyright © 2023 - All right reserved</p>
        </aside>

        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link>
            <FaFacebook className="text-2xl" />
          </Link>
          <Link>
            <FaYoutube className="text-2xl" />
          </Link>
          <Link>
            <FaTwitter className="text-2xl" />
          </Link>
        </nav>
      </footer>
    </div>
  );
};
export default Footer;

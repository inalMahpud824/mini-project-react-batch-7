import { faFacebookF, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer bg-secondary border-t text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <img src="./logo.png" width={50} alt="" />
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/inal-mahpud-80828228b/"}
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-700" />
          </Link>
          <Link>
            <FontAwesomeIcon
              to={"https://www.instagram.com/inalmah76/"}
              target="_blank"
              icon={faInstagram}
              className="text-pink-500"
            />
          </Link>
          <Link target="_blank" to={"https://github.com/inalMahpud824/"}>
            <FontAwesomeIcon icon={faGithub} className="text-gray-900" />
          </Link>
        </nav>
      </footer>
    </>
  );
}
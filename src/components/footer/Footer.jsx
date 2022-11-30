import { FooterContainer, Line, Social } from "./Footer.styled";
import { BsGithub } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        Made with&nbsp;
        <svg
          stroke="currentColor"
          fill="#e25454"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          className="footer_heart__SGb3w"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>
        </svg>
        &nbsp;By&nbsp;
        <a
          href="https://github.com/sinansarikaya"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sinan Sarıkaya
        </a>
      </div>
      <Line />
      <Social>
        <a
          href="https://github.com/sinansarikaya/react-movie-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/sinan.sarykaya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/sinansarykaya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </Social>
    </FooterContainer>
  );
};

export default Footer;

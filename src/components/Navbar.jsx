import { Link } from "react-router-dom";

export default function Navbar() {
  const pathname = window.location.pathname;

  return (
    <nav className="w-full h-[12vh] z-10 sticky text-white flex flex-row items-center justify-between px-5">
      <Link to="/">
        <h1 className="text-3xl">Lorem Ipsum</h1>
      </Link>
      <ul className="flex flex-row ">
        <Link to="/about">
          {" "}
          <li
            className={`${
              pathname === "/about" ? "text-cyan" : ""
            } mx-3 text-xl`}
          >
            About
          </li>
        </Link>
        <Link to="/transcript">
          <li
            className={`${
              pathname === "/transcript" ? "text-cyan" : ""
            } mx-3 text-xl`}
          >
            Get Transcript
          </li>
        </Link>
        <Link to="/video">
          <li
            className={`${
              pathname === "/video" ? "text-cyan" : ""
            } mx-3 text-xl`}
          >
            Get Video
          </li>
        </Link>
        <Link to="/audio">
          <li
            className={`${
              pathname === "/audio" ? "text-cyan" : ""
            } mx-3 text-xl`}
          >
            Get Audio
          </li>
        </Link>
        <Link to="/combined">
          <li
            className={`${
              pathname === "/combined" ? "text-cyan" : ""
            } mx-3 text-xl`}
          >
            Get Both Combined
          </li>
        </Link>
      </ul>
    </nav>
  );
}

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
        <Link to="/video">
          <li
            className={`${
              pathname === "/video" ? "text-cyan" : ""
            } mx-3 text-xl`}
          >
            Video
          </li>
        </Link>
      </ul>
    </nav>
  );
}

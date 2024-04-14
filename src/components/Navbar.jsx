import { Link } from "react-router-dom";
import loading from "../../public/loading.gif";

export default function Navbar() {
  const pathname = window.location.pathname;

  return (
    <nav className="w-full h-[12vh] z-10 sticky text-white flex flex-row items-center justify-between px-5">
      <Link to="/">
        <div className="flex flex-row items-center">
          <img src ={loading} alt="logo" className="w-10 h-12" />
          <h1 className="text-3xl ml-4">Script</h1>
          <h1 className="text-[#30e0b8] text-3xl">Sync</h1>
        </div>
      </Link>
      <ul className="flex flex-row ">
        <Link to="/about">
          {" "}
          <li
            className={`${pathname === "/about" ? "text-cyan" : ""
              } mx-3 text-xl`}
          >
            About
          </li>
        </Link>
        <Link to="/video">
          <li
            className={`${pathname === "/video" ? "text-cyan" : ""
              } mx-3 text-xl`}
          >
            Get Video
          </li>
        </Link>
        <Link to="/audio">
          <li
            className={`${pathname === "/audio" ? "text-cyan" : ""
              } mx-3 text-xl`}
          >
            Get Audio
          </li>
        </Link>
        <Link to="/combined">
          <li
            className={`${pathname === "/combined" ? "text-cyan" : ""
              } mx-3 text-xl`}
          >
            Get Both Combined
          </li>
        </Link>
      </ul>
    </nav>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

export default function Landing() {
  return (
    <>
      <main className="h-screen w-screen bg-[url(/landing-bg.png)] bg-cover ">
        <Navbar />
        <section className="flex flex-row w-full h-[88vh] ">
          <div className="w-1/2 text-white flex flex-col items-center justify-center">
            <h1 className="text-white font-bold text-[12vh]">Welcome</h1>
            <h2 className="text-[4vh]">
              Extract text from any video and translate it
            </h2>
            <Link to="/video">
              <button
                style={{
                  background: "linear-gradient(to right, #003B41, #3597AE)",
                  boxShadow: "inset 0 0 4px #fff",
                }}
                className="my-10 text-2xl px-10 py-2 rounded-xl"
              >
                Try Lorem Ipsum
              </button>
            </Link>
          </div>
          <div className="w-1/2 p-32 overflow-visible">
            <img
              src="/graphic.svg"
              alt="graphic"
              className="w-full h-full"
            />
          </div>
        </section>
      </main>
    </>
  );
}

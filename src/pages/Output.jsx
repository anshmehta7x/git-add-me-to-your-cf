import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Output() {
  const [link, setLink] = useState("");
  useEffect(() => {
    setLink(localStorage.getItem("shareableLink"));
  }, []);

  return (
    <main className="h-screen w-screen bg-[url(/landing-bg.png)] bg-cover ">
      <Navbar />
      <section className="flex flex-row w-full h-[88vh] ">
        <section className="w-1/2 h-full flex items-center justify-center">
          <img
            src="/output-graphic.svg"
            alt="Output"
            className="w-full h-full"
          ></img>
        </section>
        <section className="w-1/2 h-full">
          <div className="flex flex-col h-full items-center justify-center">
            <h1 className="text-white text-4xl font-bold mb-10">
              Your Output is Ready!
            </h1>
            <a
              className="bg-cyan text-white text-3xl p-2 rounded-full px-8 py-2"
              href={link}
              target="_blank"
            >
              Download Here
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

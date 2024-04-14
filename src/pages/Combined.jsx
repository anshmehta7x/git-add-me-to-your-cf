import Navbar from "../components/Navbar";
import Stepcard from "../components/Stepcard";
import React, { useRef } from "react";
import Steps from "../components/Steps";
import Upload from "../components/Upload";

export default function Combined() {
  return (
    <>
      <main className="h-screen w-screen bg-[url(/landing-bg.png)] bg-cover ">
        <Navbar />
        <section className="flex flex-row w-full h-[88vh] ">
          <Steps/>
          <Upload query="translateav" type="Both" modes={true}/>
        </section>
      </main>
    </>
  );
}

import Navbar from "../components/Navbar";
import Stepcard from "../components/Stepcard";
import React, { useRef } from "react";

const steps = [
  {
    title: "Step 1",
    description:
      "Select files from the computer or enter the Youtube video link",
  },
  {
    title: "Step 2",
    description: "Select the source language and the desired output language ",
  },
  {
    title: "Step 3",
    description: "Let the video process, you can view & download your video",
  },
];

const supportedSources = [
  {
    language: "English",
    code: "EN-GB",
  },
  {
    language: "French",
    code: "FR",
  },
  {
    language: "Spanish",
    code: "ES",
  },
  {
    language: "German",
    code: "DE",
  },
];
const supportedDestinations = [
  {
    language: "English",
    code: "EN-GB",
  },
  {
    language: "French",
    code: "FR",
  },
  {
    language: "Spanish",
    code: "ES",
  },
  {
    language: "German",
    code: "DE",
  },
  {
    language: "Hindi",
    code: "HI",
  },
  {
    language: "Gujarati",
    code: "GU",
  },
  {
    language: "Mararthi",
    code: "MR",
  },
  {
    language: "Tamil",
    code: "TA",
  },
];

export default function Video() {
  const fileInputRef = useRef(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    onFileSelect(file);
  };

  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <main className="h-screen w-screen bg-[url(/landing-bg.png)] bg-cover ">
        <Navbar />
        <section className="flex flex-row w-full h-[88vh] ">
          <div className="h-full w-[40vw] flex flex-col items-center justify-center">
            {steps.map((step, index) => (
              <Stepcard
                key={index}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
          <div className="w-[60vw] p-10">
            <form className="rounded-lg backdrop-blur-md text-white bg-white bg-opacity-10 p-5 h-full flex flex-col items-center pt-8">
              <input
                type="text"
                placeholder="Enter Youtube video link"
                className="w-[80%] p-2 mb-5 bg-transparent border-b-2 border-white text-white"
              />
              <h1 className="text-2xl mb-5">Or</h1>
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileInputChange}
                />
                <button
                  onClick={openFilePicker}
                  className="flex flex-row items-center mb-5 rounded-2xl bg-white bg-opacity-15 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  <span>Choose Files from your computer</span>
                  <img
                    className="ml-4 size-8 pt-2"
                    src="/upload-icon.png"
                  ></img>
                </button>
              </div>
              <div className="w-[80%] mb-5 ">
                <h1 className="text-2xl font-bold">Choose the languages</h1>
              </div>
              <div className="flex flex-row w-[80%] justify-evenly items-center">
                <select
                  className=" p-2 mb-5 bg-transparent border-b-2 border-white text-white"
                  name="source"
                  id="source"
                >
                  {supportedSources.map((source, idx) => (
                    <option key={idx} value={source.code} className="bg-cyan">
                      {source.language}
                    </option>
                  ))}
                </select>
                <h1 className="text-2xl">To</h1>
                <select
                  className=" p-2 mb-5 bg-transparent border-b-2 border-white text-white"
                  name="destination"
                  id="destination"
                >
                  {supportedDestinations.map((destination, idx) => (
                    <option
                      key={idx}
                      value={destination.code}
                      className="bg-cyan"
                    >
                      {destination.language}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

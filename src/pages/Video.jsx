import Navbar from "../components/Navbar";
import Stepcard from "../components/Stepcard";

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

export default function Video() {
  return (
    <>
      <main className="h-screen w-screen bg-[url(/landing-bg.png)] bg-cover ">
        <Navbar />
        <section className="flex flex-row w-full h-[88vh] ">
          <div className="h-full w-[40vw]  flex items-center justify-center">
            <img src="/graphic.svg"></img>
          </div>
          <div className="w-[60vw] p-10">
            <div className="rounded-lg backdrop-blur-md text-white bg-white bg-opacity-10 p-5 h-full flex flex-col items-center pt-8">
              <h1 className="text-2xl font-bold mb-8">
                How to extract text from the video
              </h1>
              <div className="flex flex-row justify-evenly">
                {steps.map((step, index) => (
                  <Stepcard
                    key={index}
                    title={step.title}
                    description={step.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

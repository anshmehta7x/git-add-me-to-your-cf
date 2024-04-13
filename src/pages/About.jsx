import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <main className="h-screen w-screen bg-[url(/landing-bg.png)] bg-cover ">
        <Navbar />
        <section className="flex flex-col items-center w-full h-[88vh] p-10">
              <h1 className="text-white text-6xl mb-10">About</h1>
              <p className="text-white w-[60vw] text-2xl bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-3xl" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.25)' }}>
              We introduce an innovative system harnessing computer vision, NLP, and machine translation to detect and translate text within video frames. This technology analyzes each frame, identifies text regions, and translates them into the learner's chosen language. The translated text is overlaid onto the original video, maintaining visual context and integrity. This approach allows learners to fully engage with complex content like diagrams and equations, eliminating the need for distracting subtitles or dubbing.
              </p>
        </section>
      </main>
    </>
  );
}

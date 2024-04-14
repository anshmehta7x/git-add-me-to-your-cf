import Navbar from "../components/Navbar";
import Stepcard from "../components/Stepcard";
import Steps from "../components/Steps";
import Upload from "../components/Upload";

export default function Video() {

  return (
    <>
      <main className="h-screen w-screen bg-[url(/landing-bg.png)] bg-cover ">
        <Navbar />
        <section className="flex flex-row w-full h-[88vh] ">
          <Steps/>
          <Upload query="translatevideo" type="Video" modes={true}/>
        </section>
      </main>
    </>
  );
}

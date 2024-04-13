import Stepcard from "./Stepcard";

export default function Steps(){
    const stepsArray = [
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


      return           <div className="h-full w-[40vw] flex flex-col items-center justify-center">
      {stepsArray.map((step, index) => (
        <Stepcard
          key={index}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
}
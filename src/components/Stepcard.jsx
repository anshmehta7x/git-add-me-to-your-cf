/* eslint-disable react/prop-types */
export default function Stepcard(props) {
  return (
    <div className="backdrop-blur-md text-white bg-white bg-opacity-10 p-5 my-4 rounded-xl h-[20vh] w-[20vw]">
      <h1 className="text-center text-2xl font-bold my-2">{props.title}</h1>
      <p className="text-center">{props.description}</p>
    </div>
  );
}

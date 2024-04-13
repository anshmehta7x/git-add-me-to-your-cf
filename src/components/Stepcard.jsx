/* eslint-disable react/prop-types */
export default function Stepcard(props) {
  return (
    <div className="backdrop-blur-md text-white bg-white bg-opacity-10 p-5 mx-4 rounded-xl ">
      <h1 className="text-center text-3xl font-bold my-2">{props.title}</h1>
      <p className="text-center">{props.description}</p>
    </div>
  );
}

import loading from "../../public/loading.gif";

export default function Loading() {
  return (
    <>
      <div
        className={` flex flex-col items-center h-full w-full justify-center`}
      >
        <img src={loading} alt="loading" width={200} height={200} />
        <p className="font-bold text-3xl text-nowrap text-white mt-12">
          Video Processing...
        </p>
      </div>
    </>
  );
}

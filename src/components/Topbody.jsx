/* eslint-disable react/prop-types */
import Button from "./Button";

export default function Topbody({resultRef }) {
  function handleClick() {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="relative flex justify-between top-44 w-full ">
      <div className="text-white w-1/3 relative top-20 h-72 left-28 px-3">
        <h2 className="font-bold text-3xl text-wrap first-letter:capitalize py-2">
          comfortably shop from anywhere in the world
        </h2>

        <p className="my-2 tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        </p>
        <div className="btn-container flex text-sm mt-5">
          <Button types="btn bg-white text-gray-blue" onClick={handleClick}>
            get started
          </Button>
          <Button types="btn bg-white bg-opacity-30 ml-3 ">
            become a partner
          </Button>
        </div>
      </div>
      <div className="map-image w-1/2">
        <img src="/asset/Map.svg" alt="map" className="h-3/4 w-full" />
      </div>
    </div>
  );
}

import Button from "./Button";
import StoreNavs from "./StoreNavs";

export default function StoreContainer() {
  return (
    <section className="py-10 my-14">
      <div className="w-5/6 mx-auto">
        <div className="store-headings ">
          <h1 className="text-center font-bold text-black text-4xl py-5 my-7">
            shop quality, shop affordable
          </h1>
          <StoreNavs />
        </div>
        <div className="store-container py-3 my-10">
          <div className="flex justify-between text-sm my-7 font-semibold items-center">
            <Button types="bg-slate-200 text-lg">
              6 of 88 <span>&lt;</span>
              <span>&gt;</span>
            </Button>
            <h5 className="text-gray-blue cursor-pointer">see all &rarr;</h5>
          </div>
          <div className="storeCard-container grid grid-cols-3 gap-10 ">
            <div className="store-card relative">
              <img
                src="/asset/Image container.svg"
                alt="image"
                className=""
              />
              
            </div>
            <div className="store-card relative">
              <img
                src="/asset/Image container (1).svg"
                alt="image"
                className=""
              />
              
            </div>
            <div className="store-card relative">
              <img
                src="/asset/Image container (2).svg"
                alt="image"
                className=""
              />
              
            </div>
            <div className="store-card relative">
              <img
                src="/asset/Image container (3).svg"
                alt="image"
                className=""
              />
              
            </div>
            <div className="store-card relative">
              <img
                src="/asset/Image container (4).svg"
                alt="image"
                className=""
              />
              
            </div>
            <div className="store-card relative">
              <img
                src="/asset/Image container (5).svg"
                alt="image"
                className=""
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

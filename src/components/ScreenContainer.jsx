import Button from "./Button";

export default function ScreenContainer() {
  return (
    <div className="mt-20 mb-16 p-20 grid grid-cols-2 gap-12 items-center">
      <div className="card col-span-1  w-5/6 h-3/4 px-3 leading-7">
        <div className="bg-light-blue rounded-3xl w-1/3 text-xs text-center py-2 first-letter:capitalize font-semibold my-3">
          used by 345k+ people
        </div>
        <h2 className="text-3xl text-wrap font-semibold first-letter:capitalize mb-3">
          shop affordable products from the confort of your home
        </h2>
        <p className="tracking-wider leading-7 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          impedit ducimus obcaecati, molestiae perspiciatis assumenda repellat
          temporibus ipsum velit molestias neque sint perferendis eum voluptatem
          commodi repudiandae sapiente quibusdam blanditiis!
        </p>
        <Button types="font-bold bg-gray-blue text-light-blue my-5">
          Download app
        </Button>
      </div>
      <div className="screen-card bg-light-blue p-7 rounded-3xl col-span-1">
        <img src="/asset/Screens.svg" alt="screens" />
      </div>
    </div>
  );
}

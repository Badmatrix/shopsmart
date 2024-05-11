import Button from "./Button";

export default function SetupContainer() {
  return (
    <div className="my-20 py-5 box-content">
      <section className="setup-container grid grid-cols-2 gap-10 items-center mx-auto w-5/6 py-2">
        <div className="image-card">
          <img src="/asset/Details.svg" alt="details" />
        </div>
        <div className="card w-5/6 mx-auto px-2 leading-8 h-64">
          <h2 className="first-letter:capitalize font-semibold text-lg py-2">
            easily setup your brand&apos;s e-shop
          </h2>
          <p className="text-xs tracking-wider">
            Ready to take your brand? online our platform makes it easy to your
            store and connect with wide audience. setting you up for success
            from day one.
          </p>
          <div>
            <label className="">
              get instant access to thousands of customer
              <input type="checkbox" defaultChecked />
            </label>
            <label>
              automate payment and track income
              <input type="checkbox" defaultChecked />
            </label>
            <label>
              access marketing tools guaranteed to drive conversion
              <input type="checkbox" defaultChecked />
            </label>
          </div>
          <Button types="bg-gray-blue text-light-blue first-letter:capitalize font-semibold text-sm my-3 ">
            get started
          </Button>
        </div>
      </section>
    </div>
  );
}

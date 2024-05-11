export default function ChooseUs() {
  return (
    <section className="choose-us py-20 text-gray-700">
      <div>
        <h1 className="text-3xl font-semibold text-center py-7 text-black">
          why choose us?
        </h1>
        <div className="shop-container grid grid-cols-2 w-5/6 mx-auto gap-12 my-8">
          <div className="card ">
            <div className="text-card ">
              <h6>Easy checkout</h6>
              <h3>seamless and fast payment process</h3>
              <p>
                Access a range of secure payment options to aid your shopping or
                business needs with ShopSmart&apos;s trusted payment processing
                solutions.
              </p>
            </div>
            <div className="image-card my-3">
              <img src="/asset/Payment.svg" alt="payment" />
            </div>
          </div>
          <div className="card ">
            <div className="text-card">
              <h6>24/7 stabilty</h6>
              <h3>responsive customer support</h3>
              <p>
                Whether you have questions about products, orders, or returns,
                we&apos;re just a click away, ready to provide prompt and
                friendly assistance.
              </p>
            </div>
            <div className="image-card">
              <img src="/asset/Payment (1).svg" alt="payment" />
            </div>
          </div>
          <div className="card ">
            <div className="text-card">
              <h6>stay in control</h6>
              <h3>convinient delivery options</h3>
              <p>
                enjoy fast and reliable shipping service that ensure your
                purchases arrive safely and on time
              </p>
            </div>
            <div className="image-card">
              <img src="/asset/Payment (2).svg" alt="payment" />
            </div>
          </div>
          <div className="card ">
            <div className="text-card">
              <h6>secured data</h6>
              <h3>data safety and confidentiality</h3>
              <p>
                we utilize advanced encryption technolgies service to ensure
                your data is secured from unauthorized access.
              </p>
            </div>
            <div className="image-card">
              <img src="/asset/Security.svg" alt="payment" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

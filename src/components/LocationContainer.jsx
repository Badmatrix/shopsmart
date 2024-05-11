import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const location = {
  africa: ["nigeria", "ethopia", "south africa", "tanzania", "kenya", "rwanda",'morocco'],
  europe: ["united kingdom", "poland", "germany"],
  asia: ["china", "turkey", "vietnam", "thailand"],
  southAmerica: ["brazil", "argentina", "peru", "ecuador"],
  northAmerica: ["unites state", "canada"],
};

export default function LocationContainer() {
  return (
    <section className="py-14 my-12">
      <div className="w-5/6 mx-auto">
        <header>
          <div className="text-center my-8 mb-14">
            <h2 className="text-black first-letter:capitalize font-bold text-4xl text-center my-5">
              our locations
            </h2>
            <h6 className="text-xl text text-neutral-700 ">
              ShopSmart is a shopping home to brands and customers in 5
              continents and 20 countries of the world.
            </h6>
          </div>
        </header>
        <div className="location grid grid-cols-5 gap-8">
          <div className="locationCard-container col-span-2  bg-slate-200 px-4 rounded-3xl grid grid-cols-2 gap-5">
            <div className="cards-1 col-span-1">
              <div className="card">
                <p>
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  in africa
                </p>
                <ul>
                  {location.africa.map((country) => (
                    <li key={country}>
                      <FontAwesomeIcon icon={faCartShopping} />
                      <span>{country}</span>
                    </li>
                  ))}
                </ul>
                <h6>see all &rarr;</h6>
              </div>
              <div className="card">
                <p>
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  in asia
                </p>
                <ul>
                  {location.asia.map((country) => (
                    <li key={country}>
                      <FontAwesomeIcon icon={faCartShopping} />
                      <span>{country}</span>
                    </li>
                  ))}
                </ul>
                <h6>see all &rarr;</h6>
              </div>
            </div>

            <div className="card-2 col-span-1">
              <div className="card ">
                <p>
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  in europe
                </p>
                <ul>
                  {location.europe.map((country) => (
                    <li key={country}>
                      <FontAwesomeIcon icon={faCartShopping} />
                      <span>{country}</span>
                    </li>
                  ))}
                </ul>
                <h6>see all &rarr;</h6>
              </div>
              <div className="card">
                <p>
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  in south america
                </p>
                <ul>
                  {location.southAmerica.map((country) => (
                    <li key={country}>
                      <FontAwesomeIcon icon={faCartShopping} />
                      <span>{country}</span>
                    </li>
                  ))}
                </ul>
                <h6>see all &rarr;</h6>
              </div>
              <div className="card">
                <p>
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  in north america
                </p>
                <ul>
                  {location.northAmerica.map((country) => (
                    <li key={country}>
                      <FontAwesomeIcon icon={faCartShopping} />
                      <span>{country}</span>
                    </li>
                  ))}
                </ul>
                <h6>see all &rarr;</h6>
              </div>
            </div>
          </div>
          <div className="map-card border-2 rounded-3xl  col-span-3">
            <img
              src="/asset/Card.svg "
              alt="map"
              className="border-white border-[14px] h-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

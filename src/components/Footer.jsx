import Button from "./Button";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="bg-gray-blue mt-7 py-10 footer text-white">
      <div className="grid grid-cols-3 gap-20 w-5/6 mx-auto mb-7">
        <div className="col-span-1 w-5/6">
          <Logo />
          <Button types="capitalize font-semibold bg-white text-gray-blue my-5">
            download our app
          </Button>
        </div>
        <div className="footer-links col-span-2">
          <ul className="flex justify-around ">
            <li>
              <h5>products</h5>
              <ul>
                <li>features</li>
                <li>pricing</li>
                <li>integration</li>
              </ul>
            </li>
            <li>
              <h5>support</h5>
              <ul>
                <li>help center</li>
                <li>chat</li>
                <li>report bug</li>
              </ul>
            </li>
            <li>
              <h5>contact</h5>
              <ul>
                <li>get in touch</li>
                <li>leave review</li>
                <li>our location</li>
              </ul>
            </li>
            <li>
              <h5>legal</h5>
              <ul>
                <li>privacy policy</li>
                <li>cookie policy</li>
                <li>code of conduct</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="socials flex justify-between w-5/6 mx-auto mt-5 items-center">
        <ul className="flex justify-between ">
          <li><img src="/asset/Logo/Brand logos.svg" alt="logo" /></li>
          <li><img src="/asset/Logo/Brand logos (1).svg" alt="logo" /></li>
          <li><img src="/asset/Logo/Brand logos (2).svg" alt="logo" /></li>
          <li><img src="/asset/Logo/Brand logos (3).svg" alt="logo" /></li>
          <li><img src="/asset/Logo/Brand logos (4).svg" alt="logo" /></li>
          
        </ul>
        <h6 className="capitalize text-sm text-gray-300">
          &copy; 2024. all right reserved
        </h6>
      </div>
    </div>
  );
}

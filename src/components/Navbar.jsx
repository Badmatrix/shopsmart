import Button from "./Button";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <div className="navbar flex justify-between w-3/5 mx-auto py-3 px-5 items-center align-middle text-white border rounded-full bg-gray-50 bg-opacity-5 absolute left-0 right-0 top-5 h-16">
      <Logo />
      <NavLinks />
      <Button types="bg-gray-50 text-gray-700 font-semibold">
        Download App
      </Button>
    </div>
  );
}

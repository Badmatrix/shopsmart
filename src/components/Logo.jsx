import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function Logo() {
  return (
    <h1 className="text-2xl font-bold cursor-pointer">
      <FontAwesomeIcon icon={faCartShopping} /> Shopsmart
    </h1>
  );
}

import ChooseUs from "./ChooseUs";
import LocationContainer from "./LocationContainer";
import ScreenContainer from "./ScreenContainer";
import SetupContainer from "./SetupContainer";
import StoreContainer from "./StoreContainer";
import { forwardRef } from "react";

// export default  function Container() {
//   return (
//     <div>
//       <ScreenContainer />
//       <SetupContainer />
//       <ChooseUs />
//       <StoreContainer />
//       <LocationContainer />
//     </div>
//   );
// }
// eslint-disable-next-line react/display-name
const Container = forwardRef((props,ref) => {
  return (
    <div ref={ref}>
      <ScreenContainer />
      <SetupContainer />
      <ChooseUs />
      <StoreContainer />
      <LocationContainer />
    </div>
  );
});
export default Container

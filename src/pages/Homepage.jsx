import { useRef } from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SocialProof from "../components/SocialProof";
import Topbody from "../components/Topbody";

export default function Homepage() {
  const resultRef = useRef(null);
  return (
    <div className="">
      <div className="bg-gray-blue rounded-2xl border-8  h-screen relative border-blue-50">
        <Navbar />
        <Topbody resultRef={resultRef} />
        <SocialProof />
      </div>
      <Container ref={resultRef} />
      <Footer />
    </div>
  );
}

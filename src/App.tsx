import Banner from "./components/Banner";
import Brands from "./components/Brands";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import CaseStudy from "./sections/CaseStudy";
import Expericence from "./sections/Expericence";

export default function App() {
  return (
    <div className="mb-[200px]">
      <Navbar />
      <Banner />
      <Brands />
      <CaseStudy />
      <Container>
        <AboutMe />
        <Expericence />
      </Container>
    </div>
  );
}

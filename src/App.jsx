import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Work from "./Pages/Work";
import Blog from "./Pages/Blog";
import LetsTalk from "./Pages/LetsTalk";
import Career from "./Pages/Career";
import Consulting from "./Pages/Consulting";
import Casestudy from "./Pages/Casestudy";
import Bloginside from "./Pages/Bloginside";
import Userexper from "./Pages/Userexper";
import ProductDeve from "./Pages/ProductDeve";
import Aanimate from "./Pages/Animate";
import AnimatedCursor from "react-animated-cursor";
import ProducHire from "./Pages/ProducHire";
import Try from "./Pages/Try";
import Zoom from "./Pages/Zoom";
import Test from "./Pages/Test";

function App() {
  return (
    <>
      <AnimatedCursor classname="bg-white text-white" />

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Zoom />} /> */}
          {/* <Route path="/" element={<Test />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Try />} /> */}
          {/* <Route exact path="/" element={<Aanimate />} /> */}
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="/Services" exact element={<Services />} />
          <Route path="/work" exact element={<Work />} />
          <Route path="/Blog" exact element={<Blog />} />
          <Route path="/career" exact element={<Career />} />
          <Route path="/letstalk" exact element={<LetsTalk />} />
          <Route exact path="/consulting" element={<Consulting />} />
          <Route exact path="/casestudy" element={<Casestudy />} />
          <Route exact path="/bloginside" element={<Bloginside />} />
          <Route exact path="/userexper" element={<Userexper />} />
          <Route exact path="/product" element={<ProductDeve />} />
          <Route exact path="/digital" element={<ProductDeve />} />
          <Route exact path="/hireP" element={<ProducHire />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

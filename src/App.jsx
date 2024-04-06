import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Pricing from "./pages/Pricing";
import EstimatedCalculator from "./pages/EstimatedCalculator";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="flex items-center justify-center ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route
              path="/estimated-calculator"
              element={<EstimatedCalculator />}
            />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

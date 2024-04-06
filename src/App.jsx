import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Home />} />
          <Route path="/estimated-calculator" element={<Home />} />
          <Route path="/about-us" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./modules/Home";
import About from "./modules/About";
import Privacy from "./modules/Privacy";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

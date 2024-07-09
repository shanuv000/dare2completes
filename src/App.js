import "./App.css";
import Home from "./pages/Home";
import { useContext } from "react";
import Form from "./pages/Form";
import Form2 from "./pages/Form2";
import Form3 from "./pages/Form3";
import Form4 from "./pages/Form4";
import Slider1 from "./components/Slider1";
import { FormProvider } from "./components/FormContext"; // Assuming FormProvider is correct
import { Routes, Route } from "react-router-dom";
import Drawer2 from "./components/Drawer2";

const App = () => {
  const { imagesContext } = useContext(FormContext);

  return (
    <div className="app">
      <Routes>
        <Route path="/slider" element={<Slider1 imss={imagesContext} />} />
        <Route path="/" element={<Home imss={imagesContext} />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
        <Route path="/form4" element={<Form4 />} />
        <Route path="/drawer2" element={<Drawer2 />} />
      </Routes>
    </div>
  );
};

export default App;

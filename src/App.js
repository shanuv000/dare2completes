import "./App.css";
import Form from "./pages/Form";
import Form2 from "./pages/Form2";
import Form3 from "./pages/Form3";
import Form4 from "./pages/Form4";
import Slider1 from "./components/Slider1";
import { FireProvider } from "./components/FormContext";
import { Switch, Route } from "react-router-dom";
// import Navbars from "./components/NavbarBottom";
// import NavbarsTop from "./components/NavbarTop";

import React from "react";
import Drawer2 from "./components/Drawer2";
function App() {
  return (
    <div className="app">
      <FireProvider>
        <Switch>
          <Route path="/" exact component={Slider1} />

          <Drawer2>
            <Route path="/form" exact component={Form} />
            <Route path="/form2" exact component={Form2} />
            <Route path="/form3" exact component={Form3} />
            <Route path="/form4" exact component={Form4} />
          </Drawer2>
        </Switch>
      </FireProvider>
    </div>
  );
}

export default App;

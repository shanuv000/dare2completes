import "./App.css";
import Form from "./pages/Form";
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
        <Drawer2 />
        <Switch>
          {/* <Route path="/drawer" component={Drawers} /> */}

          <Route path="/" exact component={Slider1} />
        </Switch>
      </FireProvider>
      {/*<Navbars/>*/}
    </div>
  );
}

export default App;

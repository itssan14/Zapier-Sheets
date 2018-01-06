import React from "react";
import Navbar from "./components/Navbar";
import InputForm from "./components/InputForm";
import Reboot from "material-ui/Reboot";

const App = () => (
  <div>
    <Reboot />
    <Navbar />
    <InputForm />
  </div>
);

export default App;

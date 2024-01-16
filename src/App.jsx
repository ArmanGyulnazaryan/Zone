import React from "react";
import { Header } from "./Components/Header";
import { Register } from "./Components/Register";
import { Service } from "./Components/Service";
import { Team } from "./Components/Team";
import { User1 } from "./Components/User1";
import { User2 } from "./Components/User2";
import { Virtual } from "./Components/Virtual";
import { About } from "./Components/About";
import { Footer } from "./Components/Footer";


function App() {
  return (
    <div className="container">
      <Header />
      <Virtual />
      <Service />
      <User1 />
      <User2 />
      <Team />
      <Register />
      <About />
      <Footer />
    </div>
  );
}

export default App;

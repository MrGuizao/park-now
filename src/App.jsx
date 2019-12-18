import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Routes from "./Routes";

export default function App() {
     return (
          <Routes>
               <Homepage />
          </Routes>
     );
}

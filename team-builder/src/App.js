import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const initialValues = {
    name: "",
    email: "",
    role: "",
  };

  const [teamList, setTeamList] = useState([]);
  const [values, setValues] = useState(initialValues);
}

export default App;

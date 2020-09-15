import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

function App() {
  const initialValues = {
    name: "",
    email: "",
    role: "",
  };

  const [teamList, setTeamList] = useState([]);
  const [values, setValues] = useState(initialValues);

  const updateForm = (inputName, inputValue) => {
    setValues({ ...values, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newTeammember = {
      name: values.name.trim(),
      email: values.email.trim(),
      role: values.role,
    };
  };

  return <Form />;
}

export default App;

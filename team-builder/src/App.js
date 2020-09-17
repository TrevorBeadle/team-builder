import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import axios from "./axios/axios";
import Teammember from "./Components/Teammember";

function App() {
  const initialValues = {
    name: "",
    email: "",
    role: "",
  };

  const [teamList, setTeamList] = useState([]);
  const [values, setValues] = useState(initialValues);
  const 

  const updateForm = (inputName, inputValue) => {
    setValues({ ...values, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newTeammember = {
      name: values.name.trim(),
      email: values.email.trim(),
      role: values.role,
    };

    if (!newTeammember.name || !newTeammember.email || !newTeammember.role) {
      return;
    }

    axios
      .post("fakeapi.com", newTeammember)
      .then(res => {
        setTeamList([res.data, ...teamList]);
        setValues(initialValues);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios.get("fakeapi.com").then(res => setTeamList(res.data));
  }, []);

  return (
    <div className="container">
      <Form values={values} update={updateForm} submit={submitForm} />
      {teamList.map(member => {
        return <Teammember key={member.id} details={member} />;
      })}
    </div>
  );
}

export default App;

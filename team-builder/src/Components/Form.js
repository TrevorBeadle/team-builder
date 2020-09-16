import React from "react";

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = e => {
    const { name, value } = e.target;
    update(name, value);
  };

  const onSubmit = e => {
    e.preventDefault();
    submit();
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={onChange}
            maxLength="30"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={onChange}
            maxLength="30"
          />
        </label>
        <label>
          Role:
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">-- Select your Role --</option>
            <option value="Frontend">Frontend Engineer</option>
            <option value="Backend">Backend Engineer</option>
            <option value="Designer">Designer</option>
          </select>
        </label>
        <button disabled={!values.name || !values.email || !values.role}>
          Submit
        </button>
      </form>
    </div>
  );
}

import React from "react";

export default function Teammember({ details }) {
  return (
    <div className="container">
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}

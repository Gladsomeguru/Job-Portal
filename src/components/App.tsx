import React, { useState } from "react";
import Header from "./Header";
import Card from "./Card";
import Form from "./Form";

export default function App() {
  const [formVisible, setFormVisible] = useState(false);

  const showForm = () => {
    setFormVisible(true); // Set the form background to display:flex
  };
  const handleCloseClick = () => {
    setFormVisible(false);
  };

  return (
    <div className="App">
      <Header showForm={showForm} />
      <div className="flexBox">
        <Card name="Full Stack Developer" imgURL="./amazon.png" />
        <Card name="Node Js Developer" imgURL="./tesla.png" />
        <Card name="UI/UX Developer" imgURL="./swiggy.png" />
        <Card name="Full Stack Developer" imgURL="./amazon.png" />
        <Card name="Node Js Developer" imgURL="./tesla.png" />
        <Card name="UI/UX Developer" imgURL="./swiggy.png" />
        <Card name="Full Stack Developer" imgURL="./amazon.png" />
        <Card name="Node Js Developer" imgURL="./tesla.png" />
      </div>
      <Form formVisible={formVisible} closeClick={handleCloseClick} />
    </div>
  );
}

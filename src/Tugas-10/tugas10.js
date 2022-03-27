import React from 'react';
import Logo from '../Assets/img/logo.png';
import '../App.css';

const Tugas10 = () => {

  const ListCheckbox = (props) => {
    return (
      <div className="list">
        <input type={"checkbox"} /> {props.text}
        <hr />
      </div>
    )
  }

  return(
    <div className="card">
      <img src={Logo} />
      <h1>THINGS TO DO</h1>
      <p>During Bootcamp in jabarcodingcamp</p>
      <hr />

      <div className="container-list">
        <ListCheckbox text={"Belajar GIT & CLI"} />
        <ListCheckbox text={"Belajar HTML & CSS"} />
        <ListCheckbox text={"Belajar Javascript"} />
        <ListCheckbox text={"Belajar ReactJS Dasar"} />
        <ListCheckbox text={"Belajar ReactJS Advanced"} />
      </div>

      <div className="button">
        <button type="submit">Send</button>
      </div>

    </div>
  )
}

export default Tugas10;

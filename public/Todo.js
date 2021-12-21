import React, { Component } from "react";
import {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modalisopen,setmodalisopen]=useState(false);

  function deleteHandler() {

    setmodalisopen(true);
    console.log(modalisopen);
    

  } 
  function closeModalhandler(){
    setmodalisopen(false);
    console.log(modalisopen);
  }
  console.log(modalisopen);
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      
      {modalisopen && <Modal onCancel={closeModalhandler} onConfirm={closeModalhandler}/>}
      {modalisopen && <Backdrop onCancel={closeModalhandler}/>}


    </div>
  );
}
export default Todo;

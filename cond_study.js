import React, { useState, useRef, useEffect } from "react";


const button_styles = {
    border: '0',
    position: 'relative',
    margin: '5px',
    borderRadius: '3px',
    backgroundColor: 'rgba(30, 70, 214, 1)',
    font: 'poppins',
    color: 'white',
    padding: '3px'
  }

  const item_styles = {
    padding:'3px 10px 3px 10px',
    border:0,
    backgroundColor:'black',
    color:'white',
    borderRadius:'5px',
  }

  
function Student({ children, isAvailable, hide, index = [1,1,1] }) {
    const [availability, setAvailability] = useState(isAvailable);
    const [valuability, setValuability] = useState(index);

  const toggleAvailability = (index) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index] = !updatedAvailability[index];
    setAvailability(updatedAvailability);
  };

  const toggle_value = (index) =>{
    const updatedValue = [...valuability];
    updatedValue[index] = !updatedValue[index];
    setValuability(updatedValue);
  }

  const get_text = (itemText) => {
    return itemText[0] === "Get data" && itemText[1] !== null ? "Get data": itemText;
  };

  return (
    //ref={ulRef}
    <ul>
    {children.map((itemText, index) => (
      <li key={index}>
        {availability[index] ? <button type="button" onClick={() => toggle_value(index)} style={ valuability[index] ?  button_styles : item_styles}>{ valuability[index] ? "Get data":  itemText +" ✔"}</button> : "Unavailable" }

        <button style={{ margin: "10px" }} type="button" onClick={() => toggleAvailability(index)}>
          Change
        </button>
      </li>
    ))}
  </ul>
  );
}

const Students = () => {
  return (
    <div>
      <div>
        <h1>RCA Students</h1>
      </div>
      <Student
        children={["Beni", "Mc", "Theo"]}
        isAvailable={[1, 1, 1]}
        hide={[0, 1, 1]}
      />
    </div>
  );
};

export default Students;
import { useState } from "react";
import Students from './cond_study';


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

function Items({ item, isAvailable, type = 'ul' }) {
  const [availability, setAvailability] = useState(isAvailable);

  const toggleAvailability = (index) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index] = !updatedAvailability[index];
    setAvailability(updatedAvailability);
  }

  if (type === 'ol') {
    return (
      <ol>
        {item.map((itemText, index) => (
          <li key={index}>
            {availability[index] ? <span>{itemText} <span style={{color:'green'}}> ✔</span></span>: itemText+ " ❌"}
            <button type="button" style={button_styles} onClick={() => toggleAvailability(index)}>
              Click
            </button>
          </li>
        ))}
      </ol>
    );
  } else if (type === 'ul') {
    return (
      <ul>
        {item.map((itemText, index) => (
          <li key={index}>
          {itemText} {availability[index] ? <span style={{color:'green'}}> ✔</span>: <span> ❌</span>}
            <button type="button" style={button_styles} onClick={() => toggleAvailability(index)}>
              Click
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
}



const List = () => {
  return (
    <>
      <div>
        <h3>Restaurant items</h3>
        <Items item={['Banana', 'Apples', 'Oranges']} type={'ol'} isAvailable={[true, false, true]} />
      </div>
      <div>
        <h3>Class tools</h3>
        <Items item={['Mathematical set', 'Desk', 'Pen', 'Notebooks', 'Etc']} isAvailable={[1, 0, 0, 1]} />
      </div>
    <Students />
    </>
  );
}

export default List;
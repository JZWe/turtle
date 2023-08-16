import { useState } from 'react';
import './Input.css';

function Input({ options, onChange, defaultLabel, placeholder }) {
  const [currentText, setCurrentText] = useState('');
  const [areSearchedItemsVisible, setAreSearchedItemsVisible] = useState(null);
  const [searchedItems, setSearchedItems] = useState([]);

  const onInputChange = (e) => {
    setCurrentText(e.target.value);
    setTimeout(() => {
      if (e.target.value.trim() === '') return;

      setSearchedItems((prevItems) => {
        if (!prevItems.find((item) => item === e.target.value)) {
          return [e.target.value, ...prevItems];
        } else {
          return [...prevItems];
        }
      });
    }, 300);
  };

  const toggleAreSearchedItemsVisible = () => {
    setAreSearchedItemsVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="input">
      <input
        className={
          areSearchedItemsVisible ? `input-field active` : `input-field`
        }
        type="text"
        placeholder={placeholder}
        value={currentText}
        onChange={onInputChange}
      />
      {searchedItems.length ? (
        <div
          className={
            !areSearchedItemsVisible
              ? `searched-items`
              : `searched-items visible`
          }
        >
          {searchedItems.map((item, index) => (
            <div
              key={item}
              className={
                areSearchedItemsVisible && currentText === item
                  ? 'searched-item active'
                  : 'searched-item'
              }
              onClick={() => {
                toggleAreSearchedItemsVisible();
                setCurrentText(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}

      <i
        className={areSearchedItemsVisible ? 'icon active' : 'icon'}
        onClick={toggleAreSearchedItemsVisible}
      ></i>
    </div>
  );
}

export default Input;

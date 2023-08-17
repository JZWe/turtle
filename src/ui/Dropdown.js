import { useState, useEffect } from 'react';
import './Dropdown.css';

function Dropdown({ options, onChange, defaultLabel }) {
  const [isOptionVisible, setIsOptionVisible] = useState(null);
  const [currentOption, setCurrentOption] = useState(null);

  const toggleOptionVisible = () =>
    setIsOptionVisible((prevVisible) => !prevVisible);

  const onOptionClick = (option) => {
    setCurrentOption(option);
    setIsOptionVisible(false);
  };

  useEffect(() => {
    onChange(currentOption ?? null);
  }, [currentOption, onChange]);

  return (
    <div className="select-container">
      <div>
        <div className="select" onClick={toggleOptionVisible}>
          {!currentOption ? (
            <span className="default-label">{`${defaultLabel}`}</span>
          ) : (
            <span className="label">{currentOption.label}</span>
          )}
          <div className={isOptionVisible ? 'arrow up' : 'arrow down'}></div>
        </div>
        <div className={!isOptionVisible ? `options` : `options visible`}>
          {!Array.isArray(options)
            ? null
            : options.map((option, index) => (
                <div
                  className={
                    currentOption?.value === option.value
                      ? `option active`
                      : `option`
                  }
                  key={index}
                  onClick={() => onOptionClick(option)}
                >
                  {option.label}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;

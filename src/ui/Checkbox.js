import { useState, useEffect } from 'react';
import './Checkbox.css';

function Checkbox({ label, checked, onChange, id }) {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  // 讓 isChecked 與 props.checked 同步
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  function onClickHandler(id) {
    let nextIsChecked = !isChecked;
    setIsChecked(nextIsChecked);
    onChange?.(nextIsChecked, id);
  }

  return (
    <label className="container">
      <span>{label}</span>
      <input
        onClick={() => onClickHandler(id)}
        type="checkbox"
        checked={isChecked}
      />
      <span className="checkmark"></span>
    </label>
  );
}

export default Checkbox;

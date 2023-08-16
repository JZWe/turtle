import { useState, useEffect } from 'react';
import './CheckboxGroup.css';
import Checkbox from './Checkbox';

function CheckboxGroup({ hasAllChecked = false, onGroupChange, labels = [] }) {
  const initialState = labels.map((label, index) => ({
    label,
    checked: false,
    id: index,
  }));
  const [checkedList, setCheckedList] = useState(initialState);
  const [isAllChecked, setIsAllChecked] = useState(false);

  if (hasAllChecked) {
    return (
      <div className="checkbox-group all">
        <div className="checkbox-all">
          <Checkbox
            label="全部勾選"
            checked={isAllChecked}
            onChange={(isChecked) => {
              setIsAllChecked(isChecked);
              let nextCheckedList = isChecked
                ? labels.map((label, index) => ({
                    label,
                    checked: true,
                    id: index,
                  }))
                : labels.map((label, index) => ({
                    label,
                    checked: false,
                    id: index,
                  }));
              setCheckedList(nextCheckedList);
              onGroupChange?.(nextCheckedList);
            }}
          />
        </div>

        <div className="checkboxs">
          {labels.map((label, index) => (
            <Checkbox
              id={index}
              key={index}
              label={label}
              checked={isAllChecked ? true : checkedList[index].checked}
              onChange={(isChecked, id) => {
                let nextCheckedList = checkedList.map((item, innerIndex) => ({
                  label,
                  checked: item.id === id ? isChecked : item.checked,
                  id: innerIndex,
                }));
                setCheckedList(nextCheckedList);
                onGroupChange?.(nextCheckedList);
                if (nextCheckedList.every((item) => !item.checked)) {
                  setIsAllChecked(false);
                }
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="checkbox-group">
      {labels.map((label, index) => (
        <Checkbox
          id={index}
          key={index}
          label={label}
          checked={isAllChecked ? true : checkedList[index].checked}
          onChange={(isChecked, id) => {
            let nextCheckedList = checkedList.map((item, innerIndex) => ({
              label,
              checked: item.id === id ? isChecked : item.checked,
              id: innerIndex,
            }));
            setCheckedList(nextCheckedList);
            onGroupChange?.(nextCheckedList);
          }}
        />
      ))}
    </div>
  );
}

export default CheckboxGroup;

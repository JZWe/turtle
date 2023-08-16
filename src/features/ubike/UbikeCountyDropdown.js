import React from 'react';
import Dropdown from '../../ui/Dropdown';

const fakeCountyOptions = [
  { label: '台北市', value: '0' },
  { label: '台中市', value: '1' },
  { label: '台東市', value: '2' },
  { label: '新竹科學園區', value: '3' },
  { label: '台南市', value: '4' },
];

function UbikeCountyDropdown() {
  return (
    <div>
      <Dropdown
        defaultLabel="選擇縣市"
        options={fakeCountyOptions}
        onChange={console.log}
      />
    </div>
  );
}

export default UbikeCountyDropdown;

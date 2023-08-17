import React from 'react';
import Dropdown from '../../ui/Dropdown';
import { useUbikeTableContext } from './UbikeTableContext';

const fakeCountyOptions = [
  { label: '台北市', value: '0' },
  { label: '台中市', value: '1' },
  { label: '台東市', value: '2' },
  { label: '新竹科學園區', value: '3' },
  { label: '台南市', value: '4' },
];

function UbikeCountyDropdown() {
  const { setSelectedCounty } = useUbikeTableContext();
  return (
    <Dropdown
      defaultLabel="選擇縣市"
      options={fakeCountyOptions}
      onChange={(selectedOption) =>
        setSelectedCounty(selectedOption?.label ?? '')
      }
    />
  );
}

export default UbikeCountyDropdown;

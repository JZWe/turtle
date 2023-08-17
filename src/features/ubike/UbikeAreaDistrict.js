import { useEffect } from 'react';
import CheckboxGroup from '../../ui/CheckboxGroup';
import { useUbikeTableContext } from './UbikeTableContext';

const areaLabels = [
  '大安區',
  '大同區',
  '士林區',
  '文山區',
  '中正區',
  '中山區',
  '內湖區',
  '北投區',
  '松山區',
  '南港區',
  '信義區',
  '萬華區',
];

function UbikeAreaDistrict() {
  const { setSelectedAreas } = useUbikeTableContext();

  useEffect(() => {
    setSelectedAreas(areaLabels);
  }, [setSelectedAreas]);

  return (
    <CheckboxGroup
      hasAllChecked={true}
      labels={areaLabels}
      onGroupChange={(result) => {
        const selectedAreas = result
          .filter((item) => item.checked === true)
          .map((item) => item.label);
        setSelectedAreas(selectedAreas);
      }}
    />
  );
}

export default UbikeAreaDistrict;

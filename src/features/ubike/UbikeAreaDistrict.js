import React from 'react';
import CheckboxGroup from '../../ui/CheckboxGroup';

function UbikeAreaDistrict() {
  return (
    <CheckboxGroup
      hasAllChecked={true}
      labels={[
        '松山區',
        '松山區',
        '松山區',
        '松山區',
        '松山區',
        '松山區',
        '松山區',
        '松山區',
        '松山區',
        '松山區',
      ]}
      onGroupChange={(result) => {
        console.log(result);
      }}
    />
  );
}

export default UbikeAreaDistrict;

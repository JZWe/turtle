import { useState, createContext, useContext } from 'react';
import useUbikeData from './useUbikeData';

const UbikeTableContext = createContext(null);

export function UbikeTableContextProvider({ children }) {
  const { ubikeData } = useUbikeData();
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [currentPlacement, setCurrentPlacement] = useState('');

  const data = ubikeData.filter((item) => {
    return selectedAreas.find((area) => item.area === area) &&
      item.county === selectedCounty &&
      currentPlacement.trim === ''
      ? true
      : item.placement.includes(currentPlacement.trim());
  });

  return (
    <UbikeTableContext.Provider
      value={{
        selectedAreas,
        setSelectedAreas,
        selectedCounty,
        setSelectedCounty,
        currentPlacement,
        setCurrentPlacement,
        data,
      }}
    >
      {children}
    </UbikeTableContext.Provider>
  );
}

export function useUbikeTableContext() {
  const context = useContext(UbikeTableContext);
  if (context == null) {
    throw new Error('UbikeTableContextProvider was not found');
  }
  return context;
}

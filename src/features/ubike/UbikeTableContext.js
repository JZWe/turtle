import { useState, createContext, useContext } from 'react';
import useUbikeData from './useUbikeData';

const UbikeTableContext = createContext(null);

export function UbikeTableContextProvider({ children }) {
  const { ubikeData } = useUbikeData();
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [selectedAreas, setSelectedAreas] = useState([]);

  const data = ubikeData.filter((item) => {
    return (
      selectedAreas.find((area) => item.area === area) &&
      item.county === selectedCounty
    );
  });

  return (
    <UbikeTableContext.Provider
      value={{
        selectedAreas,
        setSelectedAreas,
        selectedCounty,
        setSelectedCounty,
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

import { useState, useEffect, createContext, useContext } from 'react';

const UbikeDataContext = createContext(null);

export function UbikeDataContextProvider({ children }) {
  const [ubikeData, setUbikeData] = useState([]);

  useEffect(() => {
    async function getUbikeData() {
      const res = await fetch('/youbike_immediate.json');
      const ubikeData = await res.json();
      setUbikeData(ubikeData);
    }
    getUbikeData();
  }, []);

  return (
    <UbikeDataContext.Provider value={{ ubikeData }}>
      {children}
    </UbikeDataContext.Provider>
  );
}

export function useUbikeContext() {
  const context = useContext(UbikeDataContext);
  if (context == null) {
    throw new Error('UbikeDataContextProvider was not found');
  }
  return context;
}

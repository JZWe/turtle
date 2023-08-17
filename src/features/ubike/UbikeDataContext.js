import { useState, useEffect, createContext, useContext } from 'react';

const UbikeDataContext = createContext(null);

export function UbikeDataContextProvider({ children }) {
  const [ubikeData, setUbikeData] = useState([]);

  useEffect(() => {
    async function getUbikeData() {
      const res = await fetch('/youbike_immediate.json');
      const jsonData = await res.json();
      const mappedUbikeData = jsonData.map((item) => {
        return {
          id: item.sno ?? null,
          placement: item.sna?.split('YouBike2.0_')[1] ?? null,
          area: item.sarea,
          county: '台北市',
          avaliableRentCount: item.bemp, // 可借車輛
          avaliableGiveBackCount: item.sbi, // 可還空位
        };
      });

      setUbikeData(mappedUbikeData);
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

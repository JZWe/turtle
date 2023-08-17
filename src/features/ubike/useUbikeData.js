import { useState, useEffect } from 'react';

function useUbikeData() {
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

  return { ubikeData };
}

export default useUbikeData;

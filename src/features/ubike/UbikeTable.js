import { useUbikeContext } from './UbikeDataContext';

export default function UbikeTable() {
  const { ubikeData } = useUbikeContext();

  console.log(ubikeData);
  return <div>UbikeTable</div>;
}

import Input from '../../ui/Input';
import { useUbikeTableContext } from './UbikeTableContext';

function UbikePlacementSearch() {
  const { setCurrentPlacement } = useUbikeTableContext();
  return (
    <Input
      placeholder="搜尋站點"
      onChange={(value) => setCurrentPlacement(value)}
    />
  );
}

export default UbikePlacementSearch;

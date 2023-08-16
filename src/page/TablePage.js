import UbikeCountyDropdown from '../features/ubike/UbikeCountyDropdown';
import UbikePlacementSearch from '../features/ubike/UbikePlacementSearch';
import { UbikeDataContextProvider } from '../features/ubike/UbikeDataContext';

import './TablePage.css';

function TablePage() {
  return (
    <UbikeDataContextProvider>
      <div>
        <h1 className="title">站點資訊</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <UbikeCountyDropdown />
          <UbikePlacementSearch />
        </div>
      </div>
    </UbikeDataContextProvider>
  );
}

export default TablePage;

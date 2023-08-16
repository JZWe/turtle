import UbikeCountyDropdown from '../features/ubike/UbikeCountyDropdown';
import UbikePlacementSearch from '../features/ubike/UbikePlacementSearch';
import { UbikeDataContextProvider } from '../features/ubike/UbikeDataContext';
import UbikeAreaDistrict from '../features/ubike/UbikeAreaDistrict';
import './TablePage.css';

function TablePage() {
  return (
    <UbikeDataContextProvider>
      <div>
        <h1 className="title">站點資訊</h1>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '24px' }}>
          <UbikeCountyDropdown />
          <UbikePlacementSearch />
        </div>
        <div style={{ paddingLeft: '10px', display: 'flex', gap: '10rem' }}>
          <div style={{ width: '480px' }}>
            <UbikeAreaDistrict />
          </div>
          <div>
            <img src="/icons/ride.svg" alt="ride" />
          </div>
        </div>
      </div>
    </UbikeDataContextProvider>
  );
}

export default TablePage;

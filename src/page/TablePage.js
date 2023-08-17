import UbikeCountyDropdown from '../features/ubike/UbikeCountyDropdown';
import UbikePlacementSearch from '../features/ubike/UbikePlacementSearch';
import UbikeAreaDistrict from '../features/ubike/UbikeAreaDistrict';
import UbikeTable from '../features/ubike/UbikeTable';
import { UbikeTableContextProvider } from '../features/ubike/UbikeTableContext';
import './TablePage.css';

function TablePage() {
  return (
    <UbikeTableContextProvider>
      <div>
        <h1 className="title">站點資訊</h1>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '24px' }}>
          <UbikeCountyDropdown />
          <UbikePlacementSearch />
        </div>
        <div
          style={{
            paddingLeft: '10px',
            display: 'flex',
            gap: '10rem',
            marginBottom: '2rem',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ width: '480px' }}>
            <UbikeAreaDistrict />
          </div>
          <div>
            <img src="/icons/ride.svg" alt="ride" />
          </div>
        </div>
        <UbikeTable />
      </div>
    </UbikeTableContextProvider>
  );
}

export default TablePage;

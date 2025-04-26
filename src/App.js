import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateAssetData } from './features/crypto/cryptoSlice';
import MockWebSocket from './app/realtimeService';
import CryptoTable from './features/crypto/CryptoTable';

function App() {
  const dispatch = useDispatch();
  const mockWebSocket = new MockWebSocket((assetId, updatedData) => {
    dispatch(updateAssetData({ id: assetId, updatedData }));
  });

  useEffect(() => {
    mockWebSocket.connect();


    return () => {
      mockWebSocket.disconnect();
    };
  }, [dispatch, mockWebSocket]);

  return (
    <div>
      <h1>Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
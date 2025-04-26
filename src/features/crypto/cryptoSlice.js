import { createSlice } from '@reduxjs/toolkit';


const initialAssets = [
  {
    id: 'bitcoin',
    logo: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 40000,
    '1h': 0.5,
    '24h': 2.1,
    '7d': -1.3,
    marketCap: 750000000000,
    volume24h: 30000000000,
    circulatingSupply: 19000000,
    maxSupply: 21000000,
    sparkline7d: '', 
  },
  {
    id: 'ethereum',
    logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 2800,
    '1h': -0.2,
    '24h': 1.5,
    '7d': 3.8,
    marketCap: 350000000000,
    volume24h: 15000000000,
    circulatingSupply: 120000000,
    maxSupply: 120000801,
    sparkline7d: [64000, 64500, 63000, 63500, 65000, 66000, 65500],
  },
  
  {
    id: 'Tether',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    name: 'Tether',
    symbol: 'USDT',
    price: 1.0,
    '1h': 0.0,
    '24h': 0.0,
    '7d': 0.01,
    marketCap: 96000000000,
    volume24h:  35000000000,
    circulatingSupply: 96000000000,
    maxSupply: 147128412,
    sparkline7d: ['...', '...'],
  },
  {
    id: 'BNB',
    logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=040',
    name: 'BNB',
    symbol: 'BNB',
    price: 560,
    '1h': 0.7,
    '24h': 1.3,
    '7d': 5.0,
    marketCap: 85000000000,
    volume24h:  2200000000,
    circulatingSupply: 153856150,
    maxSupply: 200000000,
    sparkline7d: ['...', '...'],
  },
  {
    id: 'Solana',
    logo: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    name: 'Solana',
    symbol: 'SOL',
    price: 145,
    '1h': 1.2,
    '24h': -2.1,
    '7d': 4.7,
    marketCap: 63000000000,
    volume24h:  3500000000,
    circulatingSupply: 430000000,
    maxSupply: 200000000,
    sparkline7d: ['...', '...'],
  },
];

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: initialAssets,
  },
  reducers: {
    updateAssetData: (state, action) => {
      const { id, updatedData } = action.payload;
      const assetIndex = state.assets.findIndex((asset) => asset.id === id);
      if (assetIndex !== -1) {
        state.assets[assetIndex] = { ...state.assets[assetIndex], ...updatedData };
      }
    },
  },
});

export const { updateAssetData } = cryptoSlice.actions;


export const selectAllAssets = (state) => state.crypto.assets;

export default cryptoSlice.reducer;
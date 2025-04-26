import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllAssets } from './cryptoSlice';
import styled from 'styled-components'; 

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableData = styled.td`
  padding: 10px;
`;

const PercentageChange = styled.span`
  color: ${(props) => (props.isPositive ? 'green' : 'red')};
`;

const Sparkline = styled.div`
  /* Style your static chart here */
  width: 80px;
  height: 30px;
  background-color: lightgray; /* Placeholder */
`;

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets);

  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeader>#</TableHeader>
          <TableHeader>Logo</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Symbol</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader>1h %</TableHeader>
          <TableHeader>24h %</TableHeader>
          <TableHeader>7d %</TableHeader>
          <TableHeader>Market Cap</TableHeader>
          <TableHeader>24h Volume</TableHeader>
          <TableHeader>Circulating Supply</TableHeader>
          <TableHeader>Max Supply</TableHeader>
          <TableHeader>7D Chart</TableHeader>
        </tr>
      </TableHead>
      <tbody>
        {assets.map((asset, index) => (
          <TableRow key={asset.id}>
            <TableData>{index + 1}</TableData>
            <TableData>
              <img src={asset.logo} alt={asset.name} width="24" height="24" />
            </TableData>
            <TableData>{asset.name}</TableData>
            <TableData>{asset.symbol}</TableData>
            <TableData>${asset.price.toFixed(2)}</TableData>
            <TableData>
              <PercentageChange isPositive={asset['1h'] >= 0}>
                {asset['1h'].toFixed(2)}%
              </PercentageChange>
            </TableData>
            <TableData>
              <PercentageChange isPositive={asset['24h'] >= 0}>
                {asset['24h'].toFixed(2)}%
              </PercentageChange>
            </TableData>
            <TableData>
              <PercentageChange isPositive={asset['7d'] >= 0}>
                {asset['7d'].toFixed(2)}%
              </PercentageChange>
            </TableData>
            <TableData>${asset.marketCap.toLocaleString()}</TableData>
            <TableData>${asset.volume24h.toLocaleString()}</TableData>
            <TableData>{asset.circulatingSupply.toLocaleString()}</TableData>
            <TableData>{asset.maxSupply ? asset.maxSupply.toLocaleString() : '∞'}</TableData>
            
            <TableData>
            <Sparkline>
  <img src="https://www.coingecko.com/coins/1/sparkline.svg" alt="Bitcoin 7D Chart" style={{ width: '100px', height: '40px' }} />
            </Sparkline>
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default CryptoTable;
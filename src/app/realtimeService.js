
class MockWebSocket {
    constructor(onUpdate) {
      this.onUpdate = onUpdate;
      this.intervalId = null;
    }
  
    connect() {
      this.intervalId = setInterval(() => {
        this.simulateUpdate();
      }, 1000); // Update every 1 sec
    }
  
    disconnect() {
      clearInterval(this.intervalId);
    }
  
    simulateUpdate() {
      
      const assets = ['bitcoin', 'ethereum', 'tether', 'binancecoin', 'usd-coin'];
      const randomAssetId = assets[Math.floor(Math.random() * assets.length)];
  
      
      const priceChange = parseFloat((Math.random() * 10 - 5).toFixed(2)); 
      const hourChange = parseFloat((Math.random() * 2 - 1).toFixed(2));   
      const dayChange = parseFloat((Math.random() * 5 - 2.5).toFixed(2)); 
      const volumeChange = Math.floor(Math.random() * 5000000000);
  
      const updatedData = {
        price: this.currentPrices[randomAssetId] + priceChange,
        '1h': this.currentChanges[randomAssetId]['1h'] + hourChange,
        '24h': this.currentChanges[randomAssetId]['24h'] + dayChange,
        volume24h: this.currentVolumes[randomAssetId] + volumeChange,
      };
  
      
      updatedData.price = Math.max(0.01, updatedData.price);
  
      this.onUpdate(randomAssetId, updatedData);
      this.updateCurrentData(randomAssetId, updatedData);
    }
  
   
    currentPrices = {
      bitcoin: 40000,
      ethereum: 2800,
      tether: 1.00,
      binancecoin: 300,
      'usd-coin': 1.00,
    };
  
    currentChanges = {
      bitcoin: { '1h': 0.5, '24h': 2.1 },
      ethereum: { '1h': -0.2, '24h': 1.5 },
      tether: { '1h': 0.1, '24h': 0.2 },
      binancecoin: { '1h': 0.8, '24h': -0.5 },
      'usd-coin': { '1h': 0.0, '24h': 0.0 },
    };
  
    currentVolumes = {
      bitcoin: 30000000000,
      ethereum: 15000000000,
      tether: 50000000000,
      binancecoin: 10000000000,
      'usd-coin': 25000000000,
    };
  
    updateCurrentData(assetId, updatedData) {
      if (updatedData.price !== undefined) this.currentPrices[assetId] = updatedData.price;
      if (updatedData['1h'] !== undefined) this.currentChanges[assetId]['1h'] = updatedData['1h'];
      if (updatedData['24h'] !== undefined) this.currentChanges[assetId]['24h'] = updatedData['24h'];
      if (updatedData.volume24h !== undefined) this.currentVolumes[assetId] = updatedData.volume24h;
    }
  }
  
  export default MockWebSocket;
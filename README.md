📚 Tech Stack
	•	Frontend: React.js, Styled-Components
	•	State Management: Redux Toolkit
	•	Simulation: setInterval to mimic real-time WebSocket updates
	•	Styling: Responsive design with styled-components
	•	Chart: Static 7D graph image for each crypto

# 1. Clone the repository
git clone https://github.com/your-username/crypto-tracker-app.git

# 2. Navigate into the project directory
cd crypto-tracker-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm start

✨ Features
	•	Displays live crypto prices for:
	•	Bitcoin (BTC)
	•	Ethereum (ETH)
	•	Tether (USDT)
	•	Binance Coin (BNB)
	•	Solana (SOL)
	•	Price, 1h %, 24h %, 7d %, 24h Volume change every 1-2 seconds automatically.
	•	Color-coded percentage changes (green for positive, red for negative).
	•	Responsive design for desktop, tablet, and mobile.
	•	Static 7D performance charts.
	•	State fully managed via Redux Toolkit.

⸻

📈 7D Graphs

Each crypto has a static small 7D performance chart displayed inside the table.
(You can replace it later with a real dynamic chart for bonus points!)

⸻

🔥 Future Enhancements
	•	Connect real WebSocket (e.g., Binance API) for true real-time prices
	•	Add search, filter, and sort functionality
	•	Save preferences using localStorage
	•	Add unit tests (Redux slices and selectors)
	•	TypeScript migration
	•	Live dynamic mini-charts instead of static images

⸻

🙏 Credits
	•	Crypto logos from CryptoLogos.cc
	•	7D chart images from free sources (or custom)

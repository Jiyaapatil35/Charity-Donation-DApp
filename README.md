# Charity Donation DApp

## Project Overview

Charity Donation DApp is a decentralized web application built using Blockchain technology and Smart Contracts. The platform allows users to make transparent and secure donations directly to a charity account without relying on intermediaries. Every donation is recorded on the blockchain, ensuring trust, accountability, and immutability.

The project demonstrates the practical application of Ethereum Smart Contracts, Web3 integration, and decentralized application development.

## Problem Statement

Traditional donation systems often suffer from a lack of transparency, delayed fund transfers, and dependency on centralized authorities. Donors may not always have visibility into how their contributions are handled.

A transparent and secure donation mechanism is needed where transactions are publicly verifiable and cannot be altered once recorded.

## Objective

- Create a decentralized donation platform using blockchain technology.
- Enable users to donate cryptocurrency securely.
- Record every donation permanently on the blockchain.
- Eliminate the need for intermediaries.
- Increase transparency and trust in charitable contributions.
- Demonstrate the integration of Smart Contracts with a web-based user interface.

## Features

- Donate Ether directly through a web interface.
- Smart Contract stores donor information and donation amount.
- Transactions are permanently recorded on the blockchain.
- Real-time blockchain interaction using Web3.js.
- Decentralized architecture ensuring transparency and security.
- User-friendly donation interface.

## Technology Stack

### Frontend
- HTML
- CSS
- JavaScript

### Blockchain
- Solidity
- Ethereum

### Development Tools
- Remix IDE
- Ganache
- Web3.js
- VS Code
- Live Server Extension

## System Architecture

```
User
  │
  ▼
Web Interface (HTML/CSS/JS)
  │
  ▼
Web3.js
  │
  ▼
Ethereum Network (Ganache)
  │
  ▼
Smart Contract (Solidity)
  │
  ▼
Blockchain Ledger
```

## Methodology

### Step 1: Smart Contract Development
A Solidity smart contract was created to accept donations and store donor details such as name and donation amount.

### Step 2: Smart Contract Deployment
The contract was compiled and deployed using Remix IDE on the Ganache local Ethereum blockchain.

### Step 3: Blockchain Setup
Ganache was used to simulate an Ethereum network and generate test accounts with virtual Ether.

### Step 4: Frontend Development
A web interface was developed using HTML, CSS, and JavaScript to collect donor information and donation amounts.

### Step 5: Web3 Integration
Web3.js was integrated to connect the frontend with the deployed smart contract and execute blockchain transactions.

### Step 6: Donation Execution
Users enter their name and donation amount. The transaction is sent to the smart contract and recorded on the blockchain.

### Step 7: Verification
All donation transactions can be verified through Ganache transaction logs and blockchain records.

## Workflow Diagram

```
Start
  │
  ▼
User Opens Donation Website
  │
  ▼
Enter Name and Donation Amount
  │
  ▼
Click Donate
  │
  ▼
Web3.js Sends Transaction
  │
  ▼
Smart Contract Receives Donation
  │
  ▼
Transaction Added to Blockchain
  │
  ▼
Donation Successfully Recorded
  │
  ▼
End
```

## Why MetaMask Was Not Used

MetaMask is commonly used for connecting decentralized applications to public Ethereum networks. However, this project was developed and tested entirely on a local blockchain environment using Ganache.

Ganache provides pre-funded accounts and a local Ethereum network, allowing transactions to be executed directly without requiring MetaMask. This approach simplifies development, testing, and demonstration while maintaining all core blockchain functionalities.

Therefore, Web3.js was directly connected to the Ganache RPC server instead of using MetaMask.

## Results

- Successfully deployed a Solidity smart contract on Ganache.
- Created a web-based decentralized donation platform.
- Enabled secure Ether donations through blockchain transactions.
- Recorded donation details permanently on the blockchain.
- Achieved transparency and immutability in donation tracking.
- Demonstrated end-to-end integration between frontend and blockchain.

## Future Enhancements

- MetaMask integration for public Ethereum networks.
- Display donation history on the frontend.
- Admin dashboard for charity organizations.
- Multi-charity support.
- QR code-based donations.
- Integration with Ethereum testnets and mainnet.
- Automated donation receipts and notifications.

## Installation and Setup

### Clone Repository

```bash
git clone https://github.com/your-username/charity-donation-dapp.git
cd charity-donation-dapp
```

### Install Dependencies

```bash
npm install
```

### Start Ganache

1. Open Ganache.
2. Create or start a workspace.
3. Ensure RPC Server is running at:

```text
http://127.0.0.1:7545
```

### Deploy Smart Contract

1. Open Remix IDE.
2. Compile the Solidity contract.
3. Select "Injected Provider" or Ganache environment.
4. Deploy the contract.
5. Copy the deployed contract address.

### Configure Contract Address

Update the contract address in `app.js`:

```javascript
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
```

### Run Application

Open the project folder in VS Code.

Start Live Server.

The application will be available at:

```text
http://127.0.0.1:5500
```

## Sample Transaction Flow

1. User enters name.
2. User enters donation amount.
3. User clicks Donate.
4. Web3.js sends transaction to the smart contract.
5. Ganache processes the transaction.
6. Smart contract stores donation details.
7. Transaction hash is generated.
8. Donation becomes permanently recorded on the blockchain.

## Learning Outcomes

- Understanding of Blockchain fundamentals.
- Development of Ethereum Smart Contracts.
- Smart Contract deployment using Remix IDE.
- Web3.js integration with frontend applications.
- Working with Ganache local blockchain.
- Building and testing decentralized applications.
- Managing blockchain transactions and contract interactions.

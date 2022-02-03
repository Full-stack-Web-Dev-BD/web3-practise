import { ethers } from 'ethers';
import React, { useEffect } from 'react';
import Web3Modal from 'web3modal'
import NavBar from './Component/NavBar';
import { CONTRACT_ADDRESS } from './config';
import { connectWallet, updateWalletStatus } from './wallet';
import './custom.css'
import Dapp from './Component/Dapp';
import { initContract } from './Contract';
const App = () => {
    useEffect(async () => {
        await updateWalletStatus()
        await initContract()
    })
    return <div>
        <NavBar />
        <Dapp />
    </div>;
};

export default App;

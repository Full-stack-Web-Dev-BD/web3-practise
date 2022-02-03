import { ethers } from 'ethers';
import { CONTRACT_ADDRESS } from './config';
import Web3Modal from 'web3modal'

export var DappContract;
export const initContract = async function () {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const providers = new ethers.providers.Web3Provider(connection);
    const signer = providers.getSigner()
    DappContract = new ethers.Contract(CONTRACT_ADDRESS, require('./DappToken.json').abi, signer)
} 
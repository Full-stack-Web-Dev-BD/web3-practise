import { Button, Card, CardContent } from '@material-ui/core';
import { BigNumber } from 'big-number';
import React, { useState } from 'react';
import { DappContract } from '../Contract';
import { connectWallet, isWalletConnected, getChainId, switchNetwork } from '../wallet';

const Dapp = () => {
    const [balance, setBalance] = useState(0);

    useState(async () => {
        var isConnected = isWalletConnected()
        if (isConnected) {
            await connectWallet()
        }
        var chainId = await getChainId()
        if (chainId !== 1337) {
            await switchNetwork(1337)
        }
        updateBalance()
    })
    const updateBalance = async () => {
        var account = await window.ethereum.enable()
        var balance = await DappContract.balanceOf(account[0])
        setBalance(balance.toNumber())
    }
    const mint = async () => {
        var isConnected = isWalletConnected()
        if (isConnected) {
            await connectWallet()
        }
        console.log(DappContract);
        var account = await window.ethereum.enable()
        var chainId = await getChainId()
        if (chainId !== 1337) {
            await switchNetwork(1337)
        }
        var tx = await DappContract.mint(account[0], 6000)
        await updateBalance()

    }

    return <div className='mt-5'>
        <div className='row'>
            <div className='col-md-4 offset-md-3'>
                <Card>
                    <CardContent>
                        <h3 className='text-center'>My DAPP Token</h3>
                        <hr />
                        <div className='card p-3'  >
                            <div className='  ' style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <h4>Balance</h4>
                                <h4>  {balance} Dapp</h4>
                            </div>
                            <div className='mt-4' style={{
                                display: "flex",
                                justifyContent: 'end'
                            }} >
                                <Button size="small" color="danger" id='connect' variant='contained' onClick={e => mint()}  >Mint</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>

    </div>;
};

export default Dapp;

"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Web3 from 'web3';

export default function Page() {
  const [web3, setWeb3] = useState(null);
  const [accountButtonDisabled, setAccountButtonDisabled] = useState(false);
  const [accounts, setAccounts] = useState(null);
  const [connectedAccount, setConnectedAccount] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (window.ethereum) {
      setWeb3(new Web3(window.ethereum));

      if (window.ethereum.isMetaMask) {
        console.log('Connected to Ethereum with MetaMask.');
      } else {
        console.log('Non-MetaMask Ethereum provider detected.');
      }
    } else {
      console.log('Please install MetaMask');
      setAccountButtonDisabled(true);
    }
  }, []);

  async function requestAccounts() {
    if (web3 === null) {
      return;
    }

    await window.ethereum.request({ method: 'eth_requestAccounts' });

    const allAccounts = await web3.eth.getAccounts();
    setAccounts(allAccounts);
    setConnectedAccount(`Account: ${allAccounts[0]}`);

    if (allAccounts && allAccounts.length > 0) {
      router.push('/user');
    }
    console.log(accounts);
    console.log(connectedAccount);
  }

  return (
    <>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
            Connect to Metamask
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Connect your Metamask wallet to access decentralized applications and securely manage your digital assets.
          </p>
          <Button
            onClick={requestAccounts}
            id="requestAccounts"
            disabled={accountButtonDisabled}
            size="lg">Connect to Metamask</Button>
        </div>
      </div>
    </>
  );
}

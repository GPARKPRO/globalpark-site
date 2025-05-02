// lib/contract.ts

import Web3 from 'web3';
import GPARK_ABI from './lib/GPARKTokenABI.json';

const GPARK_CONTRACT_ADDRESS = '0xA88C78A9b635c9724103bAA7745c2A32E9b9F1da';

let web3: Web3 | null = null;
let contract: any = null;

export const getWeb3 = (): Web3 => {
  if (web3) return web3;
  if (typeof window !== 'undefined' && (window as any).ethereum) {
    web3 = new Web3((window as any).ethereum);
  } else {
    throw new Error('MetaMask is not installed');
  }
  return web3;
};

export const getGPARKContract = (): any => {
  if (contract) return contract;
  const web3Instance = getWeb3();
  contract = new web3Instance.eth.Contract(GPARK_ABI as any, GPARK_CONTRACT_ADDRESS);
  return contract;
};

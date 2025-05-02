// lib/contract.ts
import { BrowserProvider, Contract } from 'ethers';
import GPARK_ABI from './GPARKTokenABI.json';

const CONTRACT_ADDRESS = '0xA88C78A9b635c9724103bAA7745c2A32E9b9F1da';

export const getGparkContract = async () => {
  if (typeof window === 'undefined' || !(window as any).ethereum) return null;

  const provider = new BrowserProvider((window as any).ethereum);
  const signer = await provider.getSigner();
  const contract = new Contract(CONTRACT_ADDRESS, GPARK_ABI, signer);

  return contract;
};

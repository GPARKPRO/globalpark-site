import { ethers } from 'ethers';
import GPARK_ABI from './GPARKTokenABI.json';

const CONTRACT_ADDRESS = '0xA88C78A9b635c9724103bAA7745c2A32E9b9F1da';

export const getGparkContract = () => {
  if (typeof window === 'undefined' || !(window as any).ethereum) return null;

  const provider = new ethers.providers.Web3Provider((window as any).ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, GPARK_ABI, signer);

  return contract;
};

import { ethers } from 'ethers'

const provider = new ethers.JsonRpcProvider(
  `https://ethereum-holesky.nodit.io/${import.meta.env.VITE_API_NODIT_API_KEY}`,
)
const contractAddress = import.meta.env.VITE_API_CONTRACT_ADDRESS
const abi = import.meta.env.VITE_API_CONTRACT_ABI

export const contract = new ethers.Contract(contractAddress, abi, provider)

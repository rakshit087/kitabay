import KitabAbi from '@/abi/Kitab.json';
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core';
import { ethers } from 'ethers';

export const mintKitab = async (address: `0x${string}`, price: number, accountAddress: `0x${string}`) => {
  const { hash } = await writeContract({
    address: address,
    abi: KitabAbi,
    functionName: 'safeMint',
    args: [accountAddress],
    //@ts-ignore
    value: ethers.parseEther(price.toString()),
  });
  const txn = await waitForTransaction({
    hash,
  });

  return txn;
};

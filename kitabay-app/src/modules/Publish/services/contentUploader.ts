import { getAccount, signMessage } from '@wagmi/core';
import lighthouse from '@lighthouse-web3/sdk';

const encryptionSignature = async () => {
  const account = getAccount();

  const messageRequested = (await lighthouse.getAuthMessage(account.address || '')).data.message;
  const signedMessage = await signMessage({ message: messageRequested });
  return {
    signedMessage: signedMessage,
    publicKey: account.address,
  };
};

export const uploadFileEncrypted = async (e: any) => {
  const sig = await encryptionSignature();
  const response = await lighthouse.uploadEncrypted(
    e,
    process.env.NEXT_PUBLIC_LH_ENDPOINT || '',
    sig.publicKey || '',
    sig.signedMessage
  );
  return response;
};

export const applyAccessControl = async (cid: string, contractAddress: string) => {
  const conditions = [
    {
      id: 1,
      chain: 'Hyperspace',
      method: 'balanceOf',
      standardContractType: 'ERC721',
      contractAddress: contractAddress,
      returnValueTest: { comparator: '>=', value: '1' },
      parameters: [':userAddress'],
    },
  ];
  const aggregator = '([1])';
  const { publicKey, signedMessage } = await encryptionSignature();
  const response = await lighthouse.applyAccessCondition(publicKey || '', cid, signedMessage, conditions, aggregator);
  return response;
};

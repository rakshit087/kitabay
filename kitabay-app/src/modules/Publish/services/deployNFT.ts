import { writeContract, waitForTransaction } from '@wagmi/core'
import KitabFactory from "@/abi/KitabFactory.json"

export const deployNFT = async (
    name: string,
    symbol: string,
    baseURI: string,
    maxSupply: number,
    price: number,
) => {
    const {hash} = await writeContract({
        address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        abi: KitabFactory,
        functionName: "createKitab",
        args: [name, symbol, baseURI, maxSupply, price]
    });
    const data = await waitForTransaction({hash});    
    return data['logs'][0]['address'];
}
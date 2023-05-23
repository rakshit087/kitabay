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
        address: "0x3e54E173CFbEb94f6f5912324dF21e979fD27Dc1",
        abi: KitabFactory,
        functionName: "createKitab",
        args: [name, symbol, baseURI, maxSupply, price]
    });
    const data = await waitForTransaction({hash});    
    return data['logs'][0]['address'];
}
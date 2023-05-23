import lighthouse from '@lighthouse-web3/sdk';

interface NFTMetadata {
    name: string
    description: string
    image: string
}


export const uploadNFTMetadata = async (metadata: NFTMetadata) => {
    const { name, description, image } = metadata;
    const metadataJSON = JSON.stringify({
        name,
        description,
        image
    })
    const res = await lighthouse.uploadText(metadataJSON, process.env.NEXT_PUBLIC_LH_ENDPOINT as string);
    return res;
}   
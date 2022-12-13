import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'ArtfulyGivingFrogs',
  tokenName: 'ArtfullyGiving Frogs',
  tokenSymbol: 'AGF',
  hiddenMetadataUri: 'ipfs://QmUFbiUAdLcMuECkNJgrwJsKqAvdT43BPU4m8TbFwYXw5k/hidden.json',
  maxSupply: 2000,
  whitelistSale: {
    price: 0.07,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xC6D8a7627368fe55eB13da54cd580C88F30f4ae3",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;

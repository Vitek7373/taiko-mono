export type Block = {
  number: number;
  hash: string;
  parentHash: string;
  nonce: number;
  sha3Uncles: string;
  logsBloom: string[] | string;
  transactionsRoot: string;
  stateRoot: string;
  receiptsRoot: string;
  miner: string;
  difficulty: number;
  totalDifficulty: number;
  extraData: string;
  size: number;
  gasLimit: number;
  gasUsed: number;
  timestamp: number;
  transactions: string[];
  uncles: string[];
  baseFeePerGas?: string;
  mixHash: string;
  withdrawalsRoot?: string;
};
import { ApiPromise, WsProvider } from '@polkadot/api';

import { Connection, ConnectionOptions } from '@uprtcl/multiplatform';
import { Logger } from '@uprtcl/micro-orchestrator';
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import { IdentityInfo, IdentityInfoAdditional, Registration } from '@polkadot/types/interfaces';
import { Option } from '@polkadot/types';
import { AddressOrPair } from '@polkadot/api/types';

const getIdentityInfo = (identity: Option<Registration>) => {
  if (identity && identity.isSome) {
    const { info }: any = identity.toHuman();
    return info;
  }
  return {};
};

// Picks out the the cid parts from the users additional fields and assembles the final string
const getCID = (info: IdentityInfo): string => {
  if (!info.additional) {
    return '';
  }
  const [[, { Raw: cid0 }], [, { Raw: cid1 }]] = info.additional
    .filter(([k]) => k.Raw === 'cid0' || k.Raw === 'cid1')
    .sort(([a], [b]) => (a.Raw < b.Raw ? -1 : 1));
  console.log(cid0, cid1);

  const cid = cid0 + cid1;
  return cid;
};

export interface UserPerspectives {
  [perspectiveId: string]: {
    headId?: string;
    context?: string;
  };
}

export class PolkadotConnection extends Connection {
  public api?: ApiPromise;
  public account?: string;
  private chain?: string;
  private identityInfo?: IdentityInfo;

  logger = new Logger('Polkadot-Connection');

  constructor(protected ws: string, protected apiOptions?: any, options?: ConnectionOptions) {
    super(options);
  }

  public async connect(): Promise<void> {
    this.logger.log('Connecting');

    const wsProvider = new WsProvider('ws://127.0.0.1:9944');
    this.api = await ApiPromise.create({ provider: wsProvider });

    // const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
    // const timestamp: any = await api.query.timestamp.now.at(blockHash);
    // const date = new Date(timestamp.toNumber());
    // Returns an array of all the injected sources
    // (this needs to be called first, before other requests)
    const allInjected = await web3Enable('uprtcl-wiki');

    // returns an array of { address, meta: { name, source } }
    // meta.source contains the name of the extension that provides this account
    const allAccounts = await web3Accounts();
    this.account = allAccounts[0]?.address;

    // Set extension account as signer
    const injector = await web3FromAddress(this.account);
    this.api?.setSigner(injector.signer);

    // Retrieve the chain name
    // E.g. "Westend", "Kusama"
    this.chain = (await this.api.rpc.system.chain()).toString();

    this.logger.log('Connected', {
      api: this.api
    });
  }

  public getNetworkId() {
    return this.chain;
  }

  public async canSign(): Promise<boolean> {
    return true;
  }

  public async connectWallet(): Promise<void> {
    // Returns an array of all the injected sources
    // (this needs to be called first, before other requests)
    // const allInjected = await web3Enable('uprtcl-wiki');
    //
    // // returns an array of { address, meta: { name, source } }
    // // meta.source contains the name of the extension that provides this account
    // const allAccounts = await web3Accounts();
    // this.account = allAccounts[0]?.address;
    //
    // // Set extension account as signer
    // const injector = await web3FromAddress(this.account);
    // this.api?.setSigner(injector.signer);
    return;
  }

  public async getUserPerspectivesHash(userId: string) {
    // read evees entry
    const identity = await this.api?.query.identity.identityOf(userId);
    const identityInfo = getIdentityInfo(<Option<Registration>>identity);
    return getCID(<IdentityInfo>this.identityInfo);
  }

  public async updateUserPerspectivesHash(userPerspectivesHash: string) {
    // update evees entry
    const cid1 = userPerspectivesHash.substring(0, 32);
    const cid0 = userPerspectivesHash.substring(32, 64);
    const result = this.api?.tx.identity.setIdentity({
      ...this.identityInfo,
      additional: [
        [{ Raw: 'evees-cid1' }, { Raw: cid1 }],
        [{ Raw: 'evees-cid0' }, { Raw: cid0 }]
      ]
    });
    const txHash = await result?.signAndSend(<AddressOrPair>this?.account);
    console.log(txHash);
  }
}
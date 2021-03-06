import { Ready } from '../../utils/ready';

import { CASStore } from './cas-store';
import { CidConfig } from './cid-config';
import { Entity } from './entity';

export interface CASRemote extends CASStore, Ready {
  casID: string;
  cidConfig: CidConfig;

  /** A non-remote-addressed store interface. It recieves plain objects
   * instead of ObjectOn */
  storeObjects(objects: object[]): Promise<Entity<any>[]>;
}

import { html } from 'lit-element';

import { AccessControlService } from '@uprtcl/evees';

import { EveesLocalDB } from './evees.local.db';

export class EveesAccessControlLocal implements AccessControlService {
  constructor(protected db: EveesLocalDB) {}

  async canUpdate(uref: string, userId: string) {
    return (await this.db.perspectives.get(uref)) !== undefined;
  }

  lense(): Lens {
    return {
      name: 'evees-local:access-control',
      type: 'access-control',
      render: (entity: any) => {
        return html` <h3>Private</h3> `;
      },
    };
  }
}

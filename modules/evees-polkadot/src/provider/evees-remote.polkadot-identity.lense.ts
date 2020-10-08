import { LitElement, property, html, css } from 'lit-element';
import { ApolloClient } from 'apollo-boost';

import { moduleConnect } from '@uprtcl/micro-orchestrator';
import { ApolloClientModule } from '@uprtcl/graphql';
import { EveesModule, EveesRemote } from '@uprtcl/evees';

import { EveesPolkadotIdentity } from './evees.polkadot-identity';

interface remoteUI {
  pendingActions: number;
}

export class EveesPolkadotIdentityRemoteLense extends moduleConnect(LitElement) {
  @property({ attribute: false })
  loading: boolean = true;

  @property({ attribute: false })
  remoteUI!: remoteUI;

  client!: ApolloClient<any>;
  remote!: EveesPolkadotIdentity;

  async firstUpdated() {
    this.client = this.request(ApolloClientModule.bindings.Client);
    this.load();
  }

  async load() {
    this.loading = true;
    const remotes = this.requestAll(EveesModule.bindings.EveesRemote) as EveesRemote[];
    this.remote = remotes.find(r => r.id.includes('evees-identity')) as EveesPolkadotIdentity;
    await this.remote.ready();

    const status = await this.remote.getStatus();

    this.remoteUI = {
      pendingActions: status.pendingActions
    };

    this.loading = false;
  }

  async remoteClicked() {
    this.loading = true;
    await this.remote.flushCache();
    this.loading = false;
  }

  render() {
    if (this.loading) {
      return html`
        <uprtcl-loading></uprtcl-loading>
      `;
    }
    return html`
      <div @click=${() => this.remoteClicked()} class="status-container">
        ${this.remoteUI.pendingActions}
      </div>
    `;
  }

  static get styles() {
    return css`
      .status-container {
        height: 32px;
        width: 32px;
        border-radius: 16px;
        background-color: #2a3279;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    `;
  }
}

import { LitElement, html, css } from 'lit-element';

import { moduleConnect } from '@uprtcl/micro-orchestrator';
import { EveesModule, EveesHelpers } from '@uprtcl/evees';
import { AragonConnector } from '@uprtcl/access-control';
import { ApolloClientModule } from '@uprtcl/graphql';

const wait = (delay) => {
  return new Promise((resolve) => setTimeout(() => resolve(), delay));
};

export class SimpleWiki extends moduleConnect(LitElement) {
  static get properties() {
    return {
      rootHash: { type: String },
      loading: { type: Boolean, attribute: false },
      defaultAuthority: { type: String },
    };
  }

  constructor() {
    super();
    this.loading = true;
  }

  subscribeToHistory(history, callback) {
    const pushState = history.pushState;
    history.pushState = function (state) {
      if (typeof history.onpushstate == 'function') {
        history.onpushstate({ state: state });
      }
      callback(arguments);
      // Call your custom function here
      return pushState.apply(history, arguments);
    };
  }

  async firstUpdated() {
    this.addEventListener('evees-proposal-created', (e) => console.log(e));

    window.addEventListener('popstate', () => {
      this.rootHash = window.location.href.split('id=')[1];
    });

    this.subscribeToHistory(window.history, (state) => {
      this.rootHash = state[2].split('id=')[1];
    });

    const eveesHttpProvider = this.requestAll(
      EveesModule.bindings.EveesRemote
    ).find((provider) => provider.authority.startsWith('http'));

    await eveesHttpProvider.connect();

    this.defaultAuthority = eveesHttpProvider.authority;

    if (window.location.href.includes('?id=')) {
      this.rootHash = window.location.href.split('id=')[1];
    } else {
      const eveesEthProvider = this.requestAll(
        EveesModule.bindings.EveesRemote
      ).find((provider) => provider.authority.startsWith('eth'));

      const client = this.request(ApolloClientModule.bindings.Client);

      const wiki = {
        title: 'Genesis Wiki',
        pages: [],
      };

      const dataId = await EveesHelpers.createEntity(
        client,
        eveesEthProvider,
        wiki
      );
      const headId = await EveesHelpers.createCommit(client, eveesEthProvider, {
        dataId,
      });

      const randint = 0 + Math.floor((10000 - 0) * Math.random());

      const eth = this.request('EthereumConnection');
      const aragonConnector = new AragonConnector(eth);
      const daoAddress = await aragonConnector.createDao({
        daoName: `dao-space-${randint}`,
        tokenName: 'Citizenship',
        tokenSymbol: 'CTZ',
        members: [eth.getCurrentAccount()],
        votingSettings: ['500000000000000000', '100000000000000000', '86400'],
      });

      console.log('DAO created at', { daoAddress });
      await aragonConnector.connect(daoAddress);

      const perspectiveId = await EveesHelpers.createPerspective(
        client,
        eveesEthProvider,
        {
          headId,
          context: `dao-space-${randint}`,
          canWrite: aragonConnector.agentAddress,
        }
      );

      window.history.pushState('', '', `/?id=${perspectiveId}`);
    }

    this.loading = false;
  }

  render() {
    return html`
      ${!this.loading
        ? html`
            <div class="app-header">HEADER</div>
            <div class="app-content">
              <div class="app-bar">BAR</div>
              <div class="wiki-container">
                <wiki-drawer
                  ref=${this.rootHash}
                  default-authority=${this.defaultAuthority}
                  .editableAuthorities=${[this.defaultAuthority]}
                ></wiki-drawer>
              </div>
            </div>
          `
        : html` Loading... `}
    `;
  }

  static get styles() {
    return css`
      :host {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
      }
      .app-header {
        width: 100%;
        height: 50px;
        flex-shrink: 0;
        background-color: white;
      }
      .app-content {
        overflow: auto;
        flex-grow: 1;
        display: flex;
        flex-direction: row;
      }
      .app-bar {
        width: 0vw;
        flex-grow: 0;
        flex-shrink: 0;
        background-color: #ceb19e;
      }
      .wiki-container {
        flex-grow: 1;
        background-color: white;
      }
    `;
  }
}

import { ApolloClient, gql } from 'apollo-boost';
import { LitElement, property, PropertyValues } from 'lit-element';
import { flatMap } from 'lodash-es';

import { moduleConnect, Dictionary } from '@uprtcl/micro-orchestrator';
import { GraphQlTypes } from '@uprtcl/common';
import { Hashed } from '@uprtcl/cortex';

import { Lens } from '../types';
import { SlotPlugin } from '../plugins/slot.plugin';

export class CortexEntityBase extends moduleConnect(LitElement) {
  @property()
  public hash!: string;

  @property()
  public lens!: string;

  @property()
  protected entity: Hashed<any> | undefined = undefined;

  // Lenses
  @property()
  protected selectedLens!: Lens | undefined;

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener('entity-updated', () => this.loadEntity(this.hash));
    this.addEventListener<any>(
      'lens-selected',
      (e: CustomEvent) => (this.selectedLens = e.detail.selectedLens)
    );
  }

  async loadEntity(hash: string): Promise<void> {
    this.entity = undefined;
    this.selectedLens = undefined;

    const client: ApolloClient<any> = this.request(GraphQlTypes.Client);

    const result = await client.query({
      query: gql`
      {
        getEntity(id: "${hash}", depth: 1) {
          id
          raw
          isomorphisms {
            patterns {
              lenses {
                name
                type
                render
              }
            }
          }
        }
      }
      `
    });

    const lenses = flatMap(
      result.data.getEntity.isomorphisms.reverse(),
      iso => iso.patterns.lenses
    ).filter(l => !!l);

    this.entity = result.data.getEntity.raw;

    if(this.lens) {
      this.selectedLens = lenses.find(lens => lens.type === this.lens);
    } 

    if (this.selectedLens === undefined) {
      this.selectedLens = lenses[0];
    }
  }

  get slotPlugins(): Dictionary<SlotPlugin> {
    return {};
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    if (changedProperties.has('hash') && this.hash && this.hash !== changedProperties.get('hash')) {
      this.loadEntity(this.hash);
    }
  }
}

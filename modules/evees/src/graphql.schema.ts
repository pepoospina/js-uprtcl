import { gql } from 'apollo-boost';
import { makeExecutableSchema } from 'graphql-tools';

import { Secured, baseTypeDefs, baseResolvers } from '@uprtcl/common';

import { Commit, Perspective, EveesTypes } from './types';
import { Evees } from './services/evees';

export const eveesTypeDefs = gql`
  scalar Date

  type Context {
    context: String!
    perspectives: [Entity!]
  }

  type Commit implements EntityType {
    parentCommits: [Entity!]!
    timestamp: Date!
    message: String
    data: Entity

    patterns: Patterns!
  }

  type Perspective implements EntityType {
    head: Entity
    name: String
    context: Context

    patterns: Patterns!
  }
`;

export const eveesResolvers = {
  Commit: {
    message(parent: Secured<Commit>) {
      return parent.object.payload.message;
    },
    timestamp(parent: Secured<Commit>) {
      return parent.object.payload.timestamp;
    },
    parentCommits(parent: Secured<Commit>) {
      return parent.object.payload.parentsIds;
    }
  },
  Context: {
    context(parent) {
      return typeof parent === 'string' ? parent : parent.context;
    },
    async perspectives(parent, _, { container }) {
      const context = typeof parent === 'string' ? parent : parent.context;

      const evees: Evees = container.get(EveesTypes.Evees);

      return evees.getContextPerspectives(context);
    }
  },
  Perspective: {
    async head(parent: Secured<Perspective>, _, { container }) {
      const evees: Evees = container.get(EveesTypes.Evees);

      const details = await evees.getPerspectiveDetails(parent.id);

      return details && details.headId;
    },
    async name(parent: Secured<Perspective>, _, { container }) {
      const evees: Evees = container.get(EveesTypes.Evees);

      const details = await evees.getPerspectiveDetails(parent.id);

      return details && details.name;
    },
    async context(parent: Secured<Perspective>, _, { container }) {
      const evees: Evees = container.get(EveesTypes.Evees);

      const details = await evees.getPerspectiveDetails(parent.id);

      return details && details.context;
    }
  }
};

export const eveesSchema = makeExecutableSchema({
  typeDefs: [baseTypeDefs, eveesTypeDefs],
  resolvers: {
    ...baseResolvers,
    ...eveesResolvers
  }
});
import { Dictionary } from '@uprtcl/micro-orchestrator';
import {
  EveesProvider,
  NewPerspectiveData,
  Perspective,
  Secured,
  Commit,
  PerspectiveDetails
} from '@uprtcl/evees';
import { Hashed } from '@uprtcl/cortex';

export class MockEveesProvider implements EveesProvider {
  constructor(
    public entities: Dictionary<Hashed<any>> = {},
    public details: Dictionary<PerspectiveDetails> = {}
  ) {}

  async get(hash: string): Promise<Hashed<any>> {
    return this.entities[hash];
  }

  getContextPerspectives(context: string): Promise<string[]> {
    throw new Error('Method not implemented');
  }

  async getPerspectiveDetails(perspectiveId: string): Promise<PerspectiveDetails> {
    return this.details[perspectiveId];
  }

  cloneAndInitPerspective(newPerspectiveData: NewPerspectiveData): Promise<void> {
    throw new Error('Method not implemented');
  }

  clonePerspectivesBatch(newPerspectivesData: NewPerspectiveData[]): Promise<void> {
    throw new Error('Method not implemented');
  }

  clonePerspective(perspective: Secured<Perspective>): Promise<void> {
    throw new Error('Method not implemented');
  }

  cloneCommit(commit: Secured<Commit>): Promise<void> {
    throw new Error('Method not implemented');
  }

  updatePerspectiveDetails(
    perspectiveId: string,
    details: Partial<PerspectiveDetails>
  ): Promise<void> {
    throw new Error('Method not implemented');
  }
}

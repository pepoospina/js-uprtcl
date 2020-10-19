import Dexie from 'dexie';

export interface PerspectiveLocal {
  id: string;
  context: string;
  headId?: string;
}

export class EveesDB extends Dexie {
  perspectives: Dexie.Table<PerspectiveLocal, string>;

  constructor(name: string) {
    super(name);
    this.version(0.1).stores({
      perspectives: '&id,context'
    });
    this.perspectives = this.table('perspectives');
  }
}

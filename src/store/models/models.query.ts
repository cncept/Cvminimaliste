import { QueryEntity } from '@datorama/akita';
import { ModelsStore, modelsStore } from './models.store';
import { ModelsModel } from './models.model';

export class ModelsQuery extends QueryEntity<ModelsModel> {
  constructor(protected store: ModelsStore) {
    super(store);
  }

  modelIdSelected$ = this.select((state) => state.id);
}

export const modelsQuery = new ModelsQuery(modelsStore);

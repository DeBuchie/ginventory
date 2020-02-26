import { GeneralData } from '@shared/models/general.entities';

export interface Search {
  data: GeneralData[];
  meta: MetaData;
}

export interface MetaData {
  total_count: number;
}



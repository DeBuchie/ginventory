import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@environment/environment';
import { CoreState } from '@core/models/core-state.interface';

export const reducers: ActionReducerMap<CoreState> = {

};


export const metaReducers: MetaReducer<CoreState>[] = !environment.production ? [] : [];

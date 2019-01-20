import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {
  notificationReducer,
  Notification
} from '../components/notification/store';
export interface State {
  notifications: Notification[];
}

export const reducers: ActionReducerMap<State> = {
  notifications: notificationReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

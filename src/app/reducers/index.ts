import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  notificationReducer,
  Notification
} from '../components/notification/store';

// state interface is of type Notifcation array
export interface State {
  notifications: Notification[];
}

// the key for notifications in state is notification.
// those who add this component to their project
// should add this state to their root reducer.
export const reducers: ActionReducerMap<State> = {
  notifications: notificationReducer
};

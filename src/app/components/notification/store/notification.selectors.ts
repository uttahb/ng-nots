import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as notificationReducer from '../store/notification.model';

const notificationState = createFeatureSelector<
  notificationReducer.Notification[]
>('notifications');
// This selector gives the list of active notificaitons.
export const messages = createSelector(
  notificationState,
  state => {
    return state;
  }
);

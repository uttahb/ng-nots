import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as notificationReducer from '../store/notification.model';

let notificationState = createFeatureSelector<notificationReducer.Notification>(
  'notification'
);

export const messageBody = createSelector(
  notificationState,
  state => {
    return state.body;
  }
);
export const messageHeader = createSelector(
  notificationState,
  state => {
    return state.header;
  }
);
export const messageTime = createSelector(
  notificationState,
  state => {
    return state.timeout;
  }
);
export const showMessage = createSelector(
  notificationState,
  state => {
    if (state) {
      return state.isVisible;
    }
  }
);
export const closeButton = createSelector(
  notificationState,
  state => {
    return state.isCloseButton;
  }
);
export const messagId = createSelector(
  notificationState,
  state => {
    return state.id;
  }
);
export const messagePosition = createSelector(
  notificationState,
  state => {
    return state.position;
  }
);
export const messageCategory = createSelector(
  notificationState,
  state => {
    return state.category;
  }
);

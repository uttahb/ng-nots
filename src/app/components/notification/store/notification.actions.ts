import { Action } from '@ngrx/store';
import { Notification } from './notification.model';

// Section 2
export const SHOW_NOTIFICATION = '[NOTIFICATION] Show';
export const HIDE_NOTIFICATION = '[NOTIFICATION] Hide';

// Action for showing notification
export class ShowNotification implements Action {
  readonly type = SHOW_NOTIFICATION;

  constructor(public payload: Notification) {}
}
// Action for hiding notificaiton
export class HideNotification implements Action {
  readonly type = HIDE_NOTIFICATION;
  constructor(public payload: number) {}
}

// Section 4
export type Actions = ShowNotification | HideNotification;

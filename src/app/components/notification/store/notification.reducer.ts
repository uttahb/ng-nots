import { Notification } from './notification.model';
import * as NotificationActions from './notification.actions';

export default function reducer(
  state: Notification[] = [],
  action: NotificationActions.Actions
) {
  switch (action.type) {
    case NotificationActions.SHOW_NOTIFICATION:
      let newNotificaitonArr = [];

      if (state.length === 5) {
        newNotificaitonArr.push(state[4]);
      } else {
        newNotificaitonArr = state;
      }
      if (
        state.length &&
        action.payload.position !== state[state.length - 1].position
      ) {
        newNotificaitonArr = [];
      }
      return [...newNotificaitonArr, action.payload];

    case NotificationActions.HIDE_NOTIFICATION:
      const notificaitonArr = state;
      notificaitonArr.splice(action.payload, 1);
      return [...notificaitonArr];
    default:
      return state;
  }
}

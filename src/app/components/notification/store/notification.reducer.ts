import { Notification } from './notification.model';
import * as NotificationActions from './notification.actions';

// Section 1
// const initialState: Notification = {
//   isVisible: false,
//   isCloseButton: true,
//   header: null,
//   body: null,
//   timeout: 5000
// };

// Section 2
export function reducer(
  state: Notification[] = [],
  action: NotificationActions.Actions
) {
  // Section 3
  switch (action.type) {
    case NotificationActions.SHOW_NOTIFICATION:
      let newNotificaitonArr = [];
      if (state.length === 5) {
        newNotificaitonArr.push(state[4]);
      } else {
        newNotificaitonArr = state;
      }
      return [...newNotificaitonArr, action.payload];
      break;
    case NotificationActions.HIDE_NOTIFICATION:
      let notificaitonArr = state;
      notificaitonArr.splice(action.payload, 1);
      return [...notificaitonArr];
    default:
      return state;
  }
}

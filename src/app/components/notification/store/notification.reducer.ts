import { Notification } from './notification.model';
import * as NotificationActions from './notification.actions';

// Section 1
const initialState: Notification = {
  isVisible: true,
  isCloseButton: true,
  body: null,
  header: null,
  timeout: 9000,
  id: 1,
  position: null,
  category: null
};

// Section 2
export function reducer(
  state: Notification[] = [initialState],
  action: NotificationActions.Actions
) {
  console.log(action, 'action');

  // Section 3
  switch (action.type) {
    case NotificationActions.SHOW_NOTIFICATION:
      let newNotificaitonArr = [];
      console.log(state, 'state');

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

import { Notification } from './notification.model';
import * as NotificationActions from './notification.actions';

export default function reducer(
  state: Notification[] = [],
  // initial state of Notiification would be an empty array.
  action: NotificationActions.Actions
) {
  switch (action.type) {
    // consumes show notificaiotn action and add the item ot notification state.
    case NotificationActions.SHOW_NOTIFICATION:
      let newNotificaitonArr = [];
      // if notificaiotn count greater than 5
      // the last notification is retained and new notificaiton is pushed to array.
      if (state.length === 5) {
        newNotificaitonArr.push(state[4]);
      } else {
        newNotificaitonArr = state;
      }
      // If position is of the notification is changed
      // new set of notificaiton is generated.
      if (
        state.length &&
        action.payload.position !== state[state.length - 1].position
      ) {
        newNotificaitonArr = [];
      }
      return [...newNotificaitonArr, action.payload];

    case NotificationActions.HIDE_NOTIFICATION:
      // For hiding notification, that item is spliced from state array.
      const notificaitonArr = state;
      notificaitonArr.splice(action.payload, 1);
      return [...notificaitonArr];
    default:
      return state;
  }
}

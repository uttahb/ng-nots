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
export default function reducer(
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
      // if (state.length > 0) {
      //   let pos = state[0].position;
      //   state.forEach(data => {
      //     if (data.position !== pos) {
      //       newNotificaitonArr = [];
      //       newNotificaitonArr.push(data);
      //       console.log(newNotificaitonArr, 'New');
      //     }
      //   });
      // }
      if (
        state.length &&
        action.payload.position !== state[state.length - 1].position
      ) {
        newNotificaitonArr = [];
      }
      console.log([...newNotificaitonArr, action.payload]);
      return [...newNotificaitonArr, action.payload];

    case NotificationActions.HIDE_NOTIFICATION:
      const notificaitonArr = state;
      notificaitonArr.splice(action.payload, 1);
      return [...notificaitonArr];
    default:
      return state;
  }
}

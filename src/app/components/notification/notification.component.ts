import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShowNotification, HideNotification } from './store';
import { messages, Notification } from './store';
/**
 * Component for showing notification
 */
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  setTimer = [];
  count: number;
  private positionsEnum = [
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right'
  ];
  private categoryEnum = ['warning', 'info', 'error'];
  private _position: string;
  private _category: string;
  public messageBody: string;
  public messageHeader: string;
  public notifications: Notification[];

  @Input()
  set position(position: string) {
    // Adding default position as top-left if not given
    let pos = (position && position.trim()) || 'top-left';
    if (!this.positionsEnum.includes(pos)) {
      // if position is not in the enum set to default
      pos = 'top-left';
    }
    this._position = pos;
  }
  @Input()
  set category(category: string) {
    // adding default position as info if not given
    let cat = (category && category.trim()) || 'info';
    if (!this.categoryEnum.includes(cat)) {
      // if category is not in the enum set to default
      cat = 'warning';
    }
    this._category = ' ' + cat;
  }
  constructor(private store: Store<any>) {
    // notificaiton subscription, which subscribes for the notification array in store.
    this.store.select(messages).subscribe((notifications: Notification[]) => {
      if (this.count < notifications.length) {
        // this checks if new set of notificaiton is coming up
        // in that case the timers for info notifications are reset
        // its done because, during this time all the notificaitons would already be
        // removed from store.
        this.setTimer.forEach(timer => {
          clearTimeout(timer);
        });
      }
      // count is the current notifications count
      this.count = notifications.length;
      notifications.forEach((not, index) => {
        // this loop is to check if notificaiton is info category
        // if so a settimeout of input timout is added to the notificaiton for hiding the same.
        if (not.category === 'info') {
          this.setTimer.push(
            setTimeout(() => {
              this.hideThisNotifcation(index);
            }, not.timeout || 90000)
          );
        }
      });
      this.notifications = notifications;
    });
  }

  ngOnInit() {}
  hideThisNotifcation(index) {
    // this action serves to hide speicific notificaiton.
    this.store.dispatch(new HideNotification(index));
  }
}

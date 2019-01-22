import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShowNotification, HideNotification } from './store';
import { messages, Notification } from './store';

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
  public i = 0;
  notifications: Notification[];

  @Input()
  set position(position: string) {
    let pos = (position && position.trim()) || 'top-left';
    if (!this.positionsEnum.includes(pos)) {
      pos = 'top-left';
    }
    this._position = pos;
  }
  @Input()
  set category(category: string) {
    let cat = (category && category.trim()) || 'warning';
    if (!this.categoryEnum.includes(cat)) {
      cat = 'warning';
    }
    this._category = ' ' + cat;
  }
  constructor(private store: Store<any>) {
    this.store.select(messages).subscribe((notifications: Notification[]) => {
      if (this.count < notifications.length) {
        this.setTimer.forEach(timer => {
          clearTimeout(timer);
        });
      }
      this.count = notifications.length;
      notifications.forEach((not, index) => {
        if (not.category === 'info') {
          this.setTimer.push(
            setTimeout(() => {
              this.hideThisNotifcation(index);
            }, not.timeout)
          );
        }
      });
      this.notifications = notifications;
      this.i++;
      if (this.i === 4) {
        return false;
      }
    });
  }

  ngOnInit() {}
  hideThisNotifcation(index) {
    this.store.dispatch(new HideNotification(index));
  }
}

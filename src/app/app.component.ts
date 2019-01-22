import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShowNotification } from './components/notification/store/notification.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-nots';
  public _position = 'top-left';
  public _category = 'warning';
  public header = 'Header';
  public body = 'message body';
  public notificationVisible = false;
  positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  categories = ['warning', 'info', 'error'];

  constructor(private store: Store<any>) {}

  showNotification() {
    this.store.dispatch(
      new ShowNotification({
        isVisible: false,
        isCloseButton: true,
        header: this.header,
        body: this.body,
        timeout: 90000,
        id: 1,
        position: this._position,
        category: this._category
      })
    );
  }
}

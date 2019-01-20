import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShowNotification } from './components/notification/store/notification.actions';
import { showMessage } from './components/notification/store/notification.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-nots';
  public _position = 'top-left';
  public _category = 'warning';
  public notificationVisible = false;
  positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  categories = ['warning', 'info', 'error'];

  constructor(private store: Store<any>) {}

  showNotification() {
    this.store.dispatch(
      new ShowNotification({
        isVisible: false,
        isCloseButton: false,
        header: '',
        body: 'Hai how are you',
        timeout: 6000,
        id: 1,
        position: 'bottom-left',
        category: 'warning'
      })
    );
    this.store.select(showMessage).subscribe(data => {
      this.notificationVisible = data;
      console.log(this.notificationVisible, 'Visible');

      if (this.notificationVisible) {
        setTimeout(() => {
          this.notificationVisible = false;
        }, 6000);
      }
    });
  }
}

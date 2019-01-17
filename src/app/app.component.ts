import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-nots';
  public _position = 'top-left';
  positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
}

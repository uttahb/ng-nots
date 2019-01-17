import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  private positionsEnum = [
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right'
  ];
  private _position: string;
  @Input()
  set position(position: string) {
    console.log('in position setter');
    let pos = (position && position.trim()) || 'top-left';
    if (!this.positionsEnum.includes(pos)) {
      pos = 'top-left';
    }
    this._position = pos;
  }
  constructor() {}

  ngOnInit() {
    console.log(this._position, 'position');
  }
}

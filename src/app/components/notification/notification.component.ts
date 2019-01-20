import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

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
  private categoryEnum = ['warning', 'info', 'error'];
  private _position: string;
  private _category: string;
  public messageBody: string;
  public messageHeader: string;
  public;

  @Input()
  set position(position: string) {
    console.log('in position setter');
    let pos = (position && position.trim()) || 'top-left';
    if (!this.positionsEnum.includes(pos)) {
      pos = 'top-left';
    }
    this._position = pos;
  }
  @Input()
  set category(category: string) {
    console.log('category', category);
    let cat = (category && category.trim()) || 'warning';
    if (!this.categoryEnum.includes(cat)) {
      cat = 'warning';
    }
    this._category = ' ' + cat;
  }
  constructor(private store: Store<any>) {}

  ngOnInit() {
    console.log(this._position, 'position');
  }
}

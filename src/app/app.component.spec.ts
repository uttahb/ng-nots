import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NotificationComponent } from './components/notification/notification.component';
import { AppModule } from './app.module';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { ShowNotification } from './components/notification/store/notification.actions';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      declarations: [],
    })
      .overrideComponent(NotificationComponent, {
        set: {
          selector: 'app-notification',
          template: `<h6>notification now</h6>`
        }
      }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    // arrange

    // act

    // assert
    expect(component).toBeTruthy();
  });

  describe('Component Methods:', () => {
    it('Check component values on first load', () => {
      // arrange

      // act

      // assert
      expect(component.title).toEqual('ng-nots');
      expect(component._position).toEqual('top-left');
      expect(component._category).toEqual('warning');
      expect(component.header).toEqual('Header');
      expect(component.body).toEqual('message body');
      expect(component.notificationVisible).toBeFalsy();
      expect(component.positions).toEqual(['top-left', 'top-right', 'bottom-left', 'bottom-right']);
      expect(component.categories).toEqual(['warning', 'info', 'error']);
    });

    it('showNotification() method:', () => {
      // arrange
      spyOn(store, 'dispatch').and.callThrough();
      // act
      component.showNotification();
      // assert
      let call = new ShowNotification({
        isVisible: false,
        isCloseButton: true,
        header: 'Header',
        body: 'message body',
        timeout: 90000,
        id: 1,
        position: 'top-left',
        category: 'warning'
      })
      expect(store.dispatch).toHaveBeenCalledWith(call);
    })
  })

  describe('Check Dom fuctionalities', () => {
    it('Changing position updates the component value', () => {
      // arrange

      // act

      // assert
      fixture.debugElement.query(By.css('#top-left')).nativeElement.click();
      expect(component._position).toEqual('top-left');

      fixture.debugElement.query(By.css('#top-right')).nativeElement.click();
      expect(component._position).toEqual('top-right');

      fixture.debugElement.query(By.css('#bottom-left')).nativeElement.click();
      expect(component._position).toEqual('bottom-left');

      fixture.debugElement.query(By.css('#bottom-right')).nativeElement.click();
      expect(component._position).toEqual('bottom-right');
    });

    it('Changing catagory updates the component value', () => {
      // arrange

      // act

      // assert
      fixture.debugElement.query(By.css('#warning')).nativeElement.click();
      expect(component._category).toEqual('warning');

      fixture.debugElement.query(By.css('#info')).nativeElement.click();
      expect(component._category).toEqual('info');

      fixture.debugElement.query(By.css('#error')).nativeElement.click();
      expect(component._category).toEqual('error');
    });

    it('Changing values on header field updates the component value', () => {
      // arrange

      // act

      // assert
      let inputVal = fixture.debugElement.query(By.css('#header'));
      inputVal.nativeElement.value = 'head';
      inputVal.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.header).toEqual('head');
    });

    it('Changing values on body field updates the component value', () => {
      // arrange

      // act

      // assert
      let inputVal = fixture.debugElement.query(By.css('#body'));
      inputVal.nativeElement.value = 'body val';
      inputVal.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.body).toEqual('body val');
    });

    it('clicking the button calls the function', () => {
      // arrange
      spyOn(component, 'showNotification');
      // act

      // assert
      fixture.debugElement.query(By.css('button')).nativeElement.click();
      expect(component.showNotification).toHaveBeenCalled();
    })
  });

});
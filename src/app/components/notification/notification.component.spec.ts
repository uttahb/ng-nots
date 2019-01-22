import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationComponent } from './notification.component';
import { AppModule } from 'src/app/app.module';
import { Store } from '@ngrx/store';
import { HideNotification } from './store/notification.actions';
import { By } from '@angular/platform-browser';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Methods:', () => {
    it('hideThisNotifcation method', () => {
      // arrange
      spyOn(store, 'dispatch');
      // act
      component.hideThisNotifcation(2);
      // assert
      const val = new HideNotification(2);
      expect(store.dispatch).toHaveBeenCalledWith(val);
    });
  });

  describe('The notificstion appears as per the incoming value', () => {
    describe('Top left corner notifications', () => {
      it('with warning', () => {
        // arrange

        // act
        component.notifications = [
          {
            isCloseButton: true,
            header: 'Header',
            body: 'message body',
            timeout: 6000,
            id: 1,
            position: 'top-left',
            category: 'warning'
          }
        ];
        fixture.detectChanges();
        // assert
        const notification = fixture.debugElement.query(
          By.css('#notification')
        );
        expect(notification.nativeElement.textContent).toContain(
          'message body'
        );
        expect(notification.nativeElement.textContent).toContain('Header');
        expect(notification.properties.className).toContain('top-left');
        expect(notification.children[0].properties.className).toContain(
          'warning'
        );
      });

      it('with info', () => {
        // arrange

        // act
        component.notifications = [
          {
            isCloseButton: true,
            header: 'Header',
            body: 'message body',
            timeout: 6000,
            id: 1,
            position: 'top-left',
            category: 'info'
          }
        ];
        fixture.detectChanges();
        // assert
        const notification = fixture.debugElement.query(
          By.css('#notification')
        );
        expect(notification.nativeElement.textContent).toContain(
          'message body'
        );
        expect(notification.nativeElement.textContent).toContain('Header');
        expect(notification.properties.className).toContain('top-left');
        expect(notification.children[0].properties.className).toContain('info');
      });

      it('with error', () => {
        // arrange

        // act
        component.notifications = [
          {
            isCloseButton: true,
            header: 'Header',
            body: 'message body',
            timeout: 6000,
            id: 1,
            position: 'top-left',
            category: 'error'
          }
        ];
        fixture.detectChanges();
        // assert
        const notification = fixture.debugElement.query(
          By.css('#notification')
        );
        expect(notification.nativeElement.textContent).toContain(
          'message body'
        );
        expect(notification.nativeElement.textContent).toContain('Header');
        expect(notification.properties.className).toContain('top-left');
        expect(notification.children[0].properties.className).toContain(
          'error'
        );
      });
    });

    describe('Top right corner notifications', () => {
      it('with warning', () => {
        // arrange

        // act
        component.notifications = [
          {
            isCloseButton: true,
            header: 'Header',
            body: 'message body',
            timeout: 6000,
            id: 1,
            position: 'top-right',
            category: 'warning'
          }
        ];
        fixture.detectChanges();
        // assert
        const notification = fixture.debugElement.query(
          By.css('#notification')
        );
        expect(notification.nativeElement.textContent).toContain(
          'message body'
        );
        expect(notification.nativeElement.textContent).toContain('Header');
        expect(notification.properties.className).toContain('top-right');
        expect(notification.children[0].properties.className).toContain(
          'warning'
        );
      });

      it('with info', () => {
        // arrange

        // act
        component.notifications = [
          {
            isCloseButton: true,
            header: 'Header',
            body: 'message body',
            timeout: 6000,
            id: 1,
            position: 'top-right',
            category: 'info'
          }
        ];
        fixture.detectChanges();
        // assert
        const notification = fixture.debugElement.query(
          By.css('#notification')
        );
        expect(notification.nativeElement.textContent).toContain(
          'message body'
        );
        expect(notification.nativeElement.textContent).toContain('Header');
        expect(notification.properties.className).toContain('top-right');
        expect(notification.children[0].properties.className).toContain('info');
      });

      it('with error', () => {
        // arrange

        // act
        component.notifications = [
          {
            isCloseButton: true,
            header: 'Header',
            body: 'message body',
            timeout: 6000,
            id: 1,
            position: 'top-right',
            category: 'error'
          }
        ];
        fixture.detectChanges();
        // assert
        const notification = fixture.debugElement.query(
          By.css('#notification')
        );
        expect(notification.nativeElement.textContent).toContain(
          'message body'
        );
        expect(notification.nativeElement.textContent).toContain('Header');
        expect(notification.properties.className).toContain('top-right');
        expect(notification.children[0].properties.className).toContain(
          'error'
        );
      });
    });

    describe('bottom right corner notifications', () => {
      it('with warning', () => {
        // arrange

        // act
        component.notifications = [
          {
            isCloseButton: true,
            header: 'Header',
            body: 'message body',
            timeout: 6000,
            id: 1,
            position: 'bottom-right',
            category: 'warning'
          }
        ];
        fixture.detectChanges();
        // assert
        const notification = fixture.debugElement.query(
          By.css('#notification')
        );
        expect(notification.nativeElement.textContent).toContain(
          'message body'
        );
        expect(notification.nativeElement.textContent).toContain('Header');
        expect(notification.properties.className).toContain('bottom-right');
        expect(notification.children[0].properties.className).toContain(
          'warning'
        );
      });

      it('with info', () => {
        // arrange

        // act
        component.notifications = [
          {
            isCloseButton: true,
            header: 'Header',
            body: 'message body',
            timeout: 6000,
            id: 1,
            position: 'bottom-right',
            category: 'info'
          }
        ];
        fixture.detectChanges();
        // assert
        const notification = fixture.debugElement.query(
          By.css('#notification')
        );
        expect(notification.nativeElement.textContent).toContain(
          'message body'
        );
        expect(notification.nativeElement.textContent).toContain('Header');
        expect(notification.properties.className).toContain('bottom-right');
        expect(notification.children[0].properties.className).toContain('info');
      });

      it('with error', () => {
        // arrange

        // act
        component.notifications = [
          {
            isCloseButton: true,
            header: 'Header',
            body: 'message body',
            timeout: 6000,
            id: 1,
            position: 'bottom-right',
            category: 'error'
          }
        ];
        fixture.detectChanges();
        // assert
        const notification = fixture.debugElement.query(
          By.css('#notification')
        );
        expect(notification.nativeElement.textContent).toContain(
          'message body'
        );
        expect(notification.nativeElement.textContent).toContain('Header');
        expect(notification.properties.className).toContain('bottom-right');
        expect(notification.children[0].properties.className).toContain(
          'error'
        );
      });
    });

    describe('bottom left corner notifications', () => {
      it('with warning', () => {
        // arrange

        // act
        component.notifications = [
          {
            isCloseButton: true,
            header: 'Header',
            body: 'message body',
            timeout: 6000,
            id: 1,
            position: 'bottom-left',
            category: 'warning'
          }
        ];
        fixture.detectChanges();
        // assert
        const notification = fixture.debugElement.query(
          By.css('#notification')
        );
        expect(notification.nativeElement.textContent).toContain(
          'message body'
        );
        expect(notification.nativeElement.textContent).toContain('Header');
        expect(notification.properties.className).toContain('bottom-left');
        expect(notification.children[0].properties.className).toContain(
          'warning'
        );
      });

      it('with info', () => {
        // arrange

        // act
        component.notifications = [
          {
            isCloseButton: true,
            header: 'Header',
            body: 'message body',
            timeout: 6000,
            id: 1,
            position: 'bottom-left',
            category: 'info'
          }
        ];
        fixture.detectChanges();
        // assert
        const notification = fixture.debugElement.query(
          By.css('#notification')
        );
        expect(notification.nativeElement.textContent).toContain(
          'message body'
        );
        expect(notification.nativeElement.textContent).toContain('Header');
        expect(notification.properties.className).toContain('bottom-left');
        expect(notification.children[0].properties.className).toContain('info');
      });

      it('with error', () => {
        // arrange

        // act
        component.notifications = [
          {
            isCloseButton: true,
            header: 'Header',
            body: 'message body',
            timeout: 6000,
            id: 1,
            position: 'bottom-left',
            category: 'error'
          }
        ];
        fixture.detectChanges();
        // assert
        const notification = fixture.debugElement.query(
          By.css('#notification')
        );
        expect(notification.nativeElement.textContent).toContain(
          'message body'
        );
        expect(notification.nativeElement.textContent).toContain('Header');
        expect(notification.properties.className).toContain('bottom-left');
        expect(notification.children[0].properties.className).toContain(
          'error'
        );
      });
    });
  });

  it('click close calls closeButton function', () => {
    // arrange
    spyOn(component, 'hideThisNotifcation');
    // act
    component.notifications = [
      {
        isCloseButton: true,
        header: 'Header',
        body: 'message body',
        timeout: 6000,
        id: 1,
        position: 'bottom-left',
        category: 'error'
      }
    ];
    fixture.detectChanges();
    // assert
    fixture.debugElement.query(By.css('p')).nativeElement.click();
    expect(component.hideThisNotifcation).toHaveBeenCalled();
  });
});

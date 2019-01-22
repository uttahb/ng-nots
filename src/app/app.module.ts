import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  RouterStateSerializer,
  StoreRouterConfig,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NotificationComponent } from './components/notification/notification.component';
import { FormsModule } from '@angular/forms';
const DEV_IMPORTS: any[] = [
  // NOTE: instrument must come *after* importing StoreModule.
  StoreRouterConnectingModule.forRoot(<StoreRouterConfig>{
    stateKey: 'router'
  }),
  StoreDevtoolsModule.instrument({
    maxAge: 25 //  Retains last 25 states.
  })
];
@NgModule({
  declarations: [AppComponent, NotificationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ...DEV_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

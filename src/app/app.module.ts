import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { INeedARide } from '../pages/i-need-a-ride/i-need-a-ride';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    INeedARide
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    INeedARide
  ],
  providers: []
})
export class AppModule {}

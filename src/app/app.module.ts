import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Needride } from '../pages/needride/needride';
import { Driving } from '../pages/driving/driving';
import { Mycarpools } from '../pages/mycarpools/mycarpools';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Needride,
    Driving,
    Mycarpools
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Needride,
    Driving,
    Mycarpools
  ],
  providers: []
})
export class AppModule {}

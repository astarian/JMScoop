import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Needride } from '../pages/needride/needride';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Needride
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Needride
  ],
  providers: []
})
export class AppModule {}

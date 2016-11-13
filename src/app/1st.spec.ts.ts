import { inject } from '@angular/core/testing';
import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../test';
import { HomePage }          from '../pages/home/home';
import { By }           from '@angular/platform-browser';
import { MyApp }                      from './app.component';
import { MenuMock, NavMock, PlatformMock } from '../mocks';

let fixture: ComponentFixture<HomePage> = null;
let instance: any = null;

describe('Pages: HelloIonic', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([HomePage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it('should create the hello ionic page', async(() => {
    expect(instance).toBeTruthy();
  }));

  it('should have a button that says "I Need a Ride!"', async(() => {
    fixture.detectChanges();
    let inar = fixture.debugElement.query(By.css('#inar')).nativeElement;
    //console.log(inar);
    expect(inar.innerText).toMatch(/I Need a Ride!/);
  }));

  it('should have a button that says "My Carpools"', async(() => {
    fixture.detectChanges();
    let mycarpools = fixture.debugElement.query(By.css('#mycarpools')).nativeElement;
    //console.log(driving);
    expect(mycarpools.innerText).toMatch(/My Carpools/);
  }));

});

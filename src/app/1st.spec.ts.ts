import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../test';
import { HomePage }          from '../pages/home/home';
import { By }           from '@angular/platform-browser';

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
});
import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../../test';
import { Mycarpools }              from './mycarpools';
import { By }                      from '@angular/platform-browser';

let fixture: ComponentFixture<Mycarpools> = null;
let instance: any = null;

describe('Pages: Mycarpools', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([Mycarpools]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it('should create the mycarpools page', async(() => {
    expect(instance).toBeTruthy();
  }));

});

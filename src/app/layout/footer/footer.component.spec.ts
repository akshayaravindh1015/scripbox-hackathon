import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {

  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(FooterComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  });

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have latest copyright year', () => {
    const copyright = el.query(By.css('.copyright'));
    expect(copyright).toBeTruthy("CopyRight is not present in the footer");
    const curryear = (new Date()).getFullYear();
    expect(copyright.nativeElement.textContent).toContain(curryear, "Copyright year is not the latest year.");
  });

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apartado4Component } from './apartado4.component';

describe('Apartado4Component', () => {
  let component: Apartado4Component;
  let fixture: ComponentFixture<Apartado4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apartado4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apartado4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

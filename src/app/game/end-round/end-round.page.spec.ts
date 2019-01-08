import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndRoundPage } from './end-round.page';

describe('EndRoundPage', () => {
  let component: EndRoundPage;
  let fixture: ComponentFixture<EndRoundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndRoundPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndRoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

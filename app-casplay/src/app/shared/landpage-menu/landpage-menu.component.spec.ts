import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandpageMenuComponent } from './landpage-menu.component';

describe('LandpageMenuComponent', () => {
  let component: LandpageMenuComponent;
  let fixture: ComponentFixture<LandpageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandpageMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandpageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

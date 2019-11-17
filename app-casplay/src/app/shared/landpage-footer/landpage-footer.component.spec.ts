import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandpageFooterComponent } from './landpage-footer.component';

describe('LandpageFooterComponent', () => {
  let component: LandpageFooterComponent;
  let fixture: ComponentFixture<LandpageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandpageFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandpageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

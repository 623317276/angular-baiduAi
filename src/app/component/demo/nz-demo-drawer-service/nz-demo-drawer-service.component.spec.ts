import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoDrawerServiceComponent } from './nz-demo-drawer-service.component';

describe('NzDemoDrawerServiceComponent', () => {
  let component: NzDemoDrawerServiceComponent;
  let fixture: ComponentFixture<NzDemoDrawerServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoDrawerServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoDrawerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

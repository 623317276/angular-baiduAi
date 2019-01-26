import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDemoUploadPictureCardComponent } from './nz-demo-upload-picture-card.component';

describe('NzDemoUploadPictureCardComponent', () => {
  let component: NzDemoUploadPictureCardComponent;
  let fixture: ComponentFixture<NzDemoUploadPictureCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzDemoUploadPictureCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzDemoUploadPictureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

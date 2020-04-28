import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLetterAvatarComponent } from './ngx-letter-avatar.component';

describe('NgxLetterAvatarComponent', () => {
  let component: NgxLetterAvatarComponent;
  let fixture: ComponentFixture<NgxLetterAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLetterAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLetterAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOpenedComponent } from './message-opened.component';

describe('MessageOpenedComponent', () => {
  let component: MessageOpenedComponent;
  let fixture: ComponentFixture<MessageOpenedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageOpenedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageOpenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

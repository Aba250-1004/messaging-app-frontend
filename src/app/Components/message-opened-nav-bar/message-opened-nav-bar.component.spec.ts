import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOpenedNavBarComponent } from './message-opened-nav-bar.component';

describe('MessageOpenedNavBarComponent', () => {
  let component: MessageOpenedNavBarComponent;
  let fixture: ComponentFixture<MessageOpenedNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageOpenedNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageOpenedNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

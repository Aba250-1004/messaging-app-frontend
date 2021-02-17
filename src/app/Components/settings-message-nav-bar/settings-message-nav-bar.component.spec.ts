import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMessageNavBarComponent } from './settings-message-nav-bar.component';

describe('SettingsMessageNavBarComponent', () => {
  let component: SettingsMessageNavBarComponent;
  let fixture: ComponentFixture<SettingsMessageNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsMessageNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMessageNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
